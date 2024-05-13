import logo from './logo.svg';
import './App.css';

import { Button } from './lit/button/ReactButton';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      {/* This button is directly imported from the lit component */}
      <lit-button></lit-button>

      {/* This component is imported from the React wrapper */}
      <Button />
    </div>
  );
}

export default App;
