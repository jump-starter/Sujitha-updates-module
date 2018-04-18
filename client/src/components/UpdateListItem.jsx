import React from 'react';
import moment from 'moment';

const UpdateListItem = (props) => (
    <div id="update-list-item" onClick={() => props.handleClick(props.update.title)}>
        <h5 className="update-date">{moment(props.update.date).format('MMMM D')}</h5>
        <h3 className="update-title">{props.update.title}</h3>
        <p className="update-body">{props.update.body.split(' ').length > 30 ? //only render first 30 words 
            props.update.body.split(' ').slice(0, 30).join(' ') : props.update.body}<span className="read-more">...Read More</span></p>
        <div className="likes-comments">
            <span className="update-comments">{(()=>{
                if (props.update.comments.length > 1) {return props.update.comments.length + ' Comments'}
                else if (props.update.comments.length === 1) {return props.update.comments.length + ' Comment'}
                else {return}})()}
            </span>
            <span className="update-likes"> {(() => {
                if (props.update.likes > 1) {return props.update.likes + ' Likes'}
                else if (props.update.likes === 1) {return props.update.likes + ' Like'}
                else {return}})()}
            </span>
        </div>
    </div>
)

export default UpdateListItem;