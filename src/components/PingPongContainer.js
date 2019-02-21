import React, { Component } from 'react'
import PingPong from './PingPong'

/**
 * This component handles the state for the PingPong component
 *
 * it also defines the callbacks that should be executed on pressing ping or pong
 *
 * it has no visual purpose, all the displaying is handled by PingPong, all the
 * logic is handled by the PingPongContainer
 *
 */
class PingPongContainer extends Component {
  state = {
    pingOrPong: undefined,
    pingPongCount: 0,
  }

  ping = () =>
    this.setState(state => ({
      pingOrPong: 'PING',
      pingPongCount: state.pingPongCount + 1,
    }))

  pong = () =>
    this.setState(state => ({
      pingOrPong: 'PONG',
      pingPongCount: state.pingPongCount + 1,
    }))

  render() {
    return <PingPong ping={this.ping} pong={this.pong} {...this.state} {...this.props} />
  }
}

export default PingPongContainer
