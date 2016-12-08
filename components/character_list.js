import React from 'react';
import character from './character';

var CharList = React.createClass({
  render: function() {
    return  <div>
      <div className='brand'>
        { this.props.character.map((character) =>
          <Character key={ character._id }
                id={ character._id }
                callsign={ character.callsign }
                age={ character.age }
                height={ character.height }
                ethnicity={ character.ethnicity }
                rank={ character.rank }
                class={ character.class }
                faction={ character.faction }
                user={ character.user } />
        )}
      </div>
    </div>
  }
});

module.exports = CharList;
