import gulp from "gulp";
import connect from "gulp-connect";

import config from "./config";

export default () => {
    connect.server(config.connect.options);
}