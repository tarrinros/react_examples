import React, {Component} from 'react';
import './Car.css';
import withClass from '../hoc/withClass'

class Car extends Component {
  render () {
    const inputClasses = ['input']

    if (this.props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')    
    }
  
    if (this.props.name.length > 4) {
      inputClasses.push('bold')
    }
 
    return (
      <React.Fragment>
        <h3>Car title: { this.props.name }</h3>
        <p>Car year: <strong>{ this.props.year }</strong></p>
        <input 
          type='text'
          onChange={this.props.onChangeName} 
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    )
  }
}

export default withClass(Car, 'Car')