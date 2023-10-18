import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const brandProducts = useLoaderData()
    console.log(brandProducts);
    return (
        <div>
            <div className='flex justify-center'>
                <div className='grid md:grid-cols-2 gap-5 '>
                    {
                        brandProducts?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;