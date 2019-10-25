import React, {Component} from 'react';
import withClass from '../hoc/withClass'
import PropTypes from 'prop-types'
import './Car.css';

class Car extends Component {
  constructor (props) {
    super(props)

    this.inputRef = React.createRef() 
    
   }

   componentDidMount() {
    if (this.props.index === 0) {
      this.inputRef.current.focus()
    }
  }

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
          ref={this.inputRef} 
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

// Validate types of incoming props
Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}

export default withClass(Car, 'Car')