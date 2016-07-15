let sourcePath = "./source";
let buildPath = "./build";
let connect = {
    taskName: "connect",
    options: {
        root: buildPath,
        port: 8080,
        host: "0.0.0.0",
        livereload: false
    }
};
let styles = {
    entryPoint: `${sourcePath}/main.sass`,
    whatToWatch: `${sourcePath}/**/*.sass`,
    outputFileName: "main.min.css",
    output: buildPath,
    taskName: "styles"
};
let templates = {
    entryPoint: `${sourcePath}/**/*.html`,
    whatToWatch: `${sourcePath}/**/*.html`,
    output: buildPath,
    taskName: "templates"
};
let scripts = {
    entryPoint: `${sourcePath}/main.jsx`,
    whatToWatch: [`${sourcePath}/**/*.js`, `${sourcePath}/**/*.jsx`],
    outputFileName: "main.js",
    output: buildPath,
    taskName: "scripts"
};
let images = {
    entryPoint: `${sourcePath}/images/**/*`,
    whatToWatch: `${sourcePath}/images/**/*`,
    output: `${buildPath}/images`,
    taskName: "images"
};
let fonts = {
    entryPoint: `${sourcePath}/fonts/**/*`,
    whatToWatch: `${sourcePath}/fonts/**/*`,
    output: `${buildPath}/fonts`,
    taskName: "fonts"
};
let watch = {
    taskName: "watch"
};
let json = {
    entryPoint: `${sourcePath}/**/*.json`,
    whatToWatch: `${sourcePath}/**/*.json`,
    output: buildPath,
    taskName: "json"
};

export default {
    sourcePath,
    buildPath,
    connect,
    styles,
    scripts,
    templates,
    images,
    fonts,
    watch,
    json
};
