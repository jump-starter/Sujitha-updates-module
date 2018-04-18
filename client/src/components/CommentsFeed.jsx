import React from 'react';
import CommentItem from './CommentItem.jsx'

const CommentsFeed = (props) => (
    <div>
        <h4 className="update-post-comments">Comments</h4>
        <h6 className="login-box">Only backers can post comments. <button className="remove-button box-text">Log In</button></h6>
        <div className="right-side-comments-box">
            <h6 className="box-text">Use this space to cheer the creator along, and talk to your fellow backers.</h6>
            <h6 className="box-text">Have a question? <button className="remove-button box-text">Check out the FAQ</button></h6>
        </div>
        {props.comments.map((comment, i) => <CommentItem comment={comment} key={"c" + i}/>)}
    </div>
)

export default CommentsFeed;