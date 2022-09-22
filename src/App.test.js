import { fireEvent, render, screen } from '@testing-library/react';
import App, { changeCamelToSpaces } from './App';

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

test("button turns gray when disabled & then reverts back to red", () => {
  render(<App />) // creates the virtual DOM for testing
  const button = screen.getByRole('button', {name: "Change to blue"})
  const checkbox = screen.getByRole("checkbox", {name: "Disable button"})

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor: "gray"})

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor: "red"})
})

test("button turns gray when disabled & then reverts back to blue", () => {
  render(<App />) // creates the virtual DOM for testing
  const button = screen.getByRole('button', {name: "Change to blue"})
  const checkbox = screen.getByRole("checkbox", {name: "Disable button"})

  fireEvent.click(button)

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor: "gray"})

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor: "blue"})
})

// Testing a function
describe('camelcase converting to spaces', () => {
  test("with no inner capital letter", () => {
    expect(changeCamelToSpaces('Blue')).toBe('Blue')
  })
  test("with 1 inner capital letter", () => {
    expect(changeCamelToSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test("with multiple inner capital letter", () => {
    expect(changeCamelToSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})