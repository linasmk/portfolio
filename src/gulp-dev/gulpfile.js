"use strict";

/* ============ Variables =========== */
const { src, dest, watch, series, parallel, task } = require("gulp");

const gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  del = require("del"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  browserify = require("browserify"),
  babelify = require("babelify"),
  source = require("vinyl-source-stream"),
  buffer = require("vinyl-buffer"),
  plumber = require("gulp-plumber");

const sitename = "portfolio",
  root = `../../../${sitename}/`;

const jsSrc = `main.js`,
  jsFolder = `${root}src/js/`,
  jsFiles = [jsSrc];

/* ============ Functions =========== */
function triggerPlumber(src_file, dest_file) {
  return src(src_file)
    .pipe(plumber())
    .pipe(dest(dest_file));
}

function images() {
  return triggerPlumber(`${root}src/img/**/*`, `${root}img/`);
}

function webfonts() {
  return triggerPlumber(`${root}src/webfonts/**/*`, `${root}webfonts/`);
}

function txt() {
  return triggerPlumber(`${root}src/**.txt`, `${root}`);
}

function xml() {
  return triggerPlumber(`${root}src/**.xml`, `${root}`);
}

function php() {
  return triggerPlumber(`${root}src/**/*.php`, `${root}`);
}

function concatScripts() {
  return src([
    `${root}src/js/carousel.js`,
    `${root}src/js/lazy.js`,
    `${root}src/js/script.js`
  ])
    .pipe(sourcemaps.init())
    .pipe(concat("main.js"))
    .pipe(sourcemaps.write("./"))
    .pipe(dest(`${root}src/js/`));
}

function minifyJS(done) {
  jsFiles.map(function(entry) {
    return browserify({
      entries: [jsFolder + entry]
    })
      .transform(babelify, { presets: ["@babel/preset-env"] })
      .bundle()
      .pipe(source(entry))
      .pipe(rename({ extname: ".min.js" }))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(sourcemaps.write("./"))
      .pipe(dest(`${root}js/`));
  });
  done();
}

function compileSass() {
  return src(`${root}src/scss/style.scss`)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
        indentType: "tab",
        indentWidth: "1",
        errorLogToConsole: true
      })
    )
    .on("error", sass.logError)
    .pipe(postcss([autoprefixer("last 5 versions", "> 1%")]))
    .pipe(sourcemaps.write("./"))
    .pipe(dest(`${root}css/`))
    .pipe(browserSync.stream());
}

function clean(done) {
  del.sync(
    [
      `${root}**/*.php`,
      `${root}**/*.css`,
      `${root}**/*.map`,
      `${root}img/**/*`,
      `${root}js/**/*`,
      `${root}**/*.txt`,
      `${root}**/*.xml`,
      `!${root}src/**/*`,
      `!${root}**/*.git`,
      `!${root}**/*.gitattributes`,
      `!${root}**/*.gitignore`
    ],
    { force: true }
  );
  done();
}

function browser_sync() {
  browserSync.init({
    open: true,
    injectChanges: true,
    proxy: "http://localhost/1.WEBSITES/portfolio/",
    port: 8080
    /*server: {
			baseDir: './dist/'
		}*/
  });
}

function reload(done) {
  browserSync.reload();
  done();
}

/* ========== Project Watch ========== */
function watchFiles() {
  watch(`${root}src/**/*.txt`, series(txt, reload));
  watch(`${root}src/**/*.xml`, series(xml, reload));
  watch(`${root}src/img/**/*.*`, series(images, reload));
  watch(`${root}src/webfonts/**/*.*`, series(webfonts, reload));
  watch(`${root}src/**/*.php`, series(php, reload));
  watch([`${root}src/js/**/*.js`], series(concatScripts, minifyJS, reload));
  watch(`${root}src/scss/**/*.scss`, compileSass);
}

/* ============ Tasks =========== */
task("trstxt", txt);
task("trsxml", xml);
task("img", images);
task("trswebfonts", webfonts);
task("delete", clean);
task("trsphp", php);
task("concat", concatScripts);
task("minify", series(concatScripts, minifyJS));
task("sass", compileSass);
task("watch", parallel(browser_sync, watchFiles));

task(
  "default",
  series(
    clean,
    parallel(
      "trstxt",
      "trsxml",
      "minify",
      "sass",
      "img",
      "trsphp",
      "trswebfonts"
    )
  )
);
