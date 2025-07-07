import { useState, useRef, useEffect } from "react"
import { nanoid } from "nanoid"
import Confetti from "react-Confetti"
import Die from './components/Die'
import './App.css'

export default function App() {

    const [dice, setDice] = useState(() => generateAllNewDice())
    const buttonRef = useRef(null)
    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

    useEffect(() => {
        if (gameWon) {
            buttonRef.current.focus({ focusVisible: true })
        }
    }, [gameWon])

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
        if (!gameWon) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? die :
                    { ...die, value: Math.ceil(Math.random() * 6) }
            }))
        } else {
            setDice(generateAllNewDice())
        }
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
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulation! You won! Press "New Game" to start again.</p>}
            </div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    )
}