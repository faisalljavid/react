import { useState } from "react"
import Die from './components/Die'
import './App.css'

export default function App() {

    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        const arry = []
        for (let i = 0; i < 10; i++) {
            let randomNum = Math.ceil(Math.random() * 6)
            arry.push(randomNum)
        }
        return arry
    }

    function rollDice() {
        setDice(generateAllNewDice())
    }

    const diceElements = dice.map(num => <Die value={num} />)

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>

            <button className="roll-dice" onClick={rollDice}>Roll</button>

        </main>
    )
}