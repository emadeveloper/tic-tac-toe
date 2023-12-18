import React, {useState} from 'react'
import './Board.css'
import Square from './Square'

const Board = () => {
    const [board,setBoard] = useState (['','','','','','','','',''])
  return (
    <div className='board'>
        <div className="row">
            <Square value={board[0]} chooseSquare={() => {alert(0)}} />
            <Square value={board[1]} chooseSquare={() => {alert(1)}} />
            <Square value={board[2]} chooseSquare={() => {alert(2)}} />
        </div>
        <div className="row"></div>
        <div className="row"></div>
    </div>
  )
}

export default Board