import React from 'react';
import { toast } from 'react-toastify';

const CartItem = ({ cartItem, cart, setCart }) => {
    const { _id, email, data } = cartItem
    // const{}
    const { name, brand, type, rating, price, img } = data
    const handleCartDelete = (id) => {
        console.log(id);
        fetch(`https://z-tech-server.vercel.app/carts/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    const remaining = cart.filter(item => item._id !== id)
                    setCart(remaining)
                    toast.error("product removed from cart")
                }
            })
    }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl md:max-h-48 mx-auto my-4">
                <figure><img src={img} className='w-80' alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex w-fit gap-2'>
                        <p>{brand}</p>
                        <p>{type}</p>
                    </div>
                    <p> Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => handleCartDelete(_id)}
                            className="btn btn-error">Remove </button>
                        {/* <button className="btn btn-primary"></button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;