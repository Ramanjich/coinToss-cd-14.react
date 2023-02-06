import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {cointoss: 0, total: 0, HC: 0, TS: 0}

  oncointossing = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        HC: prevState.HC + 1,

        cointoss: tossResult,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        TS: prevState.TS + 1,

        cointoss: tossResult,
      }))
    }
  }

  render() {
    const {cointoss, total, HC, TS} = this.state
    let imageShow
    if (cointoss === 0) {
      imageShow = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else if (cointoss === 1) {
      imageShow = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }

    return (
      <div className="app-container">
        <div className="coin-card">
          <div className="heading-con">
            <h1>Coin Toss Game</h1>
          </div>
          <div className="para-con">
            <p>Heads (or) Tails</p>
          </div>
          <div className="image-con">
            <img src={imageShow} className="coin-images" alt="toss result" />
          </div>
          <div className="button-con">
            <button
              type="button"
              className="toss-button"
              onClick={this.oncointossing}
            >
              Toss Coin
            </button>
          </div>
          <div className="para2-con">
            <div className="p1-con">
              <p>Total:{total}</p>
            </div>
            <div className="p2-con">
              <p>Heads: {HC}</p>
            </div>
            <div className="p3-con">
              <p>Tails: {TS}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
