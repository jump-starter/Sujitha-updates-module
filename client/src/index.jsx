import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

//use moments.js to handle dates

import Updates from './components/Updates.jsx';
import UpdatePostView from './components/UpdatePostView.jsx';
import CommentsFeed from './components/CommentsFeed.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        view: 'updates',
        createdAt: "3/29/2018",
        clickedUpdate: null,
        updates: [{
            title: "first update",
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
            title: "2nd update",
            body: "OMG THANKS FOR BACKING OMG!!!!!!!!!!!!!!!!!",
            date: "4/4/2018", //use moments.js???
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
                date: "3/30/2018",
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
            date: "4/5/2018",
            body: "omg",
        }]
    }
    this.changeView = this.changeView.bind(this);
  }



  changeView(option) {
    const updates = this.state.updates
    console.log("view changed!")
    this.setState({
        view: option,
        clickedUpdate: updates.filter((update) => {
            return update.title === option;
        })
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
      const { view } = this.state;
      if (view === 'updates') {
        return <Updates createdAt={this.state.createdAt} updates={this.state.updates} comments={this.state.comments} handleClick={(e)=>this.changeView(e)}/>
      } else if (view === 'comments') {
        return <CommentsFeed comments={this.state.comments}/>
      } else {
        const clickedUpdate = this.state.clickedUpdate[0];
        return <UpdatePostView update={clickedUpdate}/>
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