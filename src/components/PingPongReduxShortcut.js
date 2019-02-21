import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ping, pong } from '../actions/pingpong'

/**
 * this shortcut is a very common way to structure a redux connected component.
 *
 * keep in mind though that it's easier and cleaner to reuse the PingPong
 * component itself if you keep them separate.
 *
 * Also by using dispatch directly inside the PingPong component, we're breaking
 * with the container-child component-pattern which again could be important
 * for re-usability. But if the case allows it you can mix and match whatever
 * you prefer to use ;)
 *
 */

class PingPong extends Component {
  ping = () => {
    // a connected component will always have this.props.dispatch available
    // that way you can also dispatch actions directly inside the component
    this.props.dispatch(ping())
  }

  pong = () => {
    this.props.dispatch(pong())
  }

  render() {
    return (
      <div>

        {/*Display two buttons. One for ping, one for pong. On click call the
        matching function, that is passed in through props*/}
        <button onClick={this.ping}>PING</button>
        <button onClick={this.pong}>PONG</button>

        {/*show the state of pingOrPong and pingPongCount
        even though these values are already purposefully named, they could
        receive any information that matches its prop types */}
        <p>{this.props.pingOrPong}</p>
        <p>{this.props.pingPongCount}</p>
      </div>
    )
  }
}

PingPong.propTypes = {
  pingPongCount: PropTypes.number,
  pingOrPong: PropTypes.string,
  ping: PropTypes.func,
  pong: PropTypes.func,
  dispatch: PropTypes.func,
}

PingPong.defaultProps = {
  pingOrPong: 'Please Click A Button'
}

export default connect(
  state => {
    return {
      pingPongCount: state.pingpong.pingPongCount,
      pingOrPong: state.pingpong.pingOrPong,
    }
  }
)(PingPong)
