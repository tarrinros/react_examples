import React, {Component} from 'react';
import Auxillary from '../hoc/Auxillary'

class Counter extends Component {
  state = {
    counter: 0
  }

  upCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  downCounter = (state) => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return(
      // React Fragment is using to avoid additional div on the top
      <Auxillary>
        <h2>Counter {this.state.counter}</h2>
        <button onClick={this.upCounter}>+</button>
        <button onClick={this.downCounter}>-</button>
      </Auxillary>  
    )

    // return [        
    //   <h2 key={'1'}>Counter {this.state.counter}</h2>,
    //   <button key={'2'} onClick={this.upCounter}>+</button>,
    //   <button key={'3'} onClick={this.downCounter}>-</button>
    // ]
  }
}

export default Counter;