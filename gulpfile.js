"use strict";
/* ======== Package Variables ======= */
const gulp = require("gulp"),
  path = require("path"),
  autoprefixer = require("gulp-autoprefixer"),
  browsersync = require("browser-sync").create(),
  reload = browsersync.reload,
  sass = require("gulp-sass"),
  cleanCSS = require("gulp-clean-css"),
  sourcemaps = require("gulp-sourcemaps"),
  imagemin = require("gulp-imagemin"),
  changed = require("gulp-changed"),
  lineec = require("gulp-line-ending-corrector"),
  babel = require("gulp-babel"),
  del = require("del"),
  webp = require("gulp-webp"),
  webpack = require("webpack"),
  critical = require("critical");
const { src, dest, watch, series, parallel, task } = require("gulp");
/* ======== Themename and Root ======= */
const themename = "portfolio",
  Root = path.join(__dirname, `../${themename}`);
/* ======== Source Folders ======= */
const sources = {
  src: `${Root}/src/`,
  scss: `${Root}/src/scss/`,
  js: `${Root}/src/js/`,
  img: `${Root}/src/img/`,
  webfonts: `${Root}/src/webfonts/`,
};
/* ======== Distribution Folders ======= */
const distribution = {
  dist: `${Root}/dist/`,
  css: `${Root}/dist/css/`,
  js: `${Root}/dist/js/`,
  img: `${Root}/dist/img/`,
  webfonts: `${Root}/dist/webfonts/`,
};
/* =============== WebPack =============== */
function webPackCompile(done) {
  return new Promise((resolve, reject) => {
    webpack(require("./webpack.config.js"), (err, stats) => {
      if (err) {
        return reject(err);
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats));
      }
      resolve();
    });
  });
}
/* ======== Critical CSS rendering ======= */
const renderCritical = () => {
  return critical.generate({
    inline: false,
    base: `${Root}`,
    src: "dist/index.html",
    css: [`${Root}/dist/css/style.css`],
    width: 1280,
    height: 800,
    dest: `${Root}/dist/critical.css`,
    minify: false,
    //extract: true,
    //ignore: ["font-face"],
  });
};
/* ======== Functions ======= */
const webpConvert = () => {
  return src(`${sources.img}**`)
    .pipe(webp({ preset: "photo", quality: 75, method: 6 }))
    .pipe(dest(distribution.img));
};
const trsPhp = () =>
  src(`${sources.src}**/*.php`).pipe(dest(distribution.dist));
const trsWebfonts = () => {
  return src(`${sources.webfonts}*`).pipe(dest(distribution.webfonts));
};
const compileSass = () => {
  return src(`${sources.scss}style.scss`)
    .pipe(
      sass({
        outputStyle: "compressed",
        indentType: "tab",
        indentWidth: "1",
        errorLogToConsole: true,
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer("last 2 versions"))
    .pipe(sourcemaps.write())
    .pipe(lineec())
    .pipe(dest(distribution.css))
    .pipe(browsersync.stream());
};
const imgMin = () => {
  return src(`${sources.img}**/*`)
    .pipe(changed(distribution.img))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 3 }),
      ])
    )
    .pipe(dest(distribution.img));
};
const trsOtherFiles = () => {
  return src([`${sources.src}**.txt`, `${sources.src}**.xml`]).pipe(
    dest(distribution.dist)
  );
};
const clean = (done) => {
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
      `!${Root}/**/*.gitignore`,
    ],
    { force: true }
  );
  done();
};
const watchFiles = () => {
  browsersync.init({
    open: "external",
    injectChanges: true,
    proxy: "http://localhost/1.websites/portfolio/dist/",
    port: 8080,
  });
  watch(sources.src, trsPhp).on("change", browsersync.reload);
  watch(sources.webfonts, trsWebfonts).on("change", browsersync.reload);
  watch(sources.scss, compileSass);
  watch(sources.js, webPackCompile).on("change", browsersync.reload);
  watch(sources.img, series(imgMin, webpConvert)).on(
    "change",
    browsersync.reload
  );
  watch(sources.src, trsOtherFiles).on("change", browsersync.reload);
};
const build = series(
  clean,
  parallel(
    compileSass,
    webPackCompile,
    imgMin,
    trsPhp,
    trsWebfonts,
    trsOtherFiles
  ),
  webpConvert
);
/* ============ Tasks =========== */
task("compileSass", compileSass);
task("webPackCompile", webPackCompile);
task("imgMin", imgMin);
task("webpConvert", webpConvert);
task("trsPhp", trsPhp);
task("trsWebfonts", trsWebfonts);
task("trsOtherFiles", trsOtherFiles);
task("renderCritical", renderCritical);
task("clean", clean);
task("watch", watchFiles);
task("default", build);
/* ============ Exports =========== */
exports.trsPhp = trsPhp;
exports.trsWebfonts = trsWebfonts;
exports.compileSass = compileSass;
exports.webPackCompile = webPackCompile;
exports.imgMin = imgMin;
exports.webpConvert = webpConvert;
exports.trsOtherFiles = trsOtherFiles;
exports.renderCritical = renderCritical;
exports.clean = clean;
exports.watchFiles = watchFiles;
exports.build = build;
