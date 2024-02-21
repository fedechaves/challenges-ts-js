import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

const URL_FACT = 'https://catfact.ninja/fact'

function App() {
  const [fact, setFact] = useState('')
  const [url, setUrl] = useState(null)

  useEffect(() => {
    fetch(URL_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
      .catch(err => console.error(err))
      
    let firstWord = fact.split(' ')[0]
     
    if(fact){
      fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then(data => data.json())
      .then(url => setUrl(url._id))  
      .catch(err => console.error(err))
    }
    console.log(fact, url)
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <section>
      <h1>Cat fact machine</h1>
      <img src={`https://cataas.com/cat/${url}`} alt="This is a cat Image" />
      <p>{fact}</p>
    </section>
  )
}

export default App
