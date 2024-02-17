import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useRandomFact } from './hooks/useRandomFact'

function App() {
  const { fact, handleRandomFact } = useRandomFact()
  const { url } = useCatImage({ fact })

  const handleClick = () => {
    handleRandomFact()
  }
  
  return (
    <section>
      <h1>Cat fact machine</h1>
      <img src={url && `https://cataas.com/cat/${url}`} alt="This is a cat Image" />
      <p>{fact}</p>
      <button onClick={handleClick}>change!</button>
    </section>
  )
}

export default App
