import { connect } from 'react-redux'
import { ping, pong } from '../actions/pingpong'
import './item.css'
import PingPong from './PingPong'

// map variables from the global state to props of the connected component
const mapStateToProps = state => {
  return {
    // pingpong is the name of the reducer as defined in ../reducers/index.js
    pingPongCount: state.pingpong.pingPongCount,
    pingOrPong: state.pingpong.pingOrPong,
  }
}

// mapping the dispatch of actions to function props
//
const mapDispatchToProps = dispatch => {
  return {
    ping: callback => dispatch(ping(callback)),
    pong: () => dispatch(pong()),
  }
}

// we can store the connection setup separately to re-use it
export const pingPongConnection = connect(
  mapStateToProps,
  mapDispatchToProps
)

// .. and then connect the component
export default pingPongConnection(PingPong)

// .. or we can use the more common shortcut, that you can see in ./PingPongReduxShortcut.js
