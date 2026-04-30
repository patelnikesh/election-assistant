import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Guide from './components/Guide';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <Hero />
        
        <div id="timeline">
          <Timeline />
        </div>
        
        <div id="guide">
          <Guide />
        </div>
        
        <div id="quiz">
          <Quiz />
        </div>
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
}

export default App;
