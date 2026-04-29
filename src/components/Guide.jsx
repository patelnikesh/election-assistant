import React, { useState } from 'react';
import { ArrowRight, Fingerprint, Eye, Archive } from 'lucide-react';

const Guide = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'verify',
      icon: <Fingerprint size={32} />,
      title: "1. Identification",
      description: "Present your Voter ID (EPIC) or an approved identity document to the polling officer. They will verify your name in the electoral roll and mark your finger with indelible ink."
    },
    {
      id: 'evm',
      icon: <ArrowRight size={32} />,
      title: "2. The EVM",
      description: "Proceed to the voting compartment. You will see the Ballot Unit of the EVM. It displays the names and symbols of the candidates."
    },
    {
      id: 'vote',
      icon: <Archive size={32} />,
      title: "3. Cast Your Vote",
      description: "Press the blue button located next to the name and symbol of the candidate of your choice. A red light will glow next to the button, and you will hear a long beep sound confirming your vote."
    },
    {
      id: 'vvpat',
      icon: <Eye size={32} />,
      title: "4. Verify with VVPAT",
      description: "Look at the transparent window of the VVPAT machine kept next to the EVM. A printed slip containing the serial number, name, and symbol of the candidate you voted for will be visible for about 7 seconds before dropping into the secure box."
    }
  ];

  return (
    <section id="guide" className="section">
      <div className="container">
        <h2 className="section-title">How to Vote: EVM & VVPAT Guide</h2>
        <p className="section-subtitle">A step-by-step interactive guide on casting your vote at the polling booth.</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '4rem' }}>
          
          {/* Steps List */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {steps.map((step, index) => (
              <div 
                key={step.id}
                onClick={() => setActiveStep(index)}
                className="hover-scale"
                style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  border: activeStep === index ? '2px solid var(--primary)' : '1px solid var(--border)',
                  backgroundColor: activeStep === index ? 'rgba(255, 153, 51, 0.05)' : 'var(--surface)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  boxShadow: activeStep === index ? '0 4px 15px rgba(255,153,51,0.15)' : 'none',
                  transform: activeStep === index ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                <div style={{ 
                  color: activeStep === index ? 'var(--primary)' : 'var(--text-muted)',
                  transition: 'color var(--transition-fast)'
                }}>
                  {step.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  margin: 0,
                  color: activeStep === index ? 'var(--primary)' : 'var(--text-main)'
                }}>
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Details Panel */}
          <div className="card" style={{ flex: '2 1 400px', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
             <div className="animate-slide-up" key={activeStep} style={{ animation: 'slideUp 0.4s ease forwards' }}>
               <div style={{ 
                 width: '80px', 
                 height: '80px', 
                 borderRadius: '50%', 
                 backgroundColor: 'rgba(255, 153, 51, 0.1)', 
                 color: 'var(--primary)',
                 display: 'flex', 
                 alignItems: 'center', 
                 justifyContent: 'center',
                 marginBottom: '1.5rem',
                 boxShadow: '0 0 20px rgba(255, 153, 51, 0.2)'
               }}>
                 {steps[activeStep].icon}
               </div>
               <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent)' }}>
                 {steps[activeStep].title}
               </h3>
               <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                 {steps[activeStep].description}
               </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Guide;
