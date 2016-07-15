import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './components/comment-box';

ReactDOM.render(<CommentBox />, document.getElementById("content"));