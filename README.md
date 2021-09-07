You can wrap this component in a container with the exact size, loader size will be 100% of parent container size.
Or you can pass width and height props <Loader width={100} height={100} />

## Getting Started

```sh
npm i react-placeholder-loader
```

or

```sh
yarn add react-placeholder-loader
```

## Usage

```jsx
import Loader from 'react-placeholder-loader';

const Card = ({ loading }) => {
  <div style={{ width: 100, height: 200 }}>
    {loading ? <Loader /> : '...card content'}
  </div>;
};
```

```jsx
import Loader from 'react-placeholder-loader';

const Card = ({ loading }) => {
  <>{loading ? <Loader width={100} height={100} /> : '...card content'}</>;
};
```

Passing color props

```jsx
import Loader from 'react-placeholder-loader';

const Card = ({ loading }) => {
  <div style={{ width: 100, height: 200 }}>
    {loading ? (
      <Loader primaryColor="#00203F" secondaryColor="#ADEFD1" />
    ) : (
      '...card content'
    )}
  </div>;
};
```
