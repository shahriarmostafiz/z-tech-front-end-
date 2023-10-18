import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import CartItem from "./CartItem";

const MyCart = () => {
    const { user } = useContext(AuthContext)
    const email = user.email
    const [cart, setCart] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:5000/carts/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data );
                setCart(data)
            })

    }, [email])
    console.log(cart);
    // console.log(email);
    return (
        <div>
            {cart?.map(cartItem => <CartItem key={cartItem._id} cart={cart} setCart={setCart} cartItem={cartItem}></CartItem>)}
        </div>
    );
};

export default MyCart;