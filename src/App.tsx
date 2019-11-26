import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => ({

})

const mapStateToProps = (state: any) => ({

})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
