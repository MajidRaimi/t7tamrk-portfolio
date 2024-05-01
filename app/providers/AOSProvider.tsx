'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const AOSProvider = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            delay: 300
        });
    }, []);

    return <></>;
};

export default AOSProvider;
