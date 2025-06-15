import './App.css'
import Joke from './components/Joke'

export default function App() {
  return (
    <>
      <Joke
        punchLine="It's hard to explain puns to kleptomaniacs because they always take things literally."
        upvotes={10}
        isPun={true}
      />

      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchLine="I can't wait to see her face light up when she opens it."
        isPun={true}
        comments={[
          { author: "", text: "", title: "" },
          { author: "", text: "", title: "" }
        ]}
      />

      <Joke
        setup="How did the hacker escape the police?"
        punchLine="He just ransomware!"
        isPun={true}

      />

      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchLine="Swarm."
        isPun={true}

      />

      <Joke
        setup="What's the best thing about Switzerland?"
        punchLine="I don't know, but the flag is a big plus!"
        isPun={false}

      />

    </>
  )
}
