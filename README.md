# React Learning Projects

This repository contains a collection of React projects created while learning React fundamentals. Each project focuses on different concepts and features of React.

## 🚀 Projects Overview

### **Basic React Projects**

#### [first-react](./first-react/)
- **Description**: A simple React app demonstrating basic component structure with Header, Main content, and Footer components
- **Concepts**: Basic JSX, component composition, CSS styling
- **Features**: Navigation bar, content sections, footer with copyright

#### [first-project](./first-project/)
- **Description**: React facts display application with navigation
- **Concepts**: Component organization, props, basic styling
- **Features**: Navbar component, main content with React facts list

#### [2nd-project](./2nd-project/)
- **Description**: Travel journal application displaying travel entries
- **Concepts**: Data mapping, component props, dynamic content rendering
- **Features**: Travel entries with images, locations, dates, and descriptions for Japan, Australia, and Norway

### **Props & Data Passing Projects**

#### [props/project2](./props/project2/)
- **Description**: Joke display application using props
- **Concepts**: Props, data mapping, component reusability
- **Features**: Renders jokes with setup and punchline from data array

#### [props/props-project1](./props/props-project1/)
- **Description**: Contact card application with cat-themed contacts
- **Concepts**: Props, image handling, component reusability
- **Features**: Contact cards with cat images, names, phone numbers, and emails

### **State Management Projects**

#### [sideEffects/sideEffects-project1](./sideEffects/sideEffects-project1/)
- **Description**: Meme generator application with API integration
- **Concepts**: useState, useEffect, API calls, form handling
- **Features**: Meme generation with custom text, random meme images from API, form inputs for top and bottom text

#### [states/state-project1](./states/state-project1/)
- **Description**: AI-powered recipe generator based on ingredients
- **Concepts**: useState, useEffect, AI API integration, form handling
- **Features**: Add ingredients, generate recipes using AI (Mistral), scroll to recipe section, markdown rendering

### **Game Projects**

#### [Tenzies](./Tenzies/)
- **Description**: Dice rolling game where players roll until all dice show the same value
- **Concepts**: useState, useRef, useEffect, game logic, conditional rendering
- **Features**: 10 dice, hold functionality, win detection, confetti celebration, new game button

#### [Assembly-Endgame](./Assembly-Endgame/)
- **Description**: Word guessing game with programming language themes
- **Concepts**: useState, game state management, conditional rendering, keyboard input
- **Features**: Guess letters to reveal programming language names, elimination system, win/lose conditions, confetti celebration

## 🛠️ Technology Stack

- **Frontend**: React 19.x
- **Build Tool**: Vite
- **Styling**: CSS
- **Package Manager**: npm
- **Linting**: ESLint

## 📁 Project Structure

Each project follows a standard React + Vite structure:
```
project-name/
├── src/
│   ├── components/     # React components
│   ├── assets/         # Images and static files
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── public/             # Public assets
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## 🚀 Getting Started

To run any project:

1. Navigate to the project directory:
   ```bash
   cd project-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local development URL (usually `http://localhost:5173`)

## 📚 Learning Path

These projects follow a logical progression:
1. **Basic React** - Component structure and JSX
2. **Props** - Data passing between components
3. **State Management** - useState and useEffect hooks
4. **Advanced Features** - Game development, API integration, AI features

## 🎯 Key Concepts Covered

- ✅ React components and JSX
- ✅ Props and data passing
- ✅ State management with hooks
- ✅ Side effects and API calls
- ✅ Event handling
- ✅ Conditional rendering
- ✅ Game logic implementation
- ✅ Form handling
- ✅ Component composition
- ✅ CSS styling and responsive design

## 📝 Notes

- All projects use modern React 19.x features
- Projects are built with Vite for fast development experience
- Each project is self-contained and can be run independently
- Projects demonstrate progressive complexity in React concepts

---

*Created as part of React learning journey - each project builds upon the previous concepts learned.*
