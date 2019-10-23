import React, {Component} from 'react';
import Car from './Car/Car'
import './App.css';

class App extends Component {
  state = {
    cars: [
      {name: 'Ford', year: '2018'},
      {name: 'Audi', year: '2016'},
      {name: 'Mazda', year: '1999'}
    ],
    pageTitle: 'React components'
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {
    const myStyle = {
      textAlign: 'center'
    }
  
    return (
      <div className="App" style={myStyle}>
        <h1>{this.state.pageTitle}</h1>

        <input type='text' onChange={this.handleInput}>
        </input>

        <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}
        >Change title</button>

        { this.state.cars.map((car, index) => { 
          return (
            <Car 
            key={index}
            name={car.name} 
            year={car.year}
            onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
          />
          )
        }) }
        {/* <Car 
          name={cars[0].name} 
          year={cars[0].year}
          onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />
        <Car 
          name={cars[1].name} 
          year={cars[1].year}
          onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
        />
        <Car 
          name={cars[2].name} 
          year={cars[2].year}
          onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
        /> */}
      </div>
    );
  }
}
export default App;