import React from 'react';
import Products from '../Products/Products';

const Shop = () => {
    const products =[
        {name:"lenovo Lapu",id:1},
        {name:"Afsus Lapu",id:2},
        {name:"HP Lapu",id:3},
        {name:"Dell Lapu",id:4},
        {name:"Thosiba Lapu",id:5}
    ]
    return (
        <div>
            <h2>This is Shop</h2>
            {
               products.map(pd => <Products products={pd}></Products>) 
            }
        </div>
    );
};

export default Shop;