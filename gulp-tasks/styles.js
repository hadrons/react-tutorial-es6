import gulp from "gulp";
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import concat from "gulp-concat";

import config from "./config";
import { handleStreamError } from './utils';

export default () => {
    gulp.src(config.styles.entryPoint)
        .pipe(sass().on('error', handleStreamError))
        .pipe(cleanCSS())
        .pipe(concat(config.styles.outputFileName))
        .pipe(gulp.dest(config.styles.output));
}