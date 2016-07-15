import React from 'react';

export default class CommentForm extends React.Component {
    state = { author: '', text: '' }

    handleAuthorChange = (e) => this.setState({author: e.target.value})
    
    handleTextChange = (e) => this.setState({text: e.target.value})

    render () {
        return (
            <form className="commentForm">
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
                <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <input type="submit" value="Post" />
            </form>
        );
    }
}