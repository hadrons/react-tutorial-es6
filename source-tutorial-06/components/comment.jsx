import React from 'react';
import Remarkable from 'remarkable';

let md = new Remarkable();

export default class Comment extends React.Component {
    render () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {md.render(this.props.children.toString())}
            </div>
        );
    }
}