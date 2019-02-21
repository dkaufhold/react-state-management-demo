import React from 'react'
import PropTypes from 'prop-types'

const PingPong = props => (
  <div>
    {/*Display two buttons. One for ping, one for pong. On click call the
        matching function, that is passed in through props*/}
    <button onClick={props.ping}>PING</button>
    <button onClick={props.pong}>PONG</button>

    {/*show the state of pingOrPong and pingPongCount
        even though these values are already purposefully named, they could
        receive any information that matches its prop types */}
    <p>{props.pingOrPong}</p>
    <p>{props.pingPongCount}</p>
  </div>
)

PingPong.propTypes = {
  pingPongCount: PropTypes.number,
  pingOrPong: PropTypes.string,
  ping: PropTypes.func,
  pong: PropTypes.func,
}

PingPong.defaultProps = {
  pingOrPong: 'Please Click A Button',
}

export default PingPong
