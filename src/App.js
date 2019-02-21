import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ItemList from './components/ItemList'
import PingPongContainer from './components/PingPongContainer'
import PingPongAlt from './components/PingPongContainerAlt'
import PingPongRedux from './components/PingPongRedux'
import PingPongReduxShortcut from './components/PingPongReduxShortcut'

class App extends Component {
  state = {
    demo: 0,
  }
  demos = [1, 2, 3, 4, 5]

  renderDemo = () => {
    switch (this.state.demo) {
      case 1:
        return <div><h4>Ping Pong with container</h4><PingPongContainer/></div>
      case 2:
        return <div><h4>Ping Pong with different container</h4><PingPongAlt/></div>
      case 3:
        return <div><h4>Ping Pong with Redux</h4><PingPongRedux/></div>
      case 4:
        return <div><h4>Ping Pong with Redux shortcut</h4><PingPongReduxShortcut/></div>
      case 5:
        return <div><h4>Fetching items with async action creator</h4><ItemList/></div>
      default:
        return <p>Please select a demo.</p>
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">Redux Demo</p>
        {this.demos.map(demo => (
          <button
            className={this.state.demo === demo ? 'active' : ''}
            key={demo}
            onClick={() => this.setState({ demo })}
          >
            {demo}
          </button>
        ))}
        <hr/>
        {this.renderDemo()}
      </div>
    )
  }
}

export default App
