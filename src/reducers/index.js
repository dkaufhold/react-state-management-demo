import { combineReducers } from 'redux'
import itemsReducer from './items'
import pingpongReducer from './pingpong'

/**
 * combining the reducers into one global rootreducer, which we use to construct
 * our store
 *
 * the keys of the reducers define under which key you later connect state to
 * props
 *
 * see ../components/PingPongRedux.js
 */
export default combineReducers({
  pingpong: pingpongReducer,
  items: itemsReducer,
})
