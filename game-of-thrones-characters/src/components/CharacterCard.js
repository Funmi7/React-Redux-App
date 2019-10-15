import React from 'react';
import styled from 'styled-components'


const CardStyled = styled.div`

  margin:0 auto;
  width: 250px;
  max-width: 100%;
  align-items: center;
  margin-top: 30px;
  background-color: rgb(226, 95, 72);

  

  .img-div {
    width: 100%;
    height: 250px; 
    img {
      width: 100%;
      height: 100%;
    }
  }

  .text-div {
  color: white;
  }

`

export default function CharacterCard(props) {
    const {img, name, nickname, birthday} = props;
  return (
    <CardStyled>
      <div className='img-div'>
        <img src={img}/>
      </div>
      <div className='text-div'>
        <h3>{name}</h3>
        <p>{nickname}</p>
      </div> 
    </CardStyled>
  )
}
