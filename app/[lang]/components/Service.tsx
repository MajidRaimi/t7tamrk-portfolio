import Image from 'next/image';

import classNames from 'classnames';
import { Service as ServiceType } from '@/types/CMSResponseType';

const Service = ({ data }: { data: ServiceType }) => {
    return (
        <div
            className='flex flex-col items-center gap-4'
            data-aos='fade-up'
        >
            <div
                className={classNames(
                    'relative size-24 rounded-full p-4 text-white lg:size-32'
                )}
                style={{ backgroundColor: data.color }}
            >
                <Image
                    src={data.image}
                    alt='Service Image'
                    fill
                    priority
                    className='p-4'
                />
            </div>
            <h3>{data.name}</h3>
        </div>
    );
};

export default Service;
