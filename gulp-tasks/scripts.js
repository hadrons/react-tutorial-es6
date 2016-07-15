import gulp from "gulp";
import browserify from 'browserify';
import source from 'vinyl-source-stream';

import config from "./config";
import { handleStreamError } from './utils';

export default () => {
    return browserify(config.scripts.entryPoint, {
            debug: true,
            extensions: [".jsx"],
            transform: [[
                "babelify", {
                    presets: ["es2015", "react"],
                    plugins: ["transform-class-properties", "transform-decorators"]
                }
              ]]
        })
        .bundle()
        .on("error", handleStreamError)
        .pipe(source(config.scripts.outputFileName))
        .pipe(gulp.dest(config.scripts.output));
}