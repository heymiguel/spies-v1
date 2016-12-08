var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


// Include your React components like this:
import App from './components/app';
import CharacterList from './components/character_list';
import EditChar from './components/edit_char';

ReactDOM.render(<Router history={browserHistory}>
  <Route path='/' component={ App }>
    <IndexRoute component={ CharacterList } />
    <Route path='post' component={ EditChar } />
    <Route path='edit/:id' component={ EditChar } />
  </Route>
</Router>, document.getElementById("placeholder"));
