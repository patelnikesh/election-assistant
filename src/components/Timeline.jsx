import React from 'react';
import { Calendar, Users, Megaphone, CheckCircle2, Trophy } from 'lucide-react';

const Timeline = () => {
  const phases = [
    {
      icon: <Calendar size={24} />,
      title: "Announcement of Schedule",
      description: "The Election Commission of India (ECI) announces the election dates, phases, and constituencies. The Model Code of Conduct comes into effect immediately.",
      color: "var(--primary)"
    },
    {
      icon: <Users size={24} />,
      title: "Nominations",
      description: "Candidates file their nomination papers. The ECI scrutinizes these papers and publishes the final list of contesting candidates.",
      color: "var(--accent)"
    },
    {
      icon: <Megaphone size={24} />,
      title: "Campaigning",
      description: "Political parties and candidates hold rallies, distribute manifestos, and campaign. Campaigning ends 48 hours before polling begins.",
      color: "var(--secondary)"
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Polling Day",
      description: "Voters cast their votes using Electronic Voting Machines (EVMs) and verify them via Voter Verifiable Paper Audit Trail (VVPAT) at designated polling booths.",
      color: "var(--primary-dark)"
    },
    {
      icon: <Trophy size={24} />,
      title: "Counting & Results",
      description: "Votes are counted under strict security on a pre-determined date, and the results are declared by the Returning Officer.",
      color: "var(--secondary-light)"
    }
  ];

  return (
    <section id="timeline" className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
      <div className="container">
        <h2 className="section-title">The Election Timeline</h2>
        <p className="section-subtitle">Understanding the phases of the world's largest democratic exercise.</p>
        
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{ 
            position: 'absolute', 
            left: '50px', 
            top: '0', 
            bottom: '0', 
            width: '4px', 
            backgroundColor: 'var(--border)',
            borderRadius: '4px'
          }}></div>

          {phases.map((phase, index) => (
            <div key={index} className="animate-slide-up" style={{ 
              display: 'flex', 
              gap: '2rem', 
              marginBottom: '3rem',
              position: 'relative',
              animationDelay: `${index * 0.15}s`
            }}>
              {/* Icon Circle */}
              <div style={{ 
                width: '100px', 
                flexShrink: 0,
                display: 'flex',
                justifyContent: 'center',
                zIndex: 10
              }}>
                <div className="hover-scale" style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: phase.color,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 15px ${phase.color}40`,
                  border: '4px solid var(--surface-alt)',
                  transition: 'all 0.3s ease'
                }}>
                  {phase.icon}
                </div>
              </div>

              {/* Content Card */}
              <div className="card hover-scale" style={{ flex: 1, borderLeft: `4px solid ${phase.color}` }}>
                <h3 style={{ color: phase.color, marginBottom: '0.5rem', fontSize: '1.4rem' }}>{phase.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
