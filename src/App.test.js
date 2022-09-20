import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText('Learn React');
//   expect(linkElement).toBeInTheDocument();
// });

test('test button functionality', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: "Change to blue"});
  expect(button).toHaveStyle({backgroundColor: "red"})

  // click button
  fireEvent.click(button)

  // assertion for color change
  expect(button).toHaveStyle({backgroundColor: "blue"})

  // assertion for text change
  expect(button.textContent).toBe("Change to red")
});

test('test checkbox with button functionality', () => {
  // check button starts enabled
  render(<App />) // creates the virtual DOM for testing
  const button = screen.getByRole('button', {name: "Change to blue"})
  expect(button).toBeEnabled()
  
  // check checkbox starts unchecked
  const checkbox = screen.getByRole("checkbox", {name: "Disable button"})
  expect(checkbox).not.toBeChecked()

  fireEvent.click(checkbox)
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})