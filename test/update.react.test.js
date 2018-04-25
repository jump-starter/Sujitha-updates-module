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

const testData = [{
    "title": "Garden Brand Games",
    "body": "Itaque ut at ab accusantium suscipit. Magni tempore id et quisquam itaque beatae quibusdam deleniti qui. Aliquid dolor sint voluptatem dolore. Labore voluptas suscipit est tempora recusandae animi sint nam. Sunt eum quasi ipsum consequatur quis. Ut doloribus perspiciatis nihil aspernatur ratione.\n \rModi sed saepe et sed velit laboriosam. Vero modi inventore in ex fugiat eaque accusamus. Rerum unde molestias voluptatem quae mollitia perspiciatis quasi natus et. Culpa in tempora laboriosam neque tempora vel deserunt sint.\n \rQuaerat ut cupiditate asperiores nostrum vero. Ducimus nostrum rerum est et sed. Est ut est quas et hic iure perspiciatis non quod. Tempore molestias accusamus a. Et accusamus eius qui illo soluta culpa molestias. Cumque ipsa facere.",
    "date": "2018-01-05T10:02:51.899Z",
    "likes": 43808,
    "comments": []
}]

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
        const wrapper = mount(<App />).instance();
        wrapper.setState({
            updates: testData})
        expect(wrapper.changeView('Garden Brand Games')).toMatchSnapshot();
    });
});

describe('update list item', () => {
    it('should render 1 item', () => {
        const wrapper = shallow(<UpdateListItem update={testData[0]}/>);
        expect(wrapper).toHaveLength(1);
    });
});