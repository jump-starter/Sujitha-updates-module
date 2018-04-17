import React from 'react';
import UpdateListItem from './UpdateListItem.jsx';
import moment from 'moment';

const Updates = (props) => (
    <div>
        {props.updates.map((update, i) => <UpdateListItem update={update} key={"u"+i} handleClick={props.handleClick} />)}
        <div id="project-launched-box">
            <h5 id="created-at">{moment(props.createdAt).format('MMMM D, YYYY')}</h5>
            <h3 id="project-launched">Project Launched</h3>
        </div>
    </div>
)

export default Updates;