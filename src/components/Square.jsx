import React from 'react'
import './Square.css'

const Square = ({value, chooseSquare}) => {
  return (
    <div className='square' onClick={chooseSquare}>
        {value}
    </div>
  )
}

export default Square