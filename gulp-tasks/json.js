import gulp from "gulp";

import config from "./config";

export default () => {
    return gulp.src(config.json.entryPoint)
        .pipe(gulp.dest(config.json.output));
}