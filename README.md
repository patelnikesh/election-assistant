# Bharat Elects — Indian Election Assistant 🇮🇳

Bharat Elects is a premium, interactive web application designed to simplify the complexities of the Indian electoral process. Built with a focus on educational clarity and modern aesthetics, it empowers citizens with the knowledge needed to participate in the world's largest democratic exercise.

## ✨ Features

- **Interactive Timeline**: A detailed journey through the 9 phases of an election, from announcement to government formation.
- **Voter Education Guide**: Step-by-step visual instructions on what to expect at the polling station.
- **EVM & VVPAT Simulator**: Understand how Electronic Voting Machines and Paper Audit Trails work.
- **Knowledge Quiz**: Challenge yourself with trivia about Indian constitutional laws and election rules.
- **Terminology Flashcards**: Master key terms like NOTA, EPIC, and Model Code of Conduct.
- **AI Chat Assistant**: A smart assistant powered by **Google Gemini AI** to answer your questions about the Indian election process.

## 🎨 Design Philosophy

The application uses a **Premium Design System** inspired by the Indian flag:
- **Saffron & Green accents** for cultural resonance.
- **Deep Navy Blue** (Ashoka Chakra) for a sense of authority and stability.
- **Glassmorphism & Micro-animations** for a modern, fluid user experience.
- **Responsive Layout** optimized for both mobile and desktop viewing.

## 🛠️ Technology Stack

- **Frontend**: React (Vite)
- **Backend**: Flask (Python)
- **AI Integration**: Google Gemini AI (gemini-1.5-flash)
- **Styling**: Vanilla CSS with a custom design system
- **Icons**: Lucide React
- **Testing**: Vitest (Frontend), Pytest (Backend)
- **Deployment**: Google Cloud Run & GitHub

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- Python (3.9+)
- Google Gemini API Key

### 2. Setup Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Create a `.env` file and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask server:
   ```bash
   python app.py
   ```

### 3. Setup Frontend
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```

### 4. Running Tests
- **Frontend**: `npm test`
- **Backend**: `python -m pytest backend/`


## 🛡️ Disclaimer

This is an educational project and is **not** affiliated with the Election Commission of India (ECI). All information is sourced from public records and constitutional documents.

---
Built with ❤️ for Indian Democracy.
