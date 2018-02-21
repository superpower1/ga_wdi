import React from 'react'
import Slider from './Slider'
import Like from './Like'
import Peeper from './Peeper'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numOfLikes: 0
    }
  }

  updateLikes() {
    const numOfLikes = this.state.numOfLikes + 1;
    this.setState({
      numOfLikes
    })
  }

  render() {
    return(
      <div>
        <h1>Hello World</h1>
        <Slider/>
        <Slider startValue = '5' />
        <Like updateLikes = {this.updateLikes.bind(this)}/>
        <span>{this.state.numOfLikes}</span>
        <Peeper maxLength="30"/>
      </div>
    )
  }
}
