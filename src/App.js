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
    pageTitle: 'React components',
    showCars: false
  }

  changeTitleHandler = (pageTitle) => {
    this.setState({pageTitle})
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  render() {
    const myStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => { 
                return (
                  <Car 
                  key={index}
                  name={car.name} 
                  year={car.year}
                  onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
                />
                )
              })
    }
  
    return (
      <div className="App" style={myStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}
        >Toggle Cars</button>

        { cars }
      </div>
    );
  }
}
export default App;