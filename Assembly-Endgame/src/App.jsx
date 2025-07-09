import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Status from "./components/Status"
import Eliminations from "./components/Eliminations"
import { languages } from "./assets/languages"
import { clsx } from "clsx"

export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetter, setGuessedLetter] = useState([])

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function addGuessedLetter(letter) {
        setGuessedLetter(prevLetters => {
            return prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
        })
    }

    const letterElements = currentWord
        .split("")
        .map((letter, index) => {
            return <span key={index}>
                {guessedLetter.includes(letter)
                    ? letter.toUpperCase()
                    : ""}
            </span>
        })

    const languageElements = languages.map((langObj) => {
        return <Eliminations
            name={langObj.name}
            backgroundColor={langObj.backgroundColor}
            color={langObj.color}
            key={langObj.name}
        />
    })

    const keyboardElements = alphabet
        .split("")
        .map((letter) => {
            const isGuessed = guessedLetter.includes(letter)
            const isCorrect = isGuessed && currentWord.includes(letter)
            const isWrong = isGuessed && !currentWord.includes(letter)
            const className = clsx({
                correct: isCorrect,
                wrong: isWrong
            })
            return <button
                className={className}
                key={letter}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()} </button>
        })
    return (
        <>
            <Header />
            <Status />
            <section className="language-chips">
                {languageElements}
            </section>
            <section className="word">
                {letterElements}
            </section>
            <section className="keyboard">
                {keyboardElements}
            </section>
            <button className="new-game">New Game</button>
        </>
    )
}