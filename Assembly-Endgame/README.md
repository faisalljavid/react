# Assembly Endgame 🎯

A fun and educational word guessing game built with React that teaches programming languages through elimination! Can you guess the word before all your programming languages are eliminated?

## 🎮 How to Play

Assembly Endgame is a word guessing game with a unique twist - each wrong guess eliminates a programming language from your arsenal. The goal is to guess the hidden word before you lose all your languages (except Assembly, which is your last resort).

### Game Rules:
- **Objective**: Guess the hidden word by selecting letters
- **Lives**: You start with 8 programming languages (HTML, CSS, JavaScript, React, TypeScript, Node.js, Python, Ruby)
- **Mechanics**: 
  - Correct letter guesses reveal the letter in the word
  - Wrong letter guesses eliminate a programming language
  - You win by guessing the complete word
  - You lose when all languages are eliminated (Assembly is your final language)
- **Special Features**:
  - Farewell messages when languages are eliminated
  - Confetti animation when you win
  - Visual feedback for correct/incorrect guesses
  - Accessible design with screen reader support

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the project files, navigate to the project directory
   cd Assembly-Endgame
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)


## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS** - Custom styling with modern CSS features
- **clsx** - Utility for conditional CSS classes
- **react-confetti** - Confetti animation for celebrations

## 🎨 Customization

### Adding New Words
Edit `src/assets/words.js` to add or modify the word list:
```javascript
export const words = [
  "your",
  "new",
  "words",
  "here"
]
```

### Modifying Languages
Edit `src/assets/languages.js` to change programming languages:
```javascript
export const languages = [
  {
    name: "Your Language",
    backgroundColor: "#HEXCODE",
    color: "#HEXCODE",
  }
]
```

### Customizing Farewell Messages
Edit `src/assets/utils.js` to add new farewell messages:
```javascript
export function getFarewellText(language) {
  const options = [
    "Your custom message here",
    // ... more messages
  ];
  // ... rest of function
}
```

## 🤝 Contributing

Feel free to contribute to this project by:
- Adding new words to the word list
- Improving accessibility features
- Adding new programming languages
- Enhancing the UI/UX
- Fixing bugs or adding new features

## 📄 License

This project is for educational/demo purposes. Please respect the licenses of the underlying libraries and models used.

## 🙏 Acknowledgments

- Inspired by classic word guessing games
- Built with modern React best practices
- Designed with accessibility in mind
- Special thanks to the Scrimba community

---

