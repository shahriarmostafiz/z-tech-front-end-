import { Link, useLoaderData } from "react-router-dom";
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Details = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email
    const data = useLoaderData()
    const { _id, name, details, brand, type, rating, price, img } = data
    const [thisRating, setRating] = useState(0)
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }
    const cartData = { email, data }
    const handleAddToCart = () => {
        console.log(cartData);
        fetch(`https://z-tech-server.vercel.app/carts`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cartData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success("product added")
                }
            })
    }
    // console.log(data);
    return (
        <div className="flex p-4 flex-col justify-center items-center lg:max-w-6xl lg:mx-auto my-6 md:my-8 lg:my-12">
            <div className="max-w-3xl flex justify-center">
                <img src={img} className="w-full" alt="" />
            </div>
            <div className="my-6 space-y-4">
                <h1 className="text-4xl font-medium ">
                    {name}
                </h1>
                <p className="max-w-4xl">
                    {details}
                </p>
                <div className='flex justify-left'>
                    <Rating style={{ maxWidth: 150 }} value={rating} onChange={setRating} itemStyles={myStyles} readOnly />
                </div>
                <p className="text-xl font-medium">Price: ${price}</p>

                <button
                    onClick={handleAddToCart}
                    className="btn btn-success btn-outline"> Add to cart </button>
            </div>
        </div>
    );
};

export default Details;