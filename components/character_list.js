import React from 'react';
import Character from './character';

var CharList = React.createClass({
  render: function() {
    return  <div>
      <div className='brand'>
        { this.props.characters == undefined ?
            <Character key={ "default" }
                  id={ "default"}
                  callsign={ "default"}
                  age={ "default"}
                  height={ "default"}
                  ethnicity={ "default"}
                  rank={ "default"}
                  class={ "default"}
                  faction={ "default"}
                  user={ "default"} /> :
             this.props.characters.map((characters) =>
                 <Character key={ characters._id }
                 id={ characters._id }
                 name={ characters.name }
                 callsign={ characters.callsign }
                 age={ characters.age }
                 height={ characters.height }
                 ethnicity={ characters.ethnicity }
                 rank={ characters.rank }
                 class={ characters.class }
                 faction={ characters.faction }
                 user={ characters.user } />)
          }

      </div>
    </div>
  }
});

module.exports = CharList;
