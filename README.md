# Eat-n-Split 🍽️💰

A React application for splitting bills with friends. Keep track of shared expenses and who owes what!

## Features

- ✅ Add friends to your list
- ✅ Split bills with selected friends
- ✅ Track balances (who owes whom)
- ✅ Clean, intuitive interface
- ✅ Responsive design

## Live Demo

[View Live Demo](https://yourusername.github.io/eat-n-split)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/eat-n-split.git
cd eat-n-split
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages

## Deployment

This project is configured for GitHub Pages deployment:

1. Update the `homepage` field in `package.json` with your GitHub username
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## Project Structure

```
src/
├── components/          # React components
│   ├── Button.js
│   ├── Friend.js
│   ├── FriendsList.js
│   ├── FormAddFriend.js
│   └── FormSplitBill.js
├── data/               # Static data
│   └── initialFriends.js
├── utils/              # Utility functions
│   └── validation.js
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Styles
```

## Technologies Used

- React 19
- JavaScript ES6+
- CSS3
- Create React App

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).