import { useState } from 'react'
import './App.css'

function App() {
  const [board, setBoard] = useState(new Array(9).fill(null))

  console.log(board)

  return (
    <section>
      <h1>Tik Tak Toe</h1>
        <div className='board'>

        {board.map((_, index) => {
          return <div  key={index}>{index}</div>
        })}
        </div>
    </section>
  )
}

export default App
