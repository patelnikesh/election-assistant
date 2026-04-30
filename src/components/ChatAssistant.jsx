import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';

const QA_DATABASE = {
  'evm': 'EVM (Electronic Voting Machine) consists of a Control Unit and a Ballot Unit. It is secure, standalone, and does NOT connect to the internet. 🛡️',
  'vvpat': 'VVPAT (Voter Verifiable Paper Audit Trail) prints a slip of paper that shows your chosen candidate for 7 seconds, ensuring your vote is recorded correctly. ✅',
  'nota': 'NOTA (None Of The Above) gives you the right to express dissent by not voting for any candidate while still participating in the poll. 🗳️',
  'eci': 'The Election Commission of India (ECI) is the constitutional body that administers all election processes in India. It was founded on Jan 25, 1950. 🏛️',
  'ink': 'Indelible ink is made of Silver Nitrate. It stains the skin and only fades when the skin naturally regenerates, preventing double voting. 🖊️',
  'age': 'The minimum voting age in India is 18 years, while the minimum age to contest Lok Sabha elections is 25 years. 🎂',
  'epic': 'EPIC is the Elector Photo Identity Card, commonly known as the Voter ID. It is your primary document for voting. 📛',
  'mcc': 'Model Code of Conduct (MCC) is a set of guidelines for political parties to ensure fair elections, starting from the announcement of dates. 📜',
  'results': 'Counting of votes happens on a fixed date. VVPAT slips from 5 random polling stations per seat are physically verified against EVM counts. 🔢',
  'hello': 'Namaste! I am your Bharat Elects assistant. Ask me about EVM, VVPAT, NOTA, or the voting process!',
  'hi': 'Hello! How can I help you understand the Indian election process today?',
};

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Namaste! I'm your Bharat Elects assistant. Ask me anything about the Indian election process!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsTyping(true);

    // Enhanced Keyword Matching Logic
    setTimeout(() => {
      const lowercaseInput = currentInput.toLowerCase();
      let responses = [];
      
      for (const [key, value] of Object.entries(QA_DATABASE)) {
        if (lowercaseInput.includes(key)) {
          responses.push(value);
        }
      }

      const botResponseText = responses.length > 0 
        ? responses.join(' \n\n ') 
        : "I'm still learning! Try asking about EVMs, VVPAT, NOTA, Indelible Ink, or the Election Commission.";

      setMessages(prev => [...prev, { text: botResponseText, sender: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="chat-assistant-container" style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      zIndex: 2000
    }}>
      {isOpen && (
        <div className="glass chat-window" style={{
          width: '380px',
          height: '550px',
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '20px',
          overflow: 'hidden',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border)',
          animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
            color: 'white',
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '6px', borderRadius: '50%' }}>
                <Bot size={20} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem' }}>Bharat Elects Bot</h4>
                <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>Online | AI Assistant</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '4px' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            backgroundColor: 'rgba(248, 250, 252, 0.5)'
          }}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                alignItems: 'flex-start',
                gap: '10px'
              }}>
                {msg.sender === 'bot' && (
                   <div style={{ 
                     width: '28px', 
                     height: '28px', 
                     backgroundColor: 'var(--primary)', 
                     borderRadius: '50%', 
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'center',
                     color: 'white',
                     flexShrink: 0,
                     marginTop: '4px'
                   }}>
                     <Bot size={14} />
                   </div>
                )}
                
                <div style={{
                  maxWidth: '80%',
                  padding: '12px 16px',
                  borderRadius: '1.25rem',
                  borderBottomRightRadius: msg.sender === 'user' ? '0.2rem' : '1.25rem',
                  borderBottomLeftRadius: msg.sender === 'bot' ? '0.2rem' : '1.25rem',
                  backgroundColor: msg.sender === 'user' ? 'var(--accent)' : 'white',
                  color: msg.sender === 'user' ? 'white' : 'var(--text-main)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                  whiteSpace: 'pre-wrap'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                 <div style={{ 
                     width: '28px', 
                     height: '28px', 
                     backgroundColor: 'var(--primary)', 
                     borderRadius: '50%', 
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'center',
                     color: 'white'
                   }}>
                     <Bot size={14} />
                   </div>
                   <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                     Thinking <Loader2 size={12} className="animate-spin" />
                   </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} style={{
            padding: '15px 20px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            gap: '10px',
            backgroundColor: 'white'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about EVM, VVPAT, NOTA..."
              style={{
                flex: 1,
                padding: '12px 18px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border)',
                outline: 'none',
                fontSize: '0.95rem',
                backgroundColor: 'var(--bg-alt)',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
            />
            <button type="submit" style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              boxShadow: '0 4px 12px var(--primary-glow)'
            }} className="hover-scale">
              <Send size={20} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover-scale hover-glow"
        style={{
          backgroundColor: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '70px',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px var(--primary-glow)',
          cursor: 'pointer',
          float: 'right',
          position: 'relative'
        }}
      >
        {isOpen ? <X size={32} /> : (
          <>
            <MessageSquare size={32} />
            <div style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              backgroundColor: 'var(--accent)',
              color: 'white',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              fontSize: '0.75rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid var(--bg-main)'
            }}>1</div>
          </>
        )}
      </button>

      <style>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 480px) {
          .chat-window {
            width: calc(100vw - 40px) !important;
            height: 70vh !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatAssistant;
