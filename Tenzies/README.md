# 🎲 Tenzies - Dice Game

A fun and interactive dice game built with React where players roll dice to get all ten dice showing the same value. The first player to achieve this wins!

## 🎮 Game Overview

Tenzies is a fast-paced dice game that challenges players to roll ten dice until they all show the same number. Players can "hold" dice they want to keep, making strategic decisions about which values to preserve between rolls.

## ✨ Features

- **Interactive Dice Rolling**: Click to roll dice and try to get all ten dice to match
- **Hold Mechanism**: Click on individual dice to freeze them at their current value
- **Visual Feedback**: Held dice are highlighted in green
- **Win Detection**: Automatic detection when all dice match
- **Confetti Celebration**: Festive confetti animation when you win
- **Accessibility**: Screen reader support and ARIA labels for inclusive gaming
- **Responsive Design**: Works on desktop and mobile devices
- **New Game**: Start a fresh game after winning

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd Tenzies
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
   Navigate to `http://localhost:5173` to play the game

### Building for Production

```bash
npm run build
```

## 🎯 How to Play

1. **Start Rolling**: Click the "Roll" button to roll all ten dice
2. **Hold Dice**: Click on any die you want to keep at its current value
   - Held dice will turn green and won't change on subsequent rolls
   - You can unhold dice by clicking them again
3. **Strategic Rolling**: Continue rolling the remaining dice until you get the same value as your held dice
4. **Win Condition**: When all ten dice show the same number, you win!
5. **New Game**: Click "New Game" to start over

## 🛠️ Technologies Used

- **React 19.1.0** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **nanoid** - Unique ID generation for dice
- **react-confetti** - Celebration animation
- **CSS Grid** - Responsive dice layout
- **ESLint** - Code quality and consistency

## ♿ Accessibility

- **Screen Reader Support**: ARIA labels and live regions for game announcements
- **Keyboard Navigation**: Focus management for the roll button
- **Visual Indicators**: Clear color coding for held/unheld dice
- **Semantic HTML**: Proper button elements and structure

## 🎯 Future Enhancements

- Score tracking and statistics
- Timer mode for speed challenges
- Multiplayer support
- Sound effects and music
- Different dice themes
- Leaderboard functionality

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements or bug fixes!

## 📄 License

This project is for educational/demo purposes. Please respect the licenses of the underlying libraries and models used.

---

**Enjoy playing Tenzies! 🎲✨**
