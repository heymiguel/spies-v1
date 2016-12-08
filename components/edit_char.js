import React from 'react';
import $ from 'jquery';
import styles from './edit_post.scss'
import { browserHistory } from 'react-router';

var Field = ({ label, value, onChange, name }) => <div className={ styles.field }>
  <label>{ label }</label>
  <input type='text' value={ value } name={ name } onChange={ onChange } />
</div>

var EditChar = React.createClass({
  getInitialState: function() {
    var emptyChar = {
      age: '',
      height: '',
      weight: '',
      ethnicity: '',
      class: '',
      rank: '',
      faction: ''
    }
    if (this.props.params.id) {
      var character = this.props.chars.find((character) => character._id == this.props.params.id);
      return {
        isEditing: true,
        character: character|| emptyChar
      }
    } else {
      return {
        isEditing: false,
        character: emptyPost
      }
    }
  },

  render: function() {
    return  <div className={ styles.editor }>
      <Field label="Age" value={ this.state.character.age } name='title' onChange={ this.updateField } />
      <Field label="height" value={ this.state.character.height } name='description' onChange={ this.updateField } />
      <Field label="Weight" value={ this.state.character.weight } name='image' onChange={ this.updateField } />
      <Field label="ethnicity" value={ this.state.character.ethnicity } name='location' onChange={ this.updateField } />
      <Field label="class" value={ this.state.character.class } name='user' onChange={ this.updateField } />
      <Field label="rank" value={ this.state.character.rank } name='user' onChange={ this.updateField } />
      <Field label="faction" value={ this.state.character.faction } name='user' onChange={ this.updateField } />
      <button onClick={ this.save }>Save</button>
    </div>
  },

  save: function() {
    if (this.state.isEditing) {
      var url = '/api/character/' + this.props.params.id;
      var method = 'PUT';
    } else {
      var url = '/api/character';
      var method = 'POST';
    }

    $.ajax({
      method: method,
      url: url,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(this.state.post),
      success: () => {
        this.props.onRefresh();
        browserHistory.push('/');
      }
    });
  },

  updateField: function(evt) {
    var character = this.state.character;
    post[evt.target.name] = evt.target.value;
    this.setState({character: character});
  }
});

module.exports = EditChar;
