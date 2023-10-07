import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './album.css';

const Album = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (

        <div>

            <div className=" my-8   text-center border-b-2 border-rose-400 p-4 w-fit mx-auto">
                <h1 className="text-4xl md:text-7xl lg:text-5xl font-special ">Memories </h1>
                <p className="font-special text-2xl">Some of our beloved works </p>
            </div>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"

            >
                <SwiperSlide>
                    <div className='w-3/5 mx-auto'>
                        <img src="https://i.ibb.co/zVpcWLS/wedding-1.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-3/5 mx-auto'>
                        <img src="https://i.ibb.co/P6HSGtV/wedding-2.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-3/5 mx-auto'>
                        <img src="https://i.ibb.co/qrV1TtQ/wed-3.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-3/5 mx-auto'>
                        <img src="https://i.ibb.co/nbfTCNV/weddding-4.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-3/5 mx-auto'>
                        <img src="https://i.ibb.co/Jzbfg9V/wedding-5.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-3/5 mx-auto'>
                        <img src="https://i.ibb.co/9ngfPyZ/wedding-6.jpg" alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Album;