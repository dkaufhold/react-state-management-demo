import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchItems } from '../actions/items'
import './item.css'

class ItemList extends Component {
  fetchItems = () =>
    this.props.fetchItems('https://rickandmortyapi.com/api/character')

  fetchItemsWithError = () =>
    this.props.fetchItems('https://rickandmortyapi.com/api/characters')

  render() {
    return (
      <React.Fragment>
        <button onClick={this.fetchItems}>Load Rick and Morty names</button>
        <button onClick={this.fetchItemsWithError}>Cause Error</button>
        {this.props.itemsLoading && <p>Loading…</p>}
        {this.props.error && <p>{this.props.error}</p>}
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

ItemList.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  error: PropTypes.string,
  itemsLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => {
  return {
    items: state.items.items,
    error: state.items.error,
    itemsLoading: state.items.itemsLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // the async action creator fetchItems can be used as any regular action
    // creator as long as we use the thunk middleware
    fetchItems: url => dispatch(fetchItems(url)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)
