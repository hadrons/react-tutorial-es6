import React from 'react';
import { default as $ } from 'jquery';

import CommentList from './comment-list';
import CommentForm from './comment-form';

export default class CommentBox extends React.Component {
    state = { data: [] }

    componentDidMount () {
        $.get(this.props.url)
            .done((data) => this.setState({ data: data }))
            .fail((xhr, status, err) => console.error(this.props.url, status, err.toString()));
    }

    render () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        );
    }
}