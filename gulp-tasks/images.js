import gulp from "gulp";

import config from "./config";

export default () => {
    return gulp.src(config.images.entryPoint)
        .pipe(gulp.dest(config.images.output));
}