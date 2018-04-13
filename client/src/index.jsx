import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Updates from './components/Updates.jsx';
import UpdateView from './components/UpdateView.jsx';
import Comments from './components/Comments.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        view: 'updates',
        updates: [],
        comments: [],
        clickedUpdate: null
    };
  }

  changeView(option) {
    this.setState({
        view: option
    })
  }

  renderView() {
      const { view } = this.state;
      if (view === 'updates') {

      } else if {

      } else {

      }
  }

  render() {
      <div>
          <div className="nav">
              <span className="updates" onClick={() => this.changeView('updates')}>Updates</span>
              <span className="comments" onClick={() => this.changeView('comments')}>Comments</span>
          </div>

          <div className="main">
              {this.renderView()}
          </div>
      </div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));