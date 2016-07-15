import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './components/comment-box';

ReactDOM.render(<CommentBox url="/api/comments.json"/>, document.getElementById("content"));