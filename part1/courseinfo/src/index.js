import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Welcome extends React.Component {
  render() {
    return <p> Hello, {this.props.name} </p>
  }
}

ReactDOM.render(
  <React.StrictMode>
  <Welcome name="Stephen"/>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
