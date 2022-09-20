import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [redState, setRedState] = useState(true)
  const [disabled, setDisabled] = useState(false)

  return (
    <div>
      <button 
        style={{ backgroundColor: disabled ? "gray" : redState ? "red" : "blue" }} 
        // onClick={() => setRedState(redState => !redState)}
        onClick={() => setRedState(!redState)}
        disabled={disabled}
      >
        {redState ? "Change to blue" : "Change to red"}
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
