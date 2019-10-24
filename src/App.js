import React, {Component} from 'react';
import Car from './Car/Car'
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      cars: [
        {name: 'Ford', year: '2018'}
        // {name: 'Audi', year: '2016'},
        // {name: 'Mazda', year: '1999'}
      ],
      pageTitle: this.props.title,
      showCars: false
    }
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName (name, index) {
    const car = this.state.cars[index]
    car.name = name
    // Clone array from the state
    const cars = [...this.state.cars]
    // Add the new state of car to the cloned array
    cars[index] = car

    this.setState({
      cars: cars
    })
  }

  deleteHandler (index) {
    const cars = [...this.state.cars]
    // Delete element of array cars 
    // Splice  - first parameter is a start index, second - amount of deleted elements
    cars.splice(index, 1)

    this.setState({
      cars: cars
    })
  }

  UNSAFE_componentWillMount () {
    console.log('App UNSAFE_componentWillMount')
  } 

  componentDidMount () {
    console.log('App componentDidMount')
  } 

  render () {
    console.log('App render')

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
                  onChangeName={event => this.onChangeName(event.target.value, index)}
                  onDelete={this.deleteHandler.bind(this, index)}
                />
                )
              })
    }
  
    return (
      <div className="App" style={myStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button 
          onClick={this.toggleCarsHandler}
          className={'AppButton'}
        >Toggle Cars</button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          { cars }
        </div>
      </div>
    );
  }
}
export default App;