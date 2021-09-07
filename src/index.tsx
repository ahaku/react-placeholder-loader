import * as React from 'react';
import styles from './styles.module.css';
export interface LoaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  width?: string | number;
  height?: string | number;
  primaryColor?: string;
  secondaryColor?: string;
}

/**
 * Component for showing loading animation.
 * You can wrap this component in container with exact size, loader size will be 100% of parent container size.
 * Or you can pass width and height props <Loader width={100} height={100} />
 * You can pass some props as if it was an ordinary div.
 *
 * @example
 * <div className="loading-wrapper">
 *   <Loader />
 * </div>
 */

const Loader = ({
  width = '100%',
  height = '100%',
  primaryColor = '#ffffff',
  secondaryColor = '#ececec',
  ...restProps
}: LoaderProps) => {
  return (
    <div
      style={{
        width,
        height,
        ['--primaryColor' as string]: primaryColor,
        ['--secondaryColor' as string]: secondaryColor,
      }}
      className={styles.loader}
      {...restProps}
    ></div>
  );
};

export default Loader;
