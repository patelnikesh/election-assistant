import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Quiz from './Quiz';
import React from 'react';

describe('Quiz Component', () => {
  it('renders the first question', () => {
    render(<Quiz />);
    expect(screen.getByText(/Indian Election Quiz/i)).toBeInTheDocument();
    // Assuming the first question from data.js is about EVM or something similar
    // We can check if any question text is present
    expect(screen.getByText(/Question 1 of/i)).toBeInTheDocument();
  });

  it('allows selecting an answer and shows feedback', () => {
    render(<Quiz />);
    const options = screen.getAllByRole('button').filter(btn => btn.className.includes('quiz-option'));
    fireEvent.click(options[0]);
    expect(screen.getByText(/Correct!|Incorrect/i)).toBeInTheDocument();
  });

  it('can navigate through questions', () => {
    render(<Quiz />);
    const nextBtn = screen.getByText(/Next/i);
    // Initially Next is disabled until answered
    expect(nextBtn).toBeDisabled();
    
    const options = screen.getAllByRole('button').filter(btn => btn.className.includes('quiz-option'));
    fireEvent.click(options[0]);
    
    expect(nextBtn).not.toBeDisabled();
    fireEvent.click(nextBtn);
    
    expect(screen.getByText(/Question 2 of/i)).toBeInTheDocument();
  });
});
