import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, Info } from 'lucide-react';

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
  'schedule': 'The election schedule is announced by the ECI. It includes dates for nominations, scrutiny, withdrawal, polling, and counting.',
  'candidate': 'Candidates must be Indian citizens, registered voters, and at least 25 years old for Lok Sabha elections.',
  'booth': 'A polling booth is where voters go to cast their votes. Each booth usually serves around 1,500 voters.',
  'registration': 'To vote, you must be registered in the electoral roll of your constituency. You can check your name on the ECI website.',
};

const SUGGESTIONS = ['EVM security', 'VVPAT slip', 'How to vote', 'Voting age', 'What is NOTA?'];

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
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const findResponse = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    // Check for exact keywords first
    for (const [key, value] of Object.entries(QA_DATABASE)) {
      if (lowercaseQuery.includes(key)) {
        return value;
      }
    }

    // Check for phrases
    if (lowercaseQuery.includes('how to vote') || lowercaseQuery.includes('voting process')) {
      return "To vote, you need to go to your designated polling booth with a valid ID (like EPIC). You will be verified, marked with ink, and then you can cast your vote on the EVM. Check the 'EVM Guide' section for a full walkthrough! 🚶‍♂️🗳️";
    }

    if (lowercaseQuery.includes('security') || lowercaseQuery.includes('hack')) {
      return "EVMs are highly secure and standalone devices. They are not connected to any network, making them immune to remote hacking. Multiple layers of physical security and mock polls ensure their integrity. 🔒";
    }

    return "I'm not sure I understand that. Try asking about EVMs, VVPAT, NOTA, Indelible Ink, or the voting process. You can also click the suggestions above! 💡";
  };

  const handleSend = async (text) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage = { text: messageText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText }),
      });

      if (!response.ok) {
        throw new Error('Backend error');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { text: data.response, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
      // Fallback to local logic if backend fails
      setTimeout(() => {
        const botResponse = findResponse(messageText);
        setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      }, 500);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chat-assistant-container" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 2000 }}>
      {isOpen && (
        <div className="glass chat-window">
          {/* Header */}
          <div className="chat-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '6px', borderRadius: '50%' }}>
                <Bot size={22} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>Bharat Elects Bot</h4>
                <span style={{ fontSize: '0.75rem', opacity: 0.9 }}>Digital Democracy Guide</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '4px' }}
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            <div style={{ 
              backgroundColor: 'rgba(13, 31, 60, 0.05)', 
              padding: '12px', 
              borderRadius: 'var(--radius-md)', 
              fontSize: '0.85rem', 
              color: 'var(--navy-mid)',
              display: 'flex',
              gap: '10px',
              marginBottom: '10px'
            }}>
              <Info size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Ask about the voting process, EVMs, or eligibility! Try a suggestion below.</span>
            </div>

            {messages.map((msg, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                alignItems: 'flex-start',
                gap: '10px'
              }}>
                {msg.sender === 'bot' && (
                   <div style={{ 
                     width: '32px', 
                     height: '32px', 
                     backgroundColor: 'var(--saffron)', 
                     borderRadius: '50%', 
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'center',
                     color: 'white',
                     flexShrink: 0,
                     marginTop: '4px'
                   }}>
                     <Bot size={16} />
                   </div>
                )}
                
                <div style={{
                  maxWidth: '80%',
                  padding: '12px 18px',
                  borderRadius: '1.25rem',
                  borderBottomRightRadius: msg.sender === 'user' ? '0.2rem' : '1.25rem',
                  borderBottomLeftRadius: msg.sender === 'bot' ? '0.2rem' : '1.25rem',
                  backgroundColor: msg.sender === 'user' ? 'var(--navy-mid)' : 'white',
                  color: msg.sender === 'user' ? 'white' : 'var(--text)',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                  whiteSpace: 'pre-wrap',
                  border: msg.sender === 'bot' ? '1px solid var(--border)' : 'none'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                 <div style={{ 
                     width: '32px', 
                     height: '32px', 
                     backgroundColor: 'var(--saffron)', 
                     borderRadius: '50%', 
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'center',
                     color: 'white'
                   }}>
                     <Bot size={16} />
                   </div>
                   <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                     Assistant is thinking... <Loader2 size={12} className="animate-spin" />
                   </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <div style={{ 
            padding: '10px 20px', 
            display: 'flex', 
            gap: '8px', 
            overflowX: 'auto', 
            backgroundColor: 'var(--off-white)',
            borderTop: '1px solid var(--border)',
            scrollbarWidth: 'none'
          }}>
            {SUGGESTIONS.map(s => (
              <button
                key={s}
                onClick={() => handleSend(s)}
                className="chat-suggestion-btn hover-scale"
                aria-label={`Ask about ${s}`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                padding: '12px 18px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border)',
                outline: 'none',
                fontSize: '0.95rem',
                backgroundColor: 'var(--gray-50)',
                transition: 'all 0.2s ease'
              }}
              aria-label="Chat input"
            />
            <button type="submit" style={{
              backgroundColor: 'var(--saffron)',
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
              boxShadow: '0 4px 12px rgba(232,84,26,0.3)'
            }} className="hover-scale" aria-label="Send message">
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
          backgroundColor: 'var(--saffron)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '70px',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(232,84,26,0.4)',
          cursor: 'pointer'
        }}
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
      </button>
    </div>
  );
};

export default ChatAssistant;
