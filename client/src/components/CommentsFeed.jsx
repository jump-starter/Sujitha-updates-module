import React from 'react';
import CommentItem from './CommentItem.jsx'

const CommentsFeed = (props) => (
    <div>
        <h4 id="update-post-comments">Comments</h4>
        <h6 id="update-post-comments-login">Only backers can post comments. <span id="login">Log In</span></h6>
        <h6 id="update-post-comments-login">Use this space to cheer the creator along, and talk to your fellow backers.<br/>><br/>>Have a question?<span id="login">Check out the FAQ</span></h6>
        {props.comments.map((comment, i) => <CommentItem comment={comment} key={"c" + i}/>)}
    </div>
)

export default CommentsFeed;