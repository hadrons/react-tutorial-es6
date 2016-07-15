import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './components/comment-box';

ReactDOM.render(<CommentBox url="/api/comments.json" pollInterval={2000}/>, document.getElementById("content"));