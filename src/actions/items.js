/**
 *
 * Example of more complicated actions.
 * Some are taking arguments, that are passed onwards and are later available
 * inside the reducer.
 *
 */

export const ITEMS_LOADING_START = 'ITEMS_LOADING_START'
export const itemsLoadingStart = () => ({
  type: ITEMS_LOADING_START,
})

export const ITEMS_LOADING_FULFILLED = 'ITEMS_LOADING_FULFILLED'
export const itemsLoadingFulfilled = items => ({
  type: ITEMS_LOADING_FULFILLED,
  items,
})

export const ITEMS_LOADING_ERROR = 'ITEMS_LOADING_ERROR'
export const itemsLoadingError = error => ({
  type: ITEMS_LOADING_ERROR,
  error,
})

// this is an async action creator, that is handled and resolved by the thunk middleware
// it doesn't return an action, but a function
export function fetchItems(url) {

  // the returned function takes dispatch as its only argument
  // it's the dispatch function you also see when you connect a component
  return dispatch => {

    // here we dispatch itemsLoadingStart to signal, that we're beginning to load the items
    dispatch(itemsLoadingStart())

    // we fetch from the url, that was given as parameter on the async action creator
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response
      })

      // get the json response
      .then(response => response.json())

      // if it was successful, dispatch the itemsLoadingFulfilled action to
      // finalise the cycle and return our results
      .then(response => () => dispatch(itemsLoadingFulfilled(response.results)))

      // if an exception was raised at some point, dispatch the
      // itemsLoadingError action to finalise the cycle and return an error message
      .catch(() => dispatch(itemsLoadingError('Something went wrong!')))
  }
}
