import * as itemsActions from '../actions/items'

const initialState = {
  itemsLoading: false,
  items: [],
  error: undefined,
}

/**
 * The reducer of the items example isn't any more difficult than the ping pong
 * example.
 *
 * It sets state attributes for each action type it encounters
 * It does not need to pay any regard to the asynchronous nature of the action
 * we're trying to dispatch.
 *
 * This one however does show an example for how action properties are passed
 * on into the state (items and error).
 *
 */
export default (state = initialState, action) => {
  switch (action.type) {
    // when loading starts, set loading state to true and reset error message
    // keep loaded items untouched
    case itemsActions.ITEMS_LOADING_START:
      return {
        ...state,
        itemsLoading: true,
        error: undefined,
      }
    // when the items have loaded, store them on the state object and reset
    // loading state and error message
    case itemsActions.ITEMS_LOADING_FULFILLED:
      return {
        ...state,
        itemsLoading: false,
        items: action.items,
        error: undefined,
      }
    // when loading items has failed, reset loading state and items and
    // store the current error message on the state object
    case itemsActions.ITEMS_LOADING_ERROR:
      return {
        ...state,
        itemsLoading: false,
        items: [],
        error: action.error,
      }
    default:
      return state
  }
}
