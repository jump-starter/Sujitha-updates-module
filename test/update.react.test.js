import React from 'react';
import App from '../client/src/components/App.jsx';
import renderer from 'react-test-renderer';
import Updates from '../client/src/components/Updates.jsx';
import UpdateListItem from '../client/src/components/UpdateListItem.jsx';
import UpdatePostCommentFeed from '../client/src/components/UpdatePostCommentFeed.jsx';
import UpdatePostCommentItem from '../client/src/components/UpdatePostCommentItem.jsx';
import UpdatePostView from '../client/src/components/UpdatePostView.jsx';
import CommentsFeed from '../client/src/components/CommentsFeed.jsx';
import CommentItem from '../client/src/components/CommentItem.jsx';


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

describe('changeView method on App.jsx', () => {
    it('should change to comments view', () => {
        const wrapper = renderer.create(<App />);
        const inst = wrapper.getInstance();
        expect(inst.changeView('comments')).toMatchSnapshot();
    });

    it('should render updatePostView if anything else is passed in other than updates & comments', () => {
        const wrapper = renderer.create(<App />);
        const inst = wrapper.getInstance();
        expect(inst.changeView('2nd update')).toMatchSnapshot();
    });
});

// describe('updates list view', () => {
//     it('should limit words to 32 on update list items', () => {
//         const component = mount(<Updates />);
//         expect((component).find(document.getElementsByClassName(update-body).split(' ').length)).toHaveLength(32);
//     });
// });

// describe('project comments feed', () => {
//     it('should render 2 comments', () => {
//         const component = mount(<CommentsFeed comments={testData.comments} />);
//         expect((component).find(CommentItem)).toHaveLength(1);
//     });
// });