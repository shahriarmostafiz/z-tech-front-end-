import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const Products = () => {
    const { brand } = useParams()
    // console.log(brand);
    const brandProducts = useLoaderData()
    const [sliderData, setsliderData] = useState('')
    // console.log(brandProducts);
    useEffect(() => {
        fetch(`https://z-tech-server.vercel.app/brands/${brand}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setsliderData(data)
            })
    }, [brand])
    console.log(sliderData);
    return (
        <div className='my-6 md:my-8 lg:my-12'>
            <div className='lg:max-w-5xl   mx-auto'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true} 
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={sliderData?.img1} className='w-full' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={sliderData?.img2} className='w-full' alt="" /></SwiperSlide>
                    <SwiperSlide><img src={sliderData?.img3} className='w-full' alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className='flex justify-center mt-4 md:mt-8 lg:mt-12'>
                {brandProducts.length ? <div className='grid md:grid-cols-2 gap-6 '>

                    {
                        brandProducts?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)

                    }
                </div> :
                    <div className='w-full min-h-[500px] flex justify-center items-center'>
                        <h1 className='text-4xl font-bold'>Currently No Products are Available </h1>
                    </div>}
            </div>

        </div>
    );
};

export default Products;