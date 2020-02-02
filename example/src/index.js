import React from 'react';
import ReactDOM from 'react-dom';
import ExampleUsage from './example';

const App = () => {
  console.log('gets far', ExampleUsage);
  return (
    <div>
      <h1>My app</h1>
      <ExampleUsage />
    </div>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
