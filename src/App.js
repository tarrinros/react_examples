import React from 'react';
import Car from './Car/Car'
import './App.css';

function App() {
  const myStyle = {
    textAlign: 'center'
  }
  return (
    <div className="App" style={myStyle}>
      <Car name={'Ford'} year={2018}> 
        <p style={{color: 'red'}}>COLOR</p>
      </Car>
      <Car name={'Audi'} year={2016}>
        <p style={{color: 'blue'}}>BLUE_COLOR</p>
      </Car>
    </div>
  );
}

export default App;
