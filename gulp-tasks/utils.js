import gutil from 'gulp-util';

export function handleStreamError (error) {
    gutil.log(gutil.colors.bgRed(gutil.colors.white(`Error in plugin ${error.plugin}`)));
    gutil.log(gutil.colors.cyan("File"), gutil.colors.green(error.file || error.filename));
    if (error.loc) {
        error.line = error.loc.line;
        error.column = error.loc.column;
    }
    if (error.line) {
        gutil.log(
            gutil.colors.cyan("Line"),
            gutil.colors.green(error.line)
        );
    }
    if (error.column) {
        gutil.log(
            gutil.colors.cyan("Column"),
            gutil.colors.green(error.column)
        );
    }
    gutil.log(gutil.colors.bgWhite(gutil.colors.red(error.messageFormatted || error.message)))
    if (error.codeFrame) {
        gutil.log(
            gutil.linefeed,
            gutil.colors.cyan("codeFrame"),
            error.codeFrame
        );
    }

    this.emit("end");
}
