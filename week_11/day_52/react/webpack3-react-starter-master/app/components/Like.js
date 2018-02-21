import React from 'react'

export default class Like extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <button onClick={this.props.updateLikes}>
          LIKE
        </button>
      </div>
    )
  }
}
