'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { CMSResponse } from '@/types/CMSResponseType';
import { AboutUs, Hero, Services, ContactUs } from '../export';

import 'swiper/css';
import 'swiper/css/pagination';

const VerticalSwiper = ({
    data,
    email
}: {
    data: CMSResponse;
    email: string;
}) => {
    return (
        <div className='w-full'>
            <Hero data={data.content.hero[0]} />
            <AboutUs data={data.content.about_us[0]} />
            <Services data={data.content.services[0]} />
            <ContactUs data={data.content.contact[0]} email={email} />
        </div>
    );
};

export default VerticalSwiper;
