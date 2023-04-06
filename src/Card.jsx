import React from 'react'
import cover from './Images/Cover1.jpeg';
import './Components/Home/Home.scss'

const Card = (props) => {
  return (
    <div >
      <img className='card' src={cover} alt="" />
    </div>
  )
}

export default Card;
