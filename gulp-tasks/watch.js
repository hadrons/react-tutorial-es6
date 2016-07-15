import gulp from "gulp";

import config from "./config";

export default () => {
    gulp.watch(config.styles.whatToWatch, [config.styles.taskName]);
    gulp.watch(config.scripts.whatToWatch, [config.scripts.taskName]);
    gulp.watch(config.templates.whatToWatch, [config.templates.taskName]);
    gulp.watch(config.fonts.whatToWatch, [config.fonts.taskName]);
    gulp.watch(config.images.whatToWatch, [config.images.taskName]);
}