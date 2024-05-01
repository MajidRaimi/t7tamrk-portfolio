'use client';
import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import { Hero as HeroType } from '@/types/CMSResponseType';
import { imageUrl } from '@/helpers';

const Hero = ({ data }: { data: HeroType }) => {
    return (
        <div
            className='relative flex h-screen flex-col items-center justify-center bg-[#2a2d57]'
            style={{
                backgroundImage: `url(${imageUrl(data.background)})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
        >
            <Image
                src={imageUrl(data.logo)}
                alt='Background Image'
                width={'200'}
                height={'200'}
                priority
                className=''
                data-aos='fade-up'
            />

            <div className='flex items-center justify-center gap-4'>
                <Link
                    href={data.appstore}
                    target='_blank'
                    className='  z-10'
                    data-aos='fade-up'
                    data-aos-delay="500"
                >
                    <Image
                        src={
                            'https://a.storyblok.com/f/287136/0x0/26d692090a/app-store-badge.svg'
                        }
                        alt='Logo'
                        width={'164'}
                        height={'100'}
                        priority
                    />
                </Link>
                <Link
                    href={data.googleplay}
                    target='_blank'
                    className=' z-10'
                    data-aos='fade-up'
                    data-aos-delay="700"
                >
                    <Image
                        src={
                            'https://a.storyblok.com/f/287136/0x0/05038e6799/google-play-badge.svg'
                        }
                        alt='Logo'
                        width={'164'}
                        height={'100'}
                        priority
                    />
                </Link>
            </div>
            <div className='relative w-full max-w-3xl px-4'>
                <Image
                    src={imageUrl(data.mockup)}
                    alt='Mockup'
                    width={'300'}
                    height={'300'}
                    priority
                    objectFit='contain'
                    className='mx-auto '
                    data-aos='fade-up'
                    data-aos-delay="900"
                />
            </div>
            {/* <div className='absolute inset-0 bg-black opacity-10' /> */}
        </div>
    );
};

export default Hero;
