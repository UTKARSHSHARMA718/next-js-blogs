import React from 'react'
import Image from 'next/image'

import { colors } from '@/constanst/colors';

// TODO: find a better way of passing images files path to the src
// TODO: make the image circular

interface IntroductionInfo {
    heading: string;
    subheading: string;
    imgSrc: string;
}

const IntroductionInfo = (props: IntroductionInfo) => {
    const { heading, subheading, imgSrc } = props;
    const { black_1, white_1 } = colors;

    return (
        <div className={`${black_1} p-5 flex flex-col justify-center items-center gap-5`}>
            <Image src={imgSrc} width={400} height={400} className='rounded-full w-30 h-30' alt='post-image' />
            <div className="flex flex-col gap-5 justify-center items-center max-w-[400px]">
                <p className={`text-2xl text-center font-extrabold ${white_1}`}>{heading}</p>
                <p className={`text-lg text-center font-medium ${white_1}`}>{subheading}</p>
            </div>
        </div>
    )
}

export default IntroductionInfo