import gulp from "gulp";

import config from "./gulp-tasks/config";
import scripts from "./gulp-tasks/scripts";
import images from "./gulp-tasks/images";
import fonts from "./gulp-tasks/fonts";
import templates from "./gulp-tasks/templates";
import styles from "./gulp-tasks/styles";
import json from "./gulp-tasks/json";
import connect from "./gulp-tasks/connect";
import watch from "./gulp-tasks/watch";

gulp.task(config.scripts.taskName, scripts);
gulp.task(config.images.taskName, images);
gulp.task(config.fonts.taskName, fonts);
gulp.task(config.templates.taskName, templates);
gulp.task(config.styles.taskName, styles);
gulp.task(config.json.taskName, json);
gulp.task(config.connect.taskName, connect);
gulp.task(config.watch.taskName, watch);

gulp.task("build", [
    config.scripts.taskName,
    config.templates.taskName,
    config.styles.taskName,
    config.fonts.taskName,
    config.images.taskName,
    config.json.taskName
]);

gulp.task("default", [
    "build",
    config.watch.taskName,
    config.connect.taskName
]);
