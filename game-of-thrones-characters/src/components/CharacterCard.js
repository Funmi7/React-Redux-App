import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators'


export default function CharacterCard(props) {
    const {img, name, nickname, birthday} = props;
  return (
    <div>
      <img src={img}/>
      {name}
      {nickname}
      {birthday} 
    </div>
  )
}

// export default connect(
//     state => state,
//     actionCreators,
//   )(CharacterCard)
