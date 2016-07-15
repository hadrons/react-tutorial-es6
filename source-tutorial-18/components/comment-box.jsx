import React from 'react';
import { default as $ } from 'jquery';

import CommentList from './comment-list';
import CommentForm from './comment-form';

export default class CommentBox extends React.Component {
    state = { data: [] }

    loadCommentsFromServer () {
        $.get(this.props.url)
            .done((data) => this.setState({ data: data }))
            .fail((xhr, status, err) => console.error(this.props.url, status, err.toString()));
    }

    handleCommentSubmit (comment) {
        // TODO: submit to the server and refresh the list
    }

    componentDidMount () {
        this.loadCommentsFromServer();
        setInterval(() => this.loadCommentsFromServer(), this.props.pollInterval);
    }

    render () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }
}