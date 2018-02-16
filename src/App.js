import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import AppIndex from './AppIndex'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppIndex />
      </BrowserRouter>
    );
  }
}

export default App;
