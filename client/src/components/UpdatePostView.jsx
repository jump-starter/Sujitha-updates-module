import React from 'react';
import UpdatePostCommentFeed from './UpdatePostCommentFeed.jsx'

const UpdatePostView = (props) => (
     <div>
        <h5 id="update-date">{props.update.date}</h5>
        <h2 id="update-title">{props.update.title}</h2>
        <div id="comments-like-bar">
            <span id="update-post-comments">{(() => {
                if (props.update.comments.length > 1) { return props.update.comments.length + ' Comments ' }
                else if (props.update.comments.length === 1) { return props.update.comments.length + ' Comment ' }
                else { return }})()}
            </span>
            <button id="like-button" type="button">♥ Like</button>
            <span id="update-post-likes"> {(() => {
                if (props.update.likes > 1) { return props.update.likes + ' Likes' }
                else if (props.update.likes === 1) { return props.update.likes + ' Like' }
                else { return }})()}
            </span>
        </div>
        <p id="update-body">{props.update.body}</p>
        <div id="previous-next-update-bar">
            <button id="previous">&lt; Previous Update</button>
            <button id="previous">Next Update &gt;</button>
        </div>
        <button id="like-button-2" type="button">♥ Like</button>
        <UpdatePostCommentFeed comments={props.update.comments}/>
    </div>
)

export default UpdatePostView;