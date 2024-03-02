import ItemsList from '@/components/ItemsList/ItemsList';
import Post from '@/components/Post/Post';
import { PostTypes } from '@/types/Post.types'
import { useRouter } from 'next/navigation';
import React from 'react'

const AllPosts = () => {

  const router = useRouter();

  const allPostList: PostTypes[] = [{
    src: "/images/nextjs.png",
    heading: "Getting started with NextJS",
    description: "Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    date: "February 2, 2024",
  },
  {
    src: "/images/nextjs.png",
    heading: "Getting started with NextJS",
    description: "Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    date: "February 2, 2024",
  },
  {
    src: "/images/nextjs.png",
    heading: "Getting started with NextJS",
    description: "Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    date: "February 2, 2024",
  }

  ];

  const onPostClickhandler = (data: PostTypes) => {
    const { heading } = data;
    console.log({data})
    router.push(`/posts/${heading}`);
  }

  const propsNames = ['src', 'heading', 'description', 'date'];

  return (
    <div className='bg-slate-700 h-full'>
      <div className="p-4">
        <p className='text-4xl font-bold text-center'>All Posts</p>
      </div>
      <ItemsList data={allPostList} onClick={onPostClickhandler} {...{ propsNames }} Component={Post} />
    </div>
  )
}

export default AllPosts