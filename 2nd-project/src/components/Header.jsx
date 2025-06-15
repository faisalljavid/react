import globeImg from '../assets/globe.png'

export default function Header() {
    return (
        <header>
            <img src={globeImg} alt="Globe icon" />
            <h1>My travel journal</h1>
        </header>
    )
}