import { CONTACT, HOME, POSTS } from '@/Routes/routesNames';
import { colors } from '@/constanst/colors';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const Navbar = () => {
  const userName = 'Utkarsh Sharma';
  const router = useRouter();
  const { black_1, white_1 } = colors;

  // TODO: shift this to const file and add colors via color file
  const links = [
    {
      text: "Contact",
      navigateTo: CONTACT,
    },
    {
      text: "Posts",
      navigateTo: POSTS,
    }
  ]

  return (
    <div className={`flex justify-around items-center ${black_1} gap-8 p-4 border-1`}>
      <div className={`${white_1}`}>
        <h1 className='text-3xl font-bold cursor-pointer' onClick={() => router.push(HOME)}>{`${userName}'s NEXT BLOG`}</h1>
      </div>
      <div className="">
        <ul className='flex gap-3'>
          {
            links.map(link => {
              return <Link href={link?.navigateTo} className={`${white_1} font-medium`} key={link.navigateTo}>
                {
                  link?.text
                }
              </Link>
            }
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar