import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section id='Hero'>
    <div className="constractor  mx-auto px-6 space-x-6 flex flex-col-reverse  md:flex-row items-center">
    <div className="w-1/2 flex flex-col space-y-5 justify-center py-6 text-center md:text-left text-slate-900">
    <h1 className='font-bold text-3xl md:text-5xl'>
     Designer is the character creation software for the HERO System.
    </h1>
    <p>
    Including full support for both HERO System 5th Edition and HERO System 6th Edition rulesets,
    HERO Designer is all you need to start creating, printing, and sharing characters for your games.
    </p>
    <a href="#" className='px-6 py-2 rounded-full self-center md:self-start text-white bg-_PrimeDark hover:bg-_SecondDark'>Get Started</a>
     </div>
     <div className="w-1/2">
     <Image src={"https://res.cloudinary.com/dxmudifi2/image/upload/v1720261087/undraw_Programming_re_kg9v_l8l0fd.png"} alt='Hero' width={1000} height={1000}/>
     </div>
    </div>
    </section>
  )
}

export default Hero
