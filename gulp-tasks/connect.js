import gulp from "gulp";
import connect from "gulp-connect";

import config from "./config";

let comments = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

config.connect.options.middleware = connect => [handleComments];

function handleComments (req, res, next) {
    let requestBody = "";
    if (req.url.indexOf('/api/comments') === 0) {
        req.on('data', chunk => requestBody += chunk);
        req.on('end', handleRequest);
    } else {
        next();
    }

    function handleRequest () {
        if (req.method === 'POST') {
            let newComment = JSON.parse(requestBody);
            newComment.id = comments.length + 1;
            comments.push(newComment);
        }
        let body = JSON.stringify(comments);
        res.setHeader('Content-Type', 'application/json');
        res.end(body);
    }
}
export default () => {
    connect.server(config.connect.options);
}