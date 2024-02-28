/**
 *
 * @typedef {Object} FunctionComponentExtra
 * @property {string} a
 * @property {string} b
 * @property {string} [c]
 *
 * @component
 * @param {React.HTMLProps<HTMLSpanElement> & FunctionComponentExtra} props
 *
 * @returns {React.ReactElement}
 *
 */
function FunctionComponent(props) {
  const { a, b, c, ...spanProps } = props;
  return (
    <span {...spanProps}>
      {a}
      {b}
      {c}
    </span>
  );
}

export { FunctionComponent };

// 可以拆开
/**
 * @typedef {Object} FunctionComponentAnotherWayExtra
 * @property {string} z
 * @property {string} y
 * @property {string} [x]
 */

// 这个不能在拆开，这是一个完成的类型
/**
 * @component
 * @param {React.HTMLProps<HTMLSpanElement> & FunctionComponentAnotherWayExtra} props
 *
 * @returns {React.ReactElement}
 */

// 另一种写法，可以将类型拆开
function FunctionComponentAnotherWay(props) {
  const { z, y, x, ...spanProps } = props;
  return (
    <span {...spanProps}>
      {z}
      {y}
      {x}
    </span>
  );
}

export { FunctionComponent, FunctionComponentAnotherWay };
