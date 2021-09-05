import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Loader from '../.';

const App = () => {
  return (
    <div
      style={{ width: 100, height: 100, borderRadius: 8, overflow: 'hidden' }}
    >
      <Loader />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
