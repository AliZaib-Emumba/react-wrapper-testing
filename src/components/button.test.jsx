import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from './Button';
import '@testing-library/jest-dom';

test('Button component renders with correct text', () => {
  const buttonText = 'Click here';
  render(<Button />);

  const buttonElement = screen.getByText(buttonText);
  expect(buttonElement).toBeInTheDocument();
});
