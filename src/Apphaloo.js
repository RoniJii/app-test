import './App.css';
import React, {useState} from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

function App() {
  const[height, setHeight] = useState(0);
  const[weight, setWeight] = useState(0);
  const[asdfg, setAsdfg] = useState(0);

  function handleSubit(e){
    e.preventDefault();
    const haloo = weight / (height * height);
    setAsdfg(haloo);
  }

  return (
    <div>
      <form onSubmit={handleSubit}>
        <div>
          <h2>Calculate BMI</h2>
        </div>
        <div>
          <label>Height</label>
          <input type="number" onChange={e => setHeight(e.target.value)} value={height}/>
        </div>

        <div>
          <label>Weight</label>
          <input type="number" onChange={e => setWeight(e.target.value)} value={weight}/>
        </div>
        <label>Tulos</label>
        <div><output>{asdfg}</output></div>
        
        <Button as="input" type="submit" value="Submit" />{' '}
        <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Jumbotron>
      </form>
    </div>
    
  );
}

export default App;
