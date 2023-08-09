// Components
import { useState } from "react";
import Counter from "./Counter";

const AddToCart = ({ price }) => {
    const splitAt = (index, xs) => [xs.slice(0, index), xs.slice(index)];
    const formattedPrice = parseFloat(splitAt(-2, `${price}`).join('.'));

    const [adjustedPrice, setAdjustedPrice] = useState(formattedPrice);

    const handleChange = (val) => {
        setAdjustedPrice(val * formattedPrice);
    }

    const addToCart = () => {
        // Given there are no mutations defined in the server, I'm assuming
        // this is purely for aesthetic purposes.
        console.log('Adding to cart...');
    }

    return (
        <div className="layout-padding-x layout-padding-y">
            <div className="flex flex-spread mb">
                <b>£{adjustedPrice.toFixed(2)}</b>
                <Counter min={1} max={20} onIncrement={handleChange} onDecrement={handleChange} />
            </div>
            
            <button onClick={addToCart} className="btn rounded-mid bg-brand-2 text-colour-dark text-size-large p-full full-width">Add to cart</button>
        </div>
    );
}

export default AddToCart;