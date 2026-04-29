# 🗳️ Indian Election Assistant

> An interactive web application to help citizens understand and navigate the world's largest democratic exercise — the Indian General Election.

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Firebase](https://img.shields.io/badge/Deployed-Firebase-FFCA28?style=flat-square&logo=firebase)](https://firebase.google.com/)

---

## 📌 Overview

**Indian Election Assistant** is an educational, interactive single-page application built with **React + Vite** that guides Indian citizens step-by-step through the entire election process. From voter registration timelines to understanding EVMs and verifying votes using VVPAT, this app makes civic participation simple and accessible.

> ⚠️ _This is an educational project and is **not** affiliated with the Election Commission of India._

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 🏠 **Hero Landing** | Animated landing section with call-to-action buttons |
| 📅 **Election Timeline** | Visual step-by-step timeline of the entire election process |
| 📖 **Voter's Guide** | Detailed guide on how to register, find your polling booth, and cast your vote |
| 🃏 **Flashcards** | Interactive flashcard system for learning key election concepts |
| 🧠 **Quiz** | Test your knowledge of the Indian election process with an interactive quiz |
| 🤖 **AI Chat Assistant** | Floating conversational assistant to answer election-related questions |
| 🎨 **Responsive Design** | Fully responsive with smooth animations and modern UI |

---

## 🖥️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | Frontend UI library |
| **Vite 5** | Lightning-fast build tool & dev server |
| **Lucide React** | Icon library |
| **CSS3 (Vanilla)** | Custom styling with CSS variables, gradients & animations |
| **Firebase Hosting** | Cloud deployment & hosting |
| **Docker** | Containerization for cloud deployment |

---

## 📁 Project Structure

```
election-assistant/
├── public/                        # Static assets
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Navigation header with logo & nav links
│   │   ├── Timeline.jsx           # Election process timeline section
│   │   ├── Guide.jsx              # Step-by-step voter registration guide
│   │   ├── Flashcards.jsx         # Interactive flashcard learning component
│   │   ├── Quiz.jsx               # Knowledge quiz with scoring & feedback
│   │   └── ChatAssistant.jsx      # Floating AI-powered chat assistant
│   ├── App.jsx                    # Root application component & Hero section
│   ├── main.jsx                   # React entry point
│   ├── index.css                  # Global styles & design tokens
│   └── App.css                    # App-level component styles
├── Dockerfile                     # Docker container configuration
├── firebase.json                  # Firebase Hosting configuration
├── .firebaserc                    # Firebase project alias
├── .gitignore                     # Git ignored files
├── vite.config.js                 # Vite build configuration
├── eslint.config.js               # ESLint configuration
└── package.json                   # Project dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or above
- [npm](https://www.npmjs.com/) v9 or above

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/patelnikesh/election-assistant.git

# 2. Navigate to the project directory
cd election-assistant

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server with HMR |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm start` | Serve the built `dist/` folder using `serve` |

---

## 🐳 Docker Deployment

You can also run the app in a Docker container:

```bash
# Build the Docker image
docker build -t election-assistant .

# Run the container
docker run -p 8080:8080 election-assistant
```

The app will be available at `http://localhost:8080`

---

## ☁️ Firebase Deployment

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Build the project
npm run build

# Deploy to Firebase Hosting
firebase deploy
```

---

## 🌐 Live Demo

> Deployed on Firebase Hosting — [View Live App](https://valid-arc-494717-c1.web.app)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 👤 Author

**Nikesh Patel**
- GitHub: [@patelnikesh](https://github.com/patelnikesh)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ to empower Indian voters | Your Vote. Your Voice. Your Democracy. 🇮🇳
</p>
