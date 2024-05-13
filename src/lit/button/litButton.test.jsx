import React from 'react';

import { render } from '@testing-library/react';

import { screen } from 'shadow-dom-testing-library';
import '@testing-library/jest-dom';

import { Button } from '.';

describe('Test lit button', () => {
  const buttonText = 'Click me';

  it('should render the button', async () => {
    render(<Button />);
    const btn = await screen.findByShadowRole('button');
    expect(btn).toBeInTheDocument();
  });

  it('should have the correct text', async () => {
    render(<Button />);
    const buttonElement = await screen.findByShadowText(buttonText);

    console.log('button el', buttonElement.textContent);
    expect(buttonElement.textContent).toEqual(buttonText);
  });
});

// test('lit button has correct text', () => {
//   render(<Button />);
//   const buttonElement = screen.getByRole('button');
//   expect(buttonElement).toHaveTextContent('Click me');
// });

// test('lit button calls onClick handler', () => {
//   const onClickMock = jest.fn();
//   render(<Button onClick={onClickMock} />);
//   const buttonElement = screen.getByRole('button');
//   buttonElement.click();
//   expect(onClickMock).toHaveBeenCalled();
// });
