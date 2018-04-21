import React from 'react';
import App from '../client/src/components/App.jsx';
// import renderer from 'react-test-renderer';
import Updates from '../client/src/components/Updates.jsx';
import UpdateListItem from '../client/src/components/UpdateListItem.jsx';
import UpdatePostCommentFeed from '../client/src/components/UpdatePostCommentFeed.jsx';
import UpdatePostCommentItem from '../client/src/components/UpdatePostCommentItem.jsx';
import UpdatePostView from '../client/src/components/UpdatePostView.jsx';
import CommentsFeed from '../client/src/components/CommentsFeed.jsx';
import CommentItem from '../client/src/components/CommentItem.jsx';

const testData = {
    createdAt: "2018-02-13 20:03:17.035Z",
    updateView: {
        previous: null,
        current: null,
        next: null
    },
    updates: [{
        title: "2nd update",
        body: "OMG THANKS FOR BACKING OMG",
        date: "4/4/2018",
        likes: 420,
        comments: [{
            userId: 2,
            avatar: "https://uproxx.files.wordpress.com/2017/02/kevin-durant-mad-yell.jpg?quality=95",
            userName: "KD",
            date: "3/30/2018",
            body: "u is welcome",
        }]
    }, {
        title: "first update",
        body: "OMG THANKS FOR BACKING OMG!!!!!!!!!!!!!!!!! like omg omgomgomgomg alsjdf asdf jalksd flajsd flkasj dflkaj sldjf alksdjf laksjd flkas fla sdfl alsdf alsjdf laksjdf laksjdf laksjd flkasj flkasjd flkasjf lkasjdf lajsdf ioajdflia lifajwliefja lisdjf alksdjf alkf over 30 omg omg omg omgo mgom ",
        date: "2018-02-13 20:03:17.035Z", 
        likes: 420,
        comments: [{
            userId: 2,
            avatar: "https://uproxx.files.wordpress.com/2017/02/kevin-durant-mad-yell.jpg?quality=95",
            userName: "KD",
            date: "4/4/2018",
            body: "your welcome",
        }, {
            userId: 2,
            avatar: "https://uproxx.files.wordpress.com/2017/02/kevin-durant-mad-yell.jpg?quality=95",
            userName: "KD",
            date: "2018-02-13 20:03:17.035Z",
            body: "u is welcome",
        }]
    }],
    comments: [{
        userId: 2,
        avatar: "https://uproxx.files.wordpress.com/2017/02/kevin-durant-mad-yell.jpg?quality=95",
        username: "KD",
        date: "4/4/2018",
        body: "i love this",
    }, {
        userId: 2,
        avatar: "https://uproxx.files.wordpress.com/2017/02/kevin-durant-mad-yell.jpg?quality=95",
        username: "KD",
        date: "2018-02-13 20:03:17.035Z",
        body: "omg",
    }]
}

describe('default page view', () => {
    it('should render App', () => {
        const component = shallow(<App />);
        expect(component).toHaveLength(1);
    });

    it('should render updates view by default', () => {
        const component = shallow(<App />);
        expect((component).find(Updates).length).toBe(1);
    });

    
});

describe('updates list view', () => {
    it('should limit words to 32 on update list items', () => {
        const component = mount(<Updates />);
        expect((component).find(UpdateListItem)).toHaveLength(1);
    });
});

describe('project comments feed', () => {
    it('should render 2 comments', () => {
        const component = mount(<CommentsFeed comments={testData.comments} />);
        expect((component).find(CommentItem)).toHaveLength(1);
    });
});