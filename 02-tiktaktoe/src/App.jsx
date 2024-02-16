import { useState } from 'react'
import './App.css'

const TURNS = {
  x:'X',
  o: 'O'
}

function App() {
  const [board, setBoard] = useState(new Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.x)

  function updateBoard ({ index }) {
    const newTurn = turn === TURNS.x ? TURNS.x : TURNS.o
    const newBoard = [...board]

    newBoard[index] = newTurn
    
    setBoard(newBoard)
    setTurn(newTurn)

  }
  return (
    <section>
      <h1>Tik Tak Toe</h1>
        <div className='board' style={{ gap: "10px"}}>

        {board.map((square, index) => {
          return <div 
                    onClick={() => {
                      updateBoard({ index })
                    }}  
                    key={index}
                    className='square'
                    style={{ border: "1px solid red", height: "100px", width: "100px"}}
                    >
                      {board[index]}
                 </div>
        })}
        </div>

    <div>
      <h1>TURNS</h1>
      <div style={{ display:"flex", gap:"10px"}}>
        <div className={turn === TURNS.x ? "is-selected" : ""}>{TURNS.x}</div>
        <div className={turn === TURNS.o ? "is-selected" : ""}>{TURNS.o}</div>
      </div>
    </div>
    </section>
  )
}

export default App
