import { Link, useLoaderData } from "react-router-dom";
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Details = () => {
    const { user } = useContext(AuthContext)
    const userEmail = user?.email
    const data = useLoaderData()
    const { _id, name, details, brand, type, rating, price, img } = data
    const [thisRating, setRating] = useState(0)
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }
    const handleAddToCart = id => {
        fetch()
    }
    // console.log(data);
    return (
        <div className="flex flex-col justify-center items-center lg:max-w-6xl lg:mx-auto">
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
                <Link>
                    <button
                        onClick={() => handleAddToCart(_id)}
                        className="btn btn-error btn-outline"> Add to cart </button>
                </Link>
            </div>
        </div>
    );
};

export default Details;