import React, { Component } from 'react'
import PingPong from './PingPong'

/**
 * see here the ping and pong methods.
 *
 * Instead of just passing down 'PING' and 'PONG' we pass a longer message.
 * Also we introduce some special side effect when the count exceeds 10.
 *
 * Note, that we don't need to change the PingPong component itself in order to
 * use it in a different way.
 */
class PingPongContainer extends Component {
  state = {
    pingOrPong: undefined,
    pingPongCount: 0,
  }

  alertPanic = pingPongCount => {
    if (pingPongCount >= 10) {
      alert(
        'EXCEEDING AMOUNT OF ALLOWED PING PONG! PLEASE REFRESH THE PAGE TO AVOID END OF WORLD TYPE SCENARIO!!!!'
      )
      return true
    }
  }

  ping = () => {
    this.setState(state => {
      if (!this.alertPanic(state.pingPongCount))
        return {
          pingOrPong: 'People who pressed PING, also pressed PONG. Y U NO TRY?',
          pingPongCount: state.pingPongCount + 1,
        }
    })
  }

  pong = () => {
    this.setState(state => {
      if (!this.alertPanic(state.pingPongCount))
        return {
          pingOrPong: 'Thanks for pressing PONG, please PONG with us again.',
          pingPongCount: state.pingPongCount + 1,
        }
    })
  }

  render() {
    return <PingPong ping={this.ping} pong={this.pong} {...this.state} {...this.props} />
  }
}

export default PingPongContainer
