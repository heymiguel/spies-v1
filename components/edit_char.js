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
      user:'',
      name:'',
      callsign:'',
      age: '',
      height: '',
      weight: '',
      ethnicity: '',
      class: '',
      rank: '',
      faction: ''
    }
    if (this.props.params.id) {
      var character = this.props.character.find((character) => character._id == this.props.params.id);
      return {
        isEditing: true,
        character: character || emptyChar
      }
    } else {
      return {
        isEditing: false,
        character: emptyChar
      }
    }
  },

  render: function() {
    return  <div className={ styles.editor }>
      <Field label="User" value={ this.state.character.user } name='user' onChange={ this.updateField } />
      <Field label="name" value={ this.state.character.name } name='name' onChange={ this.updateField } />
      <Field label="callsign" value={ this.state.character.callsign } name='callsign' onChange={ this.updateField } />
      <Field label="Age" value={ this.state.character.age } name='age' onChange={ this.updateField } />
      <Field label="height" value={ this.state.character.height } name='height' onChange={ this.updateField } />
      <Field label="Weight" value={ this.state.character.weight } name='weight' onChange={ this.updateField } />
      <Field label="ethnicity" value={ this.state.character.ethnicity } name='ethnicity' onChange={ this.updateField } />
      <Field label="class" value={ this.state.character.class } name='class' onChange={ this.updateField } />
      <Field label="rank" value={ this.state.character.rank } name='rank' onChange={ this.updateField } />
      <Field label="faction" value={ this.state.character.faction } name='faction' onChange={ this.updateField } />
      <button onClick={ this.save }>Save</button>
    </div>
  },

  save: function() {
    if (this.state.isEditing) {
      console.log(this.props.params.id);
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
      data: JSON.stringify(this.state.character),
      success: () => {
        console.log(this.state.character);
        this.props.onRefresh();
        browserHistory.push('/');
        console.log("success!");
      },
      error: (err) => {
        console.log(err);
      }
    });
  },

  updateField: function(evt) {
    var character = this.state.character;
    character[evt.target.name] = evt.target.value;
    this.setState({character: character});
  }
});

module.exports = EditChar;
