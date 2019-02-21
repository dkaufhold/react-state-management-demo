import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

/**
 * configureStore combines all reducers and any initial state you might want to
 * load and applies middlewares to further process actions.
 *
 * You can hook in own middlewares or use existing ones like thunk
 *
 * A common use for a custom middleware might me to intercept navigation events
 * for screen tracking purposes.
 */
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
