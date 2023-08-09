import { useCounter } from 'react-use';
import classNames from 'classnames';

// returns a function which calls all the given functions
const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args));

const Counter = ({ max, min, onIncrement, onDecrement }) => {
  const [value, { inc, dec }] = useCounter(1, max, min);
  const btnClasses = classNames('btn', 'rounded-mid', 'p-full', 'line-height-small', 'bg-brand-2');

  const increment = () => callAll(onIncrement(value + 1), inc(1));
  const decrement = () => callAll(onDecrement(value - 1), dec(1));

  return (
    <div>
      <button onClick={decrement} className={btnClasses} disabled={value === min}>
        -
      </button>
      <span className="text-center inline-block min-width-s count" title="Current quantity">
        {value}
      </span>
      <button onClick={increment} className={btnClasses} disabled={value === max}>
        +
      </button>
    </div>
  );
};

export default Counter;
