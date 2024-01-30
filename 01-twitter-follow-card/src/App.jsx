import './App.css'
import TwitterCard from './components/TwitterCard'

function App() {
  return (
    <>
      <h1>Follow them:</h1>
      <TwitterCard 
        name='Fede Chaves'
        username="fedecha"
        isFollowing
      >
      </TwitterCard>
      <TwitterCard
        name='Alber Flecha'
        username="alberf"
        isFollowing={false}
      >
      </TwitterCard>
    </>
  )
}

export default App
