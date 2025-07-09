import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Status from "./components/Status"
import Eliminations from "./components/Eliminations"
import { languages } from "./assets/languages"
import { clsx } from "clsx"

export default function AssemblyEndgame() {

    // State values
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetter, setGuessedLetter] = useState([])

    // Derived values
    const wrongGuessedCountArray =
        guessedLetter.filter(letter => !currentWord.includes(letter)).length

    const isGameWon =
        currentWord.split("")
            .every(letter => guessedLetter.includes(letter))

    const isGameLost =
        wrongGuessedCountArray >= languages.length - 1

    const isGameOver = isGameWon || isGameLost

    // Static values
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

    const languageElements = languages.map((langObj, index) => {
        const isLanguagesLost = index < wrongGuessedCountArray
        const className = clsx(
            "chip",
            {
                "lost": isLanguagesLost
            }
        )
        return <Eliminations
            name={langObj.name}
            backgroundColor={langObj.backgroundColor}
            color={langObj.color}
            key={langObj.name}
            className={className}
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

    const gameStatusClass = clsx("game-status",
        {
            won: isGameWon,
            lost: isGameLost
        }
    )

    return (
        <>
            <Header />
            <Status
                gameStatusClass={gameStatusClass}
                isGameOver={isGameOver}
                isGameWon={isGameWon}
            />
            <section className="language-chips">
                {languageElements}
            </section>
            <section className="word">
                {letterElements}
            </section>
            <section className="keyboard">
                {keyboardElements}
            </section>
            {
                isGameOver ?
                    <button className="new-game">New Game</button>
                    : null
            }
        </>
    )
}