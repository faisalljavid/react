import './App.css'
import Joke from './components/Joke'
import jokesData from './jokesData'

export default function App() {
  const jokeElements = jokesData.map((jokeObj) => {
    return <Joke setups={jokeObj.setup} punchlines={jokeObj.punchline} />
  })
  return (
    <>
      {jokeElements}
    </>
  )
}
