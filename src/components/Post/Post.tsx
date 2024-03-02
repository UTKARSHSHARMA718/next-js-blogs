import React from 'react'
import Image from 'next/image';
import { colors } from '@/constanst/colors';

export interface PostProps {
    src: string;
    heading: string;
    description?: string;
    date?: string;
    onClick?: () => void;
}

const Post = (props: PostProps) => {
    const { src, heading, description, date, onClick } = props;
    const { white_1, black_2 } = colors;



    return (
        <div className={`${black_2} w-1/3 flex flex-col justify-center items-center cursor-pointer`} {...{ onClick }}>
            <div className="bg-indigo-700 w-full flex justify-center items-center">
                <Image {...{ src }} width={200} height={200} alt={heading} />
            </div>
            <div className="p-3 flex flex-col gap-3 w-full">
                <div className="flex flex-col gap-2">
                    <p className={`${white_1} text-lg font-bold text-center`}>{heading}</p>
                    <p className='italic text-center'>{date}</p>
                </div>
                <div className="w-full">
                    <p className={`${white_1} text-center truncate`}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Post