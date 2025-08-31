import React from 'react';
import Menu from "./components/Menu/index"
// import Star from "./components/Star"

export default function App() {
  return (
    <>
      <Menu onOpen={() => console.log("Opened/closed")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}



// <Star />

// Using Toggle.Display for the render props
// <Toggle onToggle={() => {console.log("Toggled")}}>
//   <Toggle.Button>
//     <Toggle.Display>
//       {(on) => {
//         return <div className={`box ${on ? "filled" : ""}`}></div>
//       }}
//     </Toggle.Display>
//   </Toggle.Button>
// </Toggle>
// Example using Toggle.On and Toggle.Off to conditionally render items
// <Toggle.On>
//   <div className="box filled"></div>
// </Toggle.On>
// <Toggle.Off>
//   <div className="box"></div>
// </Toggle.Off>

// Simple Star component that uses the Toggle component internally
// <Star />

// <br />

// Menu Component using Toggle component internally to manage
// state and context

// <Menu>
//   <Menu.Button>Menu</Menu.Button>
//   <Menu.Dropdown>
//     <Menu.Item>Home</Menu.Item>
//     <Menu.Item>About</Menu.Item>
//     <Menu.Item>Contact</Menu.Item>
//     <Menu.Item>Blog</Menu.Item>
//   </Menu.Dropdown>
// </Menu>
