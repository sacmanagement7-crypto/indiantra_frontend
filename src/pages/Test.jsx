import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Test = () => {

    const { categories } = useContext(ShopContext);
    const { products } = useContext(ShopContext);
    return (
        <div>
            <div>{categories.join(" ")}</div>
            <div> {products.map((p) => (
                <div key={p.id}>
                    {p.name} – ₹{p.price}
                </div>
            ))}</div>
        </div>
    )
}

export default Test