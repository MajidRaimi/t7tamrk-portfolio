import Image from 'next/image';

import { AboutUs as AboutUsType } from '@/types/CMSResponseType';
import { imageUrl } from '@/helpers';

const AboutUs = ({ data }: { data: AboutUsType }) => {
    return (
        <div
            className='z-50 grid h-screen w-full place-content-center bg-[#accdd4] text-white'
            style={{
                backgroundImage: `url(${imageUrl(data.background)})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
        >
            <div className='flex w-full flex-col items-center gap-24'>
                <Image
                    src={imageUrl(data.image as string)}
                    alt='Background Image'
                    width={'600'}
                    height={'100'}
                    priority
                    className='px-4'
                    data-aos='fade-up'
                />
                <div className='flex max-w-xl flex-col space-y-2 text-center'>
                    <h1 className='text-2xl font-bold lg:text-4xl' data-aos='fade-up' data-aos-delay='400'>
                        {data.title}
                    </h1>
                    <p data-aos='fade-up' data-aos-delay='600'>{data.subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
