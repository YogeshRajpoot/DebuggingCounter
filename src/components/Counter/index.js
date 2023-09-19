import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onDecrement = () => {
    this.SetState(prevState => ({count: prevState.count - 1}))
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <button className="button" onClick={this.onDecrement} type="button">
          Increase
        </button>
        <button className="button" onClick={this.onIncrement} type="button">
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter

//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//
