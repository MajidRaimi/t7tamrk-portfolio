'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Contact } from '@/types/CMSResponseType';

interface ContactUsProps {
    data: Contact;
    email: string;
}

const ContactUs = ({ data, email }: ContactUsProps) => {
    return (
        <div className='flex h-screen flex-col items-center justify-center gap-12 bg-[#0c0e21] text-white'>
            <h1 className='text-2xl md:text-4xl' data-aos='fade-up'>
                {data.title}
            </h1>
            <p data-aos='fade-up' data-aos-delay='200'>
                {data.subtitle}
            </p>
            <form
                onSubmit={() => {}}
                className='flex items-center justify-center gap-4'
            >
                <input
                    type='text'
                    placeholder={email}
                    className='w-72 rounded-md p-2 px-4 text-slate-500 caret-inherit outline-none  ring-0'
                    data-aos='fade-up'
                    data-aos-delay='400'
                />
                <button
                    className='h-full rounded-md bg-[#4994af] px-4'
                    data-aos='fade-up'
                    data-aos-delay='600'
                >
                    {data.button}
                </button>
            </form>
            <div className='flex items-center justify-center gap-4'>
                <Link
                    href={data.appstore}
                    target='_blank'
                    className='z-10'
                >
                    <Image
                        src={
                            'https://a.storyblok.com/f/287136/0x0/26d692090a/app-store-badge.svg'
                        }
                        alt='Logo'
                        width={'164'}
                        height={'100'}
                        priority
                        data-aos='fade-up'
                        data-aos-delay='800'
                    />
                </Link>
                <Link
                    href={data.googleplay}
                    target='_blank'
                    className='z-10'
                    data-aos='fade-up' data-aos-delay='1000'
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
        </div>
    );
};

export default ContactUs;
