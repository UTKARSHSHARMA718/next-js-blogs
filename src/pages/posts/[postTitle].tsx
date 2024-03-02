import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation'

const postTitle = () => {
    const params = useParams();
    console.log({ params })

    return (
        <div className='bg-gray-500 h-full p-6'>

            <div className='bg-purple-200 p-6 gap-4 flex flex-col w-full w-2/3 m-auto'>
                <div className="flex justify-between items-center border-b-4 border-purple-700">
                    <div className="text-4xl font-bold text-purple-900">
                        <p>TITLE</p>
                    </div>
                    <div className="">
                        <Image src={"/images/nextjs.png"} alt="dummy image" width={150} height={100} />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, aspernatur consequatur. Incidunt accusamus maxime ipsa ad natus quod beatae facere nostrum iste obcaecati ea consequatur cum rem nihil eos corporis vitae recusandae soluta, est, illo ex eum, cupiditate aliquam? Veritatis laudantium ut ea. Laborum ad quo accusantium, reiciendis nesciunt architecto culpa odio voluptates repudiandae, repellendus esse doloribus veniam rerum, quisquam qui mollitia molestiae modi rem at atque possimus. Ratione culpa, mollitia nulla ducimus aliquid dolorum illum, praesentium corrupti consequatur esse quae quisquam nisi doloremque iste quasi quod molestiae, perspiciatis aspernatur. Autem corrupti, ea accusamus consequatur porro architecto. Iste, reiciendis corrupti?</p>
                    </div>
                    <div className="flex flex-col gap-2">

                        <div className="">
                            <p>EXAMPLE</p>
                        </div>
                        <div className="">
                            <p>CODE PART</p>
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet.

                                <Link href={"/"}>here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default postTitle

export function getServerSideProps() {
    const id = 1;
    //TODO: get the data and then send it to the frontend

    return {
        props: {}
    }
}