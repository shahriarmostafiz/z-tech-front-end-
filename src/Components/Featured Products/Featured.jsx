import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';


const Featured = () => {
    // const [sliderData, setsliderData] = useState('')

    return (
        <div className='lg:max-w-5xl lg:mx-auto'>
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
                <SwiperSlide><img src={"https://i.ibb.co/M7SRmgr/ASUS-Creator-Laptops.webp"} className='w-full' alt="" /></SwiperSlide>
                <SwiperSlide><img src={"https://i.ibb.co/Y2ntmHN/sony-a7c-ii-announcement-teaser.jpg"} className='w-full' alt="" /></SwiperSlide>
                <SwiperSlide><img src={"https://i.ibb.co/sQhLWtz/maxresdefault-1.jpg"} className='w-full' alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Featured;