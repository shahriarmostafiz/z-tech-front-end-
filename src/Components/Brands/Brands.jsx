import React, { useEffect, useState } from 'react';

const Brands = () => {
    const [brands, setBrands] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => {
                setBrands(data)
            })
    }, [])
    // console.log(brands);
    return (
        <div className='flex flex-col gap-8 items-center justify-center my-8 lg:my-20 '>
            <h1 className='text-4xl'>Our Partners</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    brands?.map(brand => <div key={brand._id} className='text-center  w-60'>
                        <img src={brand.image} className='w-60 rounded-xl ' alt="" />
                        <h1 className='text-2xl font-medium'>{brand.brand}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Brands;