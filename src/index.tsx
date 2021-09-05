import * as React from 'react';
import styles from './styles.module.css';

/**
 * Component for showing loading animation.
 * You can wrap this component in container with exact size, loader size will be 100% of parent container size.
 * You can pass some props as if it was an ordinary div.
 * @example
 * <div className="loading-wrapper">
 *   <Loader />
 * </div>
 */
export interface LoaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Loader = ({ ...restProps }: LoaderProps) => {
  return <div className={styles.loader} {...restProps}></div>;
};

export default Loader;
