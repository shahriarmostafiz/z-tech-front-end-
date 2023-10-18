import PropTypes from "prop-types"
import { useState } from 'react';
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ProductCard = ({ product }) => {
    const { name, brand, type, rating, price, img, } = product
    const [thisRating, setRating] = useState(0)
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }
    //     {
    //         Image,
    //         Name,
    // Band Name,
    // type ,
    //         Price,
    //         Rating,
    // Details button,
    // Update button,
    //     }
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-2">
                <figure><img src={img} className='w-full' alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3 className='text-xl font-medium'> Price:  $ {price} </h3>

                    <div className='flex justify-left'>
                        <Rating style={{ maxWidth: 120 }} value={rating} onChange={setRating} itemStyles={myStyles} readOnly />
                    </div>
                    <div className="flex gap-6 my-3 items-center">
                        <h2 className="badge badge-outline">{brand.toUpperCase()}</h2>
                        <h3 className='badge badge-outline'>{type.toUpperCase()}</h3>
                    </div>
                    <div className="card-actions gap-7">
                        <button className="btn btn-primary">Update </button>
                        <button className="btn btn-primary">Details </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
ProductCard.propTypes = {
    product: PropTypes.object
}