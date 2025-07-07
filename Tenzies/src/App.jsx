import { useState } from "react"
import { nanoid } from "nanoid"
import Die from './components/Die'
import './App.css'

export default function App() {

    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        const arry = []
        for (let i = 0; i < 10; i++) {
            arry.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: true,
                id: nanoid()
            })
        }
        return arry
    }

    function rollDice() {
        setDice(generateAllNewDice())
    }

    const diceElements = dice.map(dieObj => (
        <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} />
    ))

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>

            <button className="roll-dice" onClick={rollDice}>Roll</button>

        </main>
    )
}