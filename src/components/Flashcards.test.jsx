import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Flashcards from './Flashcards';
import React from 'react';

describe('Flashcards Component', () => {
  it('renders the first flashcard term', () => {
    render(<Flashcards />);
    expect(screen.getAllByText(/EVM/i)[0]).toBeInTheDocument();
  });

  it('flips the card when clicked', () => {
    render(<Flashcards />);
    const card = screen.getAllByText(/EVM/i)[0].closest('.flashcard');
    fireEvent.click(card);
    expect(screen.getByText(/Electronic Voting Machine/i)).toBeInTheDocument();
  });

  it('navigates to the next card', async () => {
    render(<Flashcards />);
    const buttons = screen.getAllByRole('button');
    const nextBtn = buttons[buttons.length - 1]; // Last button is "Next"
    
    fireEvent.click(nextBtn);
    
    // The next card is VVPAT
    // We might need to wait for the state update
    const elements = await screen.findAllByText(/VVPAT/i);
    expect(elements[0]).toBeInTheDocument();
  });
});
