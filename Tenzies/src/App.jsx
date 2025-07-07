import { useState } from "react"
import { nanoid } from "nanoid"
import Confetti from "react-Confetti"
import Die from './components/Die'
import './App.css'

export default function App() {

    const [dice, setDice] = useState(() => generateAllNewDice())

    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

    function generateAllNewDice() {
        const arry = []
        for (let i = 0; i < 10; i++) {
            arry.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
        return arry
    }

    function rollDice() {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? die :
                { ...die, value: Math.ceil(Math.random() * 6) }
        }))
    }

    function hold(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? { ...die, isHeld: !die.isHeld } : die
        }))
    }

    const diceElements = dice.map(dieObj => (
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
        />
    ))

    return (
        <main>
            {gameWon ? <Confetti /> : null}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    )
}