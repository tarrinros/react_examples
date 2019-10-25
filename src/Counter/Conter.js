import React, {Component} from 'react';
import Auxiliary from '../hoc/Auxiliary'
import Counter2 from '../Counter2/Counter2'

class Counter extends Component {
  state = {
    counter: 0
  }

  upCounter = () => {
    this.setState((prevState)=>{
      return {
        counter: prevState.counter - 1
      }
    })
  }

  downCounter = () => {
    // this.setState({
    //   counter: this.state.counter - 1
    // })

    // This method saves from changing object with nonvalid state
    this.setState((prevState)=>{
      return {
        counter: prevState.counter - 1
      }
    })
  }

  render() {
    return(
      // React Fragment is using to avoid additional div on the top
      <Auxiliary>
        <h2>Counter {this.state.counter}</h2>
        <Counter2/>
        <button onClick={this.upCounter}>+</button>
        <button onClick={this.downCounter}>-</button>
      </Auxiliary>  
    )

    // return [        
    //   <h2 key={'1'}>Counter {this.state.counter}</h2>,
    //   <button key={'2'} onClick={this.upCounter}>+</button>,
    //   <button key={'3'} onClick={this.downCounter}>-</button>
    // ]
  }
}

export default Counter;