import React from 'react'

class Counter extends React.Component{
  constructor(props) {
// Your state
    super(props)
    this.state = {
      counter: 0
    }
  }
// Your event handlers

  decreseCounter() {
    const counter = this.state.counter - 1;
    this.setState({counter});
  }

  increseCounter() {
    const counter = this.state.counter + 1;
    this.setState({counter});
  }

  render() {
    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
          <button type="button" id="decrement" onClick={this.decreseCounter.bind(this)}>
            Decrement
          </button>
          <button type="button" id="increment" onClick={this.increseCounter.bind(this)}>
            Increment
          </button>
      </div>
    )
  }
}
