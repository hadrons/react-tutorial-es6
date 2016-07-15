import gulp from "gulp";

import config from "./config";

export default () => {
    return gulp.src(config.fonts.entryPoint)
        .pipe(gulp.dest(config.fonts.output));
}