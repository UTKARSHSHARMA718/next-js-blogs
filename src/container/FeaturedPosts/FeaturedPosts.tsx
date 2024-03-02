import React from 'react';

import Post from '@/components/Post/Post';
import { PostTypes } from '@/types/Post.types';
import ItemsList from '@/components/ItemsList/ItemsList';
import { useRouter } from 'next/navigation';

const FeaturedPosts = () => {
    // TODO: will be getting this from api
    // TODO: Think about applying internationalization at the end 
    const router = useRouter();
    const postList: PostTypes[] = [{
        src: "/images/nextjs.png",
        heading: "Getting started with NextJS",
        description: "Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        date: "February 2, 2024",
    }];

    const propsNames: string[] = ['src', 'heading', 'description', 'date']

    const onPostClickHandler = (data: PostTypes) => {
        const { heading } = data;
        // TODO: send correct id from here 
        //@ts-ignore
        router.push({
            pathname: `/posts/${heading}`,
            query: { id: 1 },
        })
    }

    return (
        <div className='bg-gray-900 w-full h-full flex flex-col gap-4 p-6'>
            <div className="p-4">
                <p className='text-center font-extrabold text-gray-500 text-5xl'>Featured Post</p>
            </div>
            <ItemsList data={postList} onClick={onPostClickHandler}  {...{ propsNames }} Component={Post} />
        </div>
    )
}

export default FeaturedPosts