var gulp = require('gulp');
var postcss = require('gulp-postcss');
var stylefmt = require('gulp-stylefmt');
var postcss_reporter = require('postcss-reporter');
var stylelint = require('stylelint');
var stylelint_config = require('stylelint-config-standard');

var PLI = require('superfly-css-pli');

var processors = [stylelint(stylelint_config), postcss_reporter({
  clearMessages: true
})];

gulp.task('lint:css', function() {
  gulp.src(PLI.TARGET_MAIN_CSS)
    .pipe(stylefmt())
    .pipe(postcss(processors));
  return gulp.src(PLI.TARGET_TEST_CSS)
    .pipe(postcss(processors));
});
