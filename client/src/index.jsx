import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Updates from './components/Updates.jsx';
import UpdatePostView from './components/UpdatePostView.jsx';
import CommentsFeed from './components/CommentsFeed.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        view: 'updates',
        createdAt: "2018-02-13 20:03:17.035Z",
        updateView: {
            previous: null,
            current: null,
            next: null
        },
        updates: [{
            title: "2nd update",
            body: "OMG THANKS FOR BACKING OMG",
            date: "4/4/2018", //use moments.js???
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
            date: "2018-02-13 20:03:17.035Z", //use moments.js???
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
    this.changeView = this.changeView.bind(this);
  }

  changeView(option) {
    const updates = this.state.updates;
    console.log("view changed!")

    let previous = null;
    let next = null;
    let current = null;
    if (option !== 'updates' && option !== 'comments') { //if an update post is clicked on 
        //find post by looping over array, starting from oldest posts first 
        for (var i = updates.length - 1; i >= 0; i--) {
            if (updates[i].title === option) { // if title matches
                current = updates[i]; //save clicked on update to state
                if (updates[i+1]) { //if not the oldest post
                    previous = updates[i+1].title; //save previous post title
                }
                if (i) { //if not the newest post
                    next = updates[i-1].title; //save next post title
                }
            }
        }
    }

    this.setState({
        view: option,
        updateView: {
            previous: previous,
            current: current,
            next: next
        }
    })
  }

//   componentWillMount() {
//     $.ajax({
//         type: 'GET',
//         url: '/api/updates', //need ID at the end of the URL req params ID?
//         contentType: 'application/JSON',
//         success: (data) => {
//             this.loadPosts(data);
//         },
//         error: (err) => {
//             console.log('AJAX error', err);
//         }
//     });
//   }

  renderView() {
      const { view, updateView } = this.state;
      if (view === 'updates') {
        return <Updates createdAt={this.state.createdAt} updates={this.state.updates} comments={this.state.comments} handleClick={(e)=>this.changeView(e)}/>
      } else if (view === 'comments') {
        return <CommentsFeed comments={this.state.comments}/>
      } else {
        return <UpdatePostView updateView={updateView} update={updateView.current} handleClick={(e) => this.changeView(e)}/>
      }
  }

  render() {
    return (
        <div>
            <div className="nav">
                <span className="updates" onClick={() => this.changeView('updates')}>Updates </span>
                <span className="comments" onClick={() => this.changeView('comments')}> Comments</span>
            </div>

            <div className="main">
                {this.renderView()}
            </div>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));