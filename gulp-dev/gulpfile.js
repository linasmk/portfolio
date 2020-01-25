"use strict";
/* ======== Package Variables ======= */
const gulp = require("gulp"),
  autoprefixer = require("gulp-autoprefixer"),
  browsersync = require("browser-sync").create(),
  reload = browsersync.reload,
  sass = require("gulp-sass"),
  cleanCSS = require("gulp-clean-css"),
  sourcemaps = require("gulp-sourcemaps"),
  concat = require("gulp-concat"),
  imagemin = require("gulp-imagemin"),
  changed = require("gulp-changed"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  lineec = require("gulp-line-ending-corrector"),
  babel = require("gulp-babel"),
  del = require("del");

const { src, dest, watch, series, parallel, task } = require("gulp");

/* ======== Themename and Root ======= */
const themename = "portfolio",
  Root = `../../${themename}`;

/* ======== Source Folders ======= */
const sources = {
  src: `${Root}/src/`,
  scss: `${Root}/src/scss/`,
  js: `${Root}/src/js/`,
  img: `${Root}/src/img/`,
  webfonts: `${Root}/src/webfonts/`
};

/* ======== Distribution Folders ======= */
const distribution = {
  dist: `${Root}/dist/`,
  css: `${Root}/dist/css/`,
  js: `${Root}/dist/js/`,
  img: `${Root}/dist/img/`,
  webfonts: `${Root}/dist/webfonts/`
};

/* ======== File Concatination ======= */
const concatOrder = [
  `${sources.js}script.js`,
  `${sources.js}erot13.js`,
  `${sources.js}carousel.js`,
  `${sources.js}lazy.js`
];

/* ======== Functions ======= */
// export const trsPhp = () =>
//   src(`${sources.src}**/*.php`).pipe(dest(distribution.dist));

function trsPhp() {
  return src(`${sources.src}**/*.php`).pipe(dest(distribution.dist));
}
function trsWebfonts() {
  return src(`${sources.webfonts}*`).pipe(dest(distribution.webfonts));
}
function compileSass() {
  return src(`${sources.scss}style.scss`)
    .pipe(
      sass({
        outputStyle: "compressed",
        indentType: "tab",
        indentWidth: "1",
        errorLogToConsole: true
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer("last 2 versions"))
    .pipe(sourcemaps.write())
    .pipe(lineec())
    .pipe(dest(distribution.css))
    .pipe(browsersync.stream());
}
function compileJs() {
  return src(concatOrder)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(concat("main.js"))
    .pipe(rename({ extname: ".min.js" }))
    .pipe(uglify())
    .pipe(lineec())
    .pipe(sourcemaps.write("."))
    .pipe(dest(distribution.js));
}
function imgMin() {
  return src(`${sources.img}**/*`)
    .pipe(changed(distribution.img))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 })
      ])
    )
    .pipe(dest(distribution.img));
}
function trsOtherFiles() {
  return src([`${sources.src}**.txt`, `${sources.src}**.xml`]).pipe(
    dest(distribution.dist)
  );
}
function clean(done) {
  del.sync(
    [
      `${Root}/dist/**/*`,
      `!${Root}/package-lock.json`,
      `!${Root}/package.json`,
      `!${Root}/gulpfile.js`,
      `!${Root}/gulp-dev`,
      `!${Root}/src/**/*`,
      `!${Root}/**/*.git`,
      `!${Root}/**/*.gitattributes`,
      `!${Root}/**/*.gitignore`
    ],
    { force: true }
  );
  done();
}
function watchFiles() {
  browsersync.init({
    open: "external",
    injectChanges: true,
    proxy: "http://localhost/1.websites/portfolio/dist/",
    port: 8080
  });
  watch(`${sources.src}**/*.php`, trsPhp).on("change", browsersync.reload);
  watch(sources.webfonts, trsWebfonts).on("change", browsersync.reload);
  watch(sources.scss, compileSass);
  watch(concatOrder, compileJs).on("change", browsersync.reload);
  watch(sources.img, imgMin).on("change", browsersync.reload);
  watch([`${sources.src}**.xml`, `${sources.src}**.xml`], trsOtherFiles).on(
    "change",
    browsersync.reload
  );
}

const build = series(
  clean,
  parallel(compileSass, compileJs, imgMin, trsPhp, trsWebfonts, trsOtherFiles)
);
/* ============ Tasks =========== */
task("compileSass", compileSass);
task("compileJs", compileJs);
task("imgMin", imgMin);
task("trsPhp", trsPhp);
task("trsWebfonts", trsWebfonts);
task("trsOtherFiles", trsOtherFiles);
task("clean", clean);
task("watch", watchFiles);
task("default", build);

/* ============ Exports =========== */
exports.trsPhp = trsPhp;
exports.trsWebfonts = trsWebfonts;
exports.compileSass = compileSass;
exports.compileJs = compileJs;
exports.imgMin = imgMin;
exports.trsOtherFiles = trsOtherFiles;
exports.clean = clean;
exports.watchFiles = watchFiles;
exports.build = build;
