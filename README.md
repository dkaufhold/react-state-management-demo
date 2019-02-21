# React Redux Thunk Demo

A demo repo to show React state container pattern, upgrading to redux and handling async actions.

## Run locally

```bash
$ git clone https://github.com/dkaufhold/react-state-management-demo.git
$ cd react-state-management-demo
$ yarn # or `npm i`
$ yarn start # or `npm start`
```

## 1. The Container Pattern

A very common pattern in React is that we have a component, that doesn't handle state itself and only receives props as values and callbacks and just displays information accordingly.
A typical example would be a [controlled input](https://reactjs.org/docs/forms.html#controlled-components) in a form.
In this repo there's the [PingPong](./src/components/PingPong.js) component, which falls into this category.

In order to fill the component with life, we will need a container component, that handles the state and passes down the information and callbacks to `PingPong`.
For this we have [PingPongContainer](./src/components/PingPongContainer.js).

This approach generally increases re-usability of the inner component as it can be provided with any variation of data to display. A form field could serve as a password or email or name input alike, passing down different validation functions for each without changing the way it is displayed.
See [PingPongContainerAlt](./src/components/PingPongContainerAlt.js) for an example how to mix things up just by passing different props.

Designing components so they can be reused and combined with different containers makes for cleaner code, better maintainability and better re-usability.

## 2. Redux Connection as Container

Redux also uses this pattern by introducing a higher order component with `connect` that allows to pass the exact same props to a component, that our container used to pass.
The only difference is it being stored in the global store instead of inside a container.

Inside [PingPongRedux](./src/components/PingPongRedux.js) you'll see that we're mapping variables and actions from the global state directly to the same props, that we've used before in our container. So if you stick to the container pattern when dealing with local state, any later upgrade to redux should be a piece of cake, because you can simply switch out container for connection.

There's also a more compact way of noting a redux connected component, that you can see inside [PingPongReduxShortcut](./src/components/PingPongReduxShortcut.js) 

## 3. Redux

As you've seen redux requires actions to be dispatched for changes in the state to occur.

The state is managed through reducers.

When dispatched, an action will be fed through all reducers.

The reducers can then look at the action's `type` and decide if they want to alter their part of the global state in any way.

The reducers can set their own local information or use attributes from the action to do so.

For a simple action setup see [actions/pingpong.js](./src/actions/pingpong.js)
Also see [reducers/pingpong.js](./src/reducers/pingpong.js) to see what the reducer does when encountering the actions defined in `actions/pingpong.js`.

## 4. Thunk

First of all a word of warning: Under no circumstances should you try to dispatch side effects inside a reducer, no matter how tempting it might look.

And if you're now thinking "But I could think of a use case where..." NO! Bad Developer! No side effects inside a reducer!

That's why we have a thing called redux thunk. (other async redux middlewares are available like redux-sage or even the mighty redux-observable (which as the name suggests works based on observables)).

If you want to dispatch different actions along a longer asynchronous process, like fetching data from a server, you need something like the thunk middleware, that can resolve and handle an async action creator and pass the dispatched actions on to redux.

See [actions/items.js](./src/actions/items.js) for how this would be set up.
It covers the possibility to render a loading state on screen, results and an error message in case something went wrong.
Also see [reducers/items.js](./src/reducers/items.js) to see how the reducer itself does not change much. Even when there's async actions involved.
