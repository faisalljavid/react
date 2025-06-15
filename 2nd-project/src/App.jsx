import './App.css'
import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "../src/data/data.js"

export default function App() {
    const entryData = data.map((entryObj) => {
        return (
            <Entry
                key={entryObj.id}
                {...entryObj}
            />
        )
    })
    return (
        <>
            <Header />
            <main className="container">
                {entryData}
            </main>
        </>
    )
}
