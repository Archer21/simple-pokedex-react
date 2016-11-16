'use strict'

import React from 'react'

class LoadMore extends React.Component {
  render () {
    return (
      <button className="LoadMore button" onClick={this.handleLoadClick}>Load More Pokemon</button>
    )
  }
}

export default LoadMore