import React from 'react';
import './Peeper.scss';

export default class Peeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      maxLength: this.props.maxLength || 140
    }
  }

  typing(event) {
    const content = event.target.value;
    this.setState({ content });
  }

  render() {
    const {content, maxLength} = this.state;
    const charsleft = maxLength - content.length;
    const isWarning = charsleft < 20 ? 'peeper__span--warning' : ''
    return(
      <div className="peeper">
        <textarea
          onChange={this.typing.bind(this)}
          className="peeper__textarea"
          >
        </textarea>
        <footer className="peeper__footer">
          <span className={isWarning}>{charsleft}</span>
          <button
            disabled={content.length === 0 || content.length > maxLength}
            >
            peep
          </button>
        </footer>
      </div>
    )
  }
}
