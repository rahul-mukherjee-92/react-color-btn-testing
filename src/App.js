import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

export function changeCamelToSpaces(color) {
    return color.replace(/\B([A-Z])\B/g, " $1")
}

function App() {
  const [redState, setRedState] = useState(true)
  const [disabled, setDisabled] = useState(false)

  return (
    <div>
      <button 
        style={{ backgroundColor: disabled ? "gray" : redState ? "MediumVioletRed" : "MidnightBlue" }} 
        // onClick={() => setRedState(redState => !redState)}
        onClick={() => setRedState(!redState)}
        disabled={disabled}
      >
        {redState ? "Change to Midnight Blue" : "Change to Medium Violet Red"}
      </button>
      <input 
        type="checkbox"
        id="disable-btn-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}  
      />
      <label htmlFor='disable-btn-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
