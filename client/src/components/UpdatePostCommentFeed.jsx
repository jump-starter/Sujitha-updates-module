import React from 'react';
import UpdatePostCommentItem from './UpdatePostCommentItem.jsx'

const UpdatePostCommentFeed = (props) => (
    <div>
        <h4 id="update-post-comments">Comments</h4>
        <h6 id="update-post-comments-login">Only backers can post comments. <span id="login">Log In</span></h6>
        {props.comments.map((comment, i)=> <UpdatePostCommentItem comment={comment} key={"uc"+i}/>)}
    </div>
)

export default UpdatePostCommentFeed;