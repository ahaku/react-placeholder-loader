import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Loader from '../.';

const App = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 100px)',
        height: 100,
        gap: 20,
      }}
    >
      <Loader />
      <Loader primaryColor="#00203F" secondaryColor="#ADEFD1" />
      <Loader primaryColor="#0063B2" secondaryColor="#9CC3D5" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
