import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Status from "./components/Status"
import Eliminations from "./components/Eliminations"
import { languages } from "./assets/languages"
import { clsx } from "clsx"
import { getFarewellText } from "./assets/utils"
import { getRandomWord } from "./assets/utils"

export default function AssemblyEndgame() {

    // State values
    const [currentWord, setCurrentWord] = useState(() => getRandomWord())
    const [guessedLetter, setGuessedLetter] = useState([])

    // Derived values
    const numOfGuessesLeft = languages.length - 1
    const wrongGuessedCountArray =
        guessedLetter.filter(letter => !currentWord.includes(letter)).length

    const isGameWon =
        currentWord.split("")
            .every(letter => guessedLetter.includes(letter))

    const isGameLost =
        wrongGuessedCountArray >= numOfGuessesLeft

    const isGameOver = isGameWon || isGameLost

    const lastGuessedLetter = guessedLetter[guessedLetter.length - 1]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

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
                disabled={isGameOver}
                aria-disabled={guessedLetter.includes(letter)}
                aria-label={`Letter ${letter}`}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()} </button>
        })

    const gameStatusClass = clsx("game-status",
        {
            won: isGameWon,
            lost: isGameLost,
            farewell: !isGameOver && isLastGuessIncorrect
        }
    )

    function renderGameStatus() {
        if (!isGameOver && isLastGuessIncorrect) {
            return (
                <p
                    className="farewell-message"
                >
                    {getFarewellText(languages[wrongGuessedCountArray - 1].name)}
                </p>
            )
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }
        if (isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
        return null
    }

    return (
        <main>
            <Header />
            <Status
                gameStatusClass={gameStatusClass}
                renderGameStatus={renderGameStatus}
            />

            <section className="language-chips">
                {languageElements}
            </section>

            <section className="word">
                {letterElements}
            </section>

            {/* Combined visually-hidden aria-live region for status updates */}
            <section
                aria-live="polite"
                role="status"
                className="sr-only"
            >
                <p>
                    {
                        currentWord.includes(lastGuessedLetter) ?
                            `Correct! The letter ${lastGuessedLetter} is in the word.` :
                            `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                    }
                    You have {numOfGuessesLeft} attempts left.
                </p>
                <p>
                    Current word: {currentWord.split("").map(letter =>
                        guessedLetter.includes(letter) ? letter + "." : "blank.")
                        .join(" ")}
                </p>
            </section>

            <section className="keyboard">
                {keyboardElements}
            </section>

            {
                isGameOver ?
                    <button className="new-game">New Game</button>
                    : null
            }

        </main>
    )
}