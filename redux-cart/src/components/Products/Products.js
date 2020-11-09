import React from 'react';

const Products = ({products}) => {
    return (
        <div>
            <h4>{products.name}</h4>
            <button>Add to cart</button>
        </div>
    );
};

export default Products;