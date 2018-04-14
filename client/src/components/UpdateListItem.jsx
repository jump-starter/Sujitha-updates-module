import React from 'react';

const UpdateListItem = (props) => (
    <div id="update-list-item" onClick={() => props.handleClick(props.update.title)}>
        <h5 id="update-date">{props.update.date}</h5>
        <h3 id="update-title">{props.update.title}</h3>
        <p id="update-body">{props.update.body} ...Read More</p>
        <div id="likes-comments">
            <span id="update-comments">{(()=>{
                if (props.update.comments.length > 1) {return props.update.comments.length + ' Comments'}
                else if (props.update.comments.length === 1) {return props.update.comments.length + ' Comment'}
                else {return}})()}
            </span>
            <span id="update-likes"> {(() => {
                if (props.update.likes > 1) {return props.update.likes + ' Likes'}
                else if (props.update.likes === 1) {return props.update.likes + ' Like'}
                else {return}})()}
            </span>
        </div>
    </div>
)

export default UpdateListItem;