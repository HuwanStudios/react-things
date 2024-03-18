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
    const [products, setProducts] = useState(initialProducts);

    function handleIncrementClick(index) {
        const nextProducts = products.map((p, i) => {
            if (i === index) {
                // Increment the clicked counter
                return {
                    ...p,
                    count: p.count + 1
                };
            } else {
                // The rest haven't changed
                return p;
            }
        });
        setProducts(nextProducts);
    }

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}
                    {' '}
                    (<b>{product.count}</b>)
                    <button onClick={() => {
                        handleIncrementClick(product.id);
                    }}>
                        +
                    </button>
                </li>
            ))}
        </ul>
    );
}

// 16-updating-arrays-in-state - Challenge 1 of 4: Update an item in the shopping cart