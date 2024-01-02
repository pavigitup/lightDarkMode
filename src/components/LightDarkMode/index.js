import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isBgColor: true}

  lightBtn = () => {
    this.setState({isBgColor: false})
  }

  darkBtn = () => {
    this.setState({isBgColor: true})
  }

  render() {
    const {isBgColor} = this.state
    let bgButton
    if (isBgColor === true) {
      bgButton = (
        <div
          className="card-con"
          style={{backgroundColor: '#000000', color: '#ffffff'}}
        >
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.lightBtn}>
            Light Mode
          </button>
        </div>
      )
    } else {
      bgButton = (
        <div
          className="card-con"
          style={{backgroundColor: '#ffffff', color: '#000000'}}
        >
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.darkBtn}>
            Dark Mode
          </button>
        </div>
      )
    }
    return <div>{bgButton}</div>
  }
}

export default LightDarkMode
