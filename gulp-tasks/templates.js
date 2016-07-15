import gulp from "gulp";

import config from "./config";

export default () => {
    return gulp.src(config.templates.entryPoint)
        .pipe(gulp.dest(config.templates.output));
}