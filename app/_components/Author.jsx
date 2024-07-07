import Image from 'next/image'
import React from 'react'
import { Data } from "./Author-config"

function Author() {
    return (
        <div>
            <section className="author">
                <div className="mx-auto my-32 text-center">
                    <h2 className=' font-bold text-4xl'>
                        Best Practices dont actually work.
                    </h2>
                    <p className=" mt-8 max-w-5xl mx-auto">you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance,
                         I really think you’ll wonder how you ever worked with CSS any other way.</p>
                </div>

                <div className='mt-10 flex flex-col  space-x-0  space-y-5 md:flex-row md:space-x-5 md:space-y-0 m-5 '>
                    {Data.map((data) => (

                        <div key={data.id} className=" md:w-1/3 bg-_3Dark flex flex-col p-6 space-y-2 rounded-lg border border-_PrimeDark items-center">

                            <Image src={data.img} 
                            alt={data.name} 
                            width={50}
                             height={50}
                             className='w-16 rounded-full -mt-12 '                             
                             />

                            <h5 className=' font-bold text-lg text-_PrimeDark'>{data.name}</h5>

                            <p className=' leading-5'>{data.bio}</p>
                        </div>
                  ))}

                </div>

            </section>
        </div>
    )
}

export default Author
