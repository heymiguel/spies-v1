import React from 'react';
import styles from './post.scss';
import { Link } from 'react-router';

var Character = React.createClass({
  render: function() {
    return  <div className={ styles.column } >
      <div className={ styles.post }>
        <div>{ this.props.name }</div>
        <div>{ this.props.callsign }</div>
        <div>{ this.props.age }</div>
        <div>{ this.props.height }</div>
        <div>{ this.props.ethnicity }</div>
        <div>{ this.props.class }</div>
        <div>{ this.props.rank }</div>
        <div>{ this.props.faction }</div>
        <div className={ styles.actions }>
          <Link to={ '/edit/' + this.props.id }>Edit</Link>
        </div>
      </div>
    </div>
  }
});

module.exports = Character;
