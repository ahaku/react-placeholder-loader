You can wrap this component in a container with the exact size, loader size will be 100% of parent container size.

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
import { Loader } from 'react-placeholder-loader';

const Card = ({loading}) => {
  <div style={{width: 100, height: 200}}>
    {loading ? <Loader /> : '...card content'}
  </div>
}
```
