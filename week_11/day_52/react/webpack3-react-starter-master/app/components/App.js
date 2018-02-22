import React from 'react'
import Slider from './Slider'
import Like from './Like'
import Peeper from './Peeper'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numOfLikes: 0,
      peeps: ['loading...']
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/peeps')
      .then(res=>res.json())
      .then(res=>{
        this.setState({peeps: res})
      })
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
        {
          this.state.peeps.map((peep, index) => {
            return <p key={index}>{peep}</p>
          })
        }
        <Peeper maxLength="30"/>
      </div>
    )
  }
}
