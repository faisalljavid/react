import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Status from "./components/Status"
import Eliminations from "./components/Eliminations"
import { languages } from "./assets/languages"

export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = useState("react")

    const letterElements = currentWord
        .toUpperCase()
        .split("")
        .map((letter, index) => {
            return <span key={index}>
                {letter}
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
        </>
    )
}