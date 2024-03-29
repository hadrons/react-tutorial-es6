import React from 'react';

export default class CommentForm extends React.Component {
    state = { author: '', text: '' }

    handleAuthorChange = (e) => this.setState({author: e.target.value})
    
    handleTextChange = (e) => this.setState({text: e.target.value})

    handleSubmit = (e) => {
        let author = this.state.author.trim();
        let text = this.state.text.trim();
        
        e.preventDefault();
        
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.setState({author: '', text: ''});
    }

    render () {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
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