import React from 'react';
import UpdatePostCommentFeed from './UpdatePostCommentFeed.jsx'

const UpdatePostView = (props) => (
     <div>
        <h5 className="update-date">{props.update.date}</h5>
        <h2 className="update-title">{props.update.title}</h2>
        <div className="comments-like-bar">
            <span className="update-post-comments">{(() => {
                if (props.update.comments.length > 1) { return props.update.comments.length + ' Comments ' }
                else if (props.update.comments.length === 1) { return props.update.comments.length + ' Comment ' }
                else { return }})()}
            </span>
            <button className="like-button" type="button">♥ Like</button>
            <span className="update-post-likes"> {(() => {
                if (props.update.likes > 1) { return props.update.likes + ' Likes' }
                else if (props.update.likes === 1) { return props.update.likes + ' Like' }
                else { return }})()}
            </span>
        </div>
        <p className="update-body">{props.update.body}</p>
        <div className="previous-next-update-bar">
            {(()=>{ //if previous/next exists, render button
                if (props.updateView.previous) return <button id="previous" onClick={() => props.handleClick(props.updateView.previous)}>&lt; Previous Update</button>
            })()}
            {(() => {
                if (props.updateView.next) return <button id="next" onClick={() => props.handleClick(props.updateView.next)}>Next Update &gt;</button> 
            })()}
        </div>
        <button className="like-button-2" type="button">♥ Like</button>
        <UpdatePostCommentFeed comments={props.update.comments}/>
    </div>
)

export default UpdatePostView;