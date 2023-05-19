import './App.css';
import logo from './logo.svg';
import React from 'react';

import BackgroundComponent from './component/BackgroundComponent';


class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <BackgroundComponent/>
        </div>
      </>
    );
  }
}
export default App;