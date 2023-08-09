// Components
import Counter from './Counter';

const AddToCart = ({ price, onIncrement, onDecrement, onAddToCart }) => {
  return (
    <div className="layout-padding-x layout-padding-y">
      <div className="flex flex-spread mb">
        <b>£{price}</b>
        <Counter min={1} max={20} onIncrement={onIncrement} onDecrement={onDecrement} />
      </div>

      <button
        onClick={onAddToCart}
        className="btn rounded-mid bg-brand-2 text-colour-dark text-size-large p-full full-width"
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
