import * as pingpongActions from '../actions/pingpong'

const initialState = {
  pingPongCount: 0,
  pingOrPong: undefined,
}

/**
 *
 * our redux reducer is a function with two arguments
 * 1. the local state (not the full global state, only its part of the big picture)
 * 2. the action that was dispatched
 *
 * All actions will be piped through all reducers
 *
 * The reducer must always return the final, full version of the state object
 *
 * So by default (if no action type matches), it will just return the state as
 * it was given.
 *
 * If it hits a matching action type, it alters the state accordingly
 *
 * You can compare the state changes in PingPongContainer.js to see that it's
 * exactly the same, just on the global layer.
 * Only difference to setState to keep in mind: you have to merge in the old
 * state to return a full, valid, new state object.
 *
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case pingpongActions.PING:
      return {
        ...state,
        pingOrPong: 'PING',
        pingPongCount: state.pingPongCount + 1,
      }
    case pingpongActions.PONG:
      return {
        ...state,
        pingOrPong: 'PONG',
        pingPongCount: state.pingPongCount + 1,
      }
    default:
      return state
  }
}
