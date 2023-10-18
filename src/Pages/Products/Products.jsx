import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

import { Navigation } from 'swiper/modules';

const Products = () => {
    const { brand } = useParams()
    // console.log(brand);
    const brandProducts = useLoaderData()
    const [sliderData, setsliderData] = useState('')
    // console.log(brandProducts);
    useEffect(() => {
        fetch(`http://localhost:5000/brands/${brand}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setsliderData(data)
            })
    }, [brand])
    console.log(sliderData);
    return (
        <div>
            <div className='lg:max-w-5xl   mx-auto'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide><img src={sliderData?.img1} className='w-full' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={sliderData?.img2} className='w-full' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={sliderData?.img3} className='w-full' alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className='flex justify-center'>
                {brandProducts.length ? <div className='grid md:grid-cols-2 gap-5 '>

                    {
                        brandProducts?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)

                    }
                </div> :
                    <div className='w-full min-h-[500px] flex justify-center items-center'>
                        <h1 className='text-4xl font-bold'>Currently No products are available </h1>
                    </div>}
            </div>

        </div>
    );
};

export default Products;