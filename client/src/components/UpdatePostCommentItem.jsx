import React from 'react';
import moment from 'moment';

const UpdatePostCommentItem = (props) => (
    <div id="update-post-comment-item">
        <img id="comment-avatar" src={props.comment.avatar} alt="Smiley face" height="20" width="20"/>
        <span id="comment-username">{props.comment.userName}</span>
        <span id="comment-date">{moment(props.comment.date).fromNow()}</span>
        <p id="comment-body">{props.comment.body}</p>
    </div>
)



export default UpdatePostCommentItem;