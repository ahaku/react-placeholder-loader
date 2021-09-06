import * as React from 'react';
import styles from './styles.module.css';

/**
 * Component for showing loading animation.
 * You can wrap this component in container with exact size, loader size will be 100% of parent container size.
 * Or you can pass width and height props <Loader width={100} height={100} />
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
  > {
  width?: string | number;
  height?: string | number;
}

const Loader = ({
  width = '100%',
  height = '100%',
  ...restProps
}: LoaderProps) => {
  return (
    <div
      style={{ width, height }}
      className={styles.loader}
      {...restProps}
    ></div>
  );
};

export default Loader;
