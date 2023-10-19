import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import CartItem from "./CartItem";

const MyCart = () => {
    const { user } = useContext(AuthContext)
    const email = user.email
    const [cart, setCart] = useState(null)
    useEffect(() => {
        fetch(`https://z-tech-server.vercel.app/carts/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data );
                setCart(data)
            })

    }, [email])
    console.log(cart);
    // console.log(email);
    if (!cart?.length) {
        return (
            <div className="w-full min-h-[700px] flex justify-center items-center text-3xl font-medium text-red-400">
                Cart is empty </div>
        )
    }
    else {
        return (

            <div className=" min-h-[700px]  mt-20">
                {cart?.map(cartItem => <CartItem key={cartItem._id} cart={cart} setCart={setCart} cartItem={cartItem}></CartItem>)}
            </div>


        );
    }
}

export default MyCart;