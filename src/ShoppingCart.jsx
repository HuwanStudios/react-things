import { useState } from 'react';

const initialProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
}, {
    id: 1,
    name: 'Cheese',
    count: 5,
}, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
}];

export default function ShoppingCart() {
    const [
        products,
        setProducts
    ] = useState(initialProducts)

    function handleIncreaseClick(productId) {
        setProducts(products.map(product => {
            if (product.id === productId) {
                return {
                    ...product,
                    count: product.count + 1
                };
            } else {
                return product;
            }
        }))
    }

    function handleDecreaseClick(productId) {
        setProducts(products.map(product => {
            if (product.id === productId) {
                return {
                    ...product,
                    count: product.count - 1
                };
            } else {
                return product;
            }
        }))
    }
    //16-updating-arrays-in-stateChallenge 2 of 4: Remove an item from the shopping cart


    function handleRemoveItemClick(productId) {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    }

    //16-updating-arrays-in-stateChallenge 3 of 4: Add an item to the shopping cart

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}
                    {' '}
                    (<b>{product.count}</b>)
                    <button onClick={() => {
                        handleIncreaseClick(product.id);
                    }}>
                        +
                    </button>
                    <button onClick={() => {
                        handleDecreaseClick(product.id);
                    }}>
                        –
                    </button>
                    <button onClick={() => handleRemoveItemClick(product.id)}>Remove</button>
                </li>
                ))}
        </ul>
    );
}