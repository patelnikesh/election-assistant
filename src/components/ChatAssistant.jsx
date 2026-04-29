import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

const QA_DATABASE = {
  'evm': 'EVM stands for Electronic Voting Machine. It is used to record votes electronically.',
  'vvpat': 'VVPAT stands for Voter Verifiable Paper Audit Trail. It allows voters to verify that their vote was cast correctly.',
  'nota': 'NOTA stands for None Of The Above. It is an option for voters who do not wish to vote for any of the candidates.',
  'eci': 'ECI stands for Election Commission of India. It is an autonomous constitutional authority responsible for administering election processes in India.',
  'default': 'I am a simple keyword bot. Try asking about EVM, VVPAT, NOTA, or ECI!',
};

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your election assistant. Ask me about EVM, VVPAT, NOTA, etc.", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    const lowercaseInput = input.toLowerCase();
    let botResponseText = QA_DATABASE['default'];

    for (const [key, value] of Object.entries(QA_DATABASE)) {
      if (lowercaseInput.includes(key)) {
        botResponseText = value;
        break;
      }
    }

    const botMessage = { text: botResponseText, sender: 'bot' };
    
    // Simulate slight delay
    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);
    }, 500);

    setInput('');
  };

  return (
    <div className="chat-assistant-container" style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000
    }}>
      {isOpen && (
        <div className="chat-window" style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          width: '320px',
          height: '450px',
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '15px',
          overflow: 'hidden',
          border: '1px solid var(--border)'
        }}>
          {/* Header */}
          <div style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bot size={20} />
              <span style={{ fontWeight: 600 }}>Election Assistant</span>
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
            padding: '15px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            backgroundColor: '#f8f9fa'
          }}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                alignItems: 'flex-end',
                gap: '8px'
              }}>
                {msg.sender === 'bot' && <div style={{
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '6px',
                  display: 'flex'
                }}><Bot size={14} /></div>}
                
                <div style={{
                  maxWidth: '75%',
                  padding: '10px 14px',
                  borderRadius: '16px',
                  borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
                  borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                  backgroundColor: msg.sender === 'user' ? 'var(--primary)' : 'white',
                  color: msg.sender === 'user' ? 'white' : 'var(--text-main)',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                  fontSize: '0.95rem'
                }}>
                  {msg.text}
                </div>
                
                {msg.sender === 'user' && <div style={{
                  backgroundColor: '#e9ecef',
                  color: 'var(--text-muted)',
                  borderRadius: '50%',
                  padding: '6px',
                  display: 'flex'
                }}><User size={14} /></div>}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} style={{
            padding: '15px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            gap: '8px',
            backgroundColor: 'white'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              style={{
                flex: 1,
                padding: '10px 15px',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                outline: 'none',
                fontSize: '0.95rem'
              }}
            />
            <button type="submit" style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0
            }}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover-scale"
        style={{
          backgroundColor: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(255,153,51,0.4)',
          cursor: 'pointer',
          float: 'right'
        }}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default ChatAssistant;
