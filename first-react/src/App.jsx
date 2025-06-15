import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  return (
    <header className='header'>
      <img src="/src/assets/react.svg" className='nav-logo' alt="React Logo" />
      <nav>
        <ul className='nav-list'>
          <li className='nav-list-item'>Pricing</li>
          <li className='nav-list-item'>About</li>
          <li className='nav-list-item'>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <>
      <h1>Reasons why I love React</h1>
      <ol>
        <li>React is a popular library, so I will be able to
          fit in with all the coolest devs out there! 😎</li>
        <li>I am more likely to get a job as a front end developer
          if I know React</li>
      </ol>
    </>
  )
}
function Footer() {
  return (
    <small className='footer'>© 2025 Faisal Javid's development. All rights reserved.</small>
  )
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}




















// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


// export default App
export default Page