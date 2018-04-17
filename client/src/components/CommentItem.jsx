import React from 'react';
//use moments

const CommentItem = (props) => (
    <div className="update-post-comment-item">
        <img className="comment-avatar" src={props.comment.avatar} alt="Smiley face" height="20" width="20" />
        <span className="comment-username">{props.comment.userName}</span>
        <span className="comment-date">{props.comment.date}</span>
        <p className="comment-body">{props.comment.body}</p>
    </div>
)



export default CommentItem;