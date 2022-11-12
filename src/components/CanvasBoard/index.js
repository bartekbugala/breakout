import styles from './styles.module.scss';

export default function Board({
  innerRef,
  width = 800,
  height = 500,
  ...props
}) {
  return (
    <canvas
      className={styles.canvas}
      ref={innerRef}
      id="canvas"
      height={`${height}px`}
      width={`${width}px`}
      {...props}
    />
  );
}
