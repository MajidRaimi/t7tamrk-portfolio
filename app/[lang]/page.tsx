import { Locale } from '@/i18n.config';
import { CMSResponse } from '@/types/CMSResponseType';
import React from 'react';
import VerticalSwiper from './components/VerticalSwiper';
import getDictionary from '@/lib/dictionary';
import { Metadata } from 'next';

export async function generateMetadata({
    params
}: {
    params: { lang: Locale };
}) {
    const { meta } = await getDictionary(params.lang);

    return {
        ...meta
    } as Metadata;
}

const getData = async (params: { lang: Locale }) => {
    const url = new URL(
        process.env.NEXT_APP_BASE_URL + '/landing-page'
    );
    url.searchParams.append(
        'language',
        params.lang === 'ar' ? 'ar-sa' : 'en'
    );
    url.searchParams.append(
        'token',
        process.env.NEXT_APP_STORYBLOK_TOKEN as string
    );
    url.searchParams.append('version', 'published');

    const res = await fetch(url.href, {
        cache: 'no-cache'
    });
    const data = (await res.json()).story as CMSResponse;
    return data;
};

const page = async ({ params }: { params: { lang: Locale } }) => {
    const data = await getData(params);
    const { contactUs } = await getDictionary(params.lang);

    return <VerticalSwiper data={data} email={contactUs.email} />;
};

export default page;
