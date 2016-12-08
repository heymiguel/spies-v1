import React from 'react';
import Header from './header';
import styles from './app.scss';
import Login from './login';
import $ from 'jquery';

var App = React.createClass({
  getInitialState: function() {
    return {
      characters: [],
      user: null
    }
  },

  render: function() {
    if (this.state.user !== null) {
    return  <div>
      <Header />
      { React.cloneElement(this.props.children, {
        posts: this.state.posts,
        onRefresh: this.refresh
      })}
    </div>
    } else {
      return <Login onLogin={ this.userLoggedIn }/>
    }
  },

  userLoggedIn: function(user) {
    this.setState({ user: user }, this.refresh);
    console.log(this.state.user);
  },

  refresh: function() {
    console.log("refreshed!");
    $.get('/api/character', (data) => this.setState({characters: data}));
  },

  componentDidMount: function() {
    this.refresh();
  }
});

module.exports = App;
