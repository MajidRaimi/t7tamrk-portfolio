import { Services as ServicesType } from '@/types/CMSResponseType';

import { useEffect } from 'react';
import Service from '../components/Service';
import { imageUrl } from '@/helpers';

const Services = ({ data }: { data: ServicesType }) => {
    return (
        <div
            className='relative flex h-screen flex-col items-center justify-around bg-[#0c0e21] px-12 py-24 text-white  lg:px-48'
            style={{
                backgroundImage: `url(${imageUrl(data.background)})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
        >
            <div className='flex flex-col items-center gap-12'>
                <h1
                    className=' text-3xl lg:text-6xl'
                    data-aos='fade-up'
                >
                    {data.title}
                </h1>
                <p
                    className='text-center text-xl'
                    data-aos='fade-up'
                    data-aos-delay='400'
                >
                    {data.subtitle}
                </p>
            </div>
            <div className='mx-auto flex w-full flex-wrap justify-around gap-4 sm:grid sm:grid-cols-4'>
                {data.service.map((service, index) => (
                    <div
                        key={service._uid}
                        data-aos='fade-up'
                        data-aos-delay={`${200 * index + 100}`}
                    >
                        <Service data={service} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
