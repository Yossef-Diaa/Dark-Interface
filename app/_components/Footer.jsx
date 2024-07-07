import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




function Footer() {
  return (
    <footer className="bg-_BGDark">
      <div className="container mx-auto text-white px-5 py-10 flex flex-col-reverse md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="flex flex-col items-center justify-between space-y-12 md:space-y-2 md:items-start">
          <div className="Block text-center mt-6 md:mt-0 md:hidden">
          Copyright &copy; 2023, All Rights Reserved

          </div>
          <div>
          <Image src={"https://res.cloudinary.com/dxmudifi2/image/upload/v1720260673/l1_tdcmioc.png"} alt='Logo' width={150} height={50} className=''/>
          </div>

          <div className='flex space-x-4'>
            <a href="#" className=' text-white hover:bg-_SecondDark rounded-full '><FaFacebook /></a>
            <a href="#" className=' text-white hover:bg-_SecondDark rounded-full'><FaInstagramSquare />            </a>
            <a href="#" className=' text-white hover:bg-_SecondDark rounded-full'><FaYoutube />            </a>
            <a href="#" className=' text-white hover:bg-_SecondDark rounded-full'><FaLinkedin />            </a>
            <a href="#" className=' text-white hover:bg-_SecondDark rounded-full'><FaTwitter />            </a>
          </div>
          
        </div>


        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3">
            <a href="" className="hover:text-slate-300">Home</a>
            <a href="" className="hover:text-slate-300">About</a>
            <a href="" className="hover:text-slate-300">Contact</a>
          </div>
          <div className="flex flex-col space-y-3">
            <a href="" className="hover:text-slate-300">Imprint</a>
            <a href="" className="hover:text-slate-300">Privacy</a>
            <a href="" className="hover:text-slate-300">Credits</a>
          </div>
        </div>

        <div className="flex flex-col justify-between ">
        <form action="">
          <div className="flex space-x-3 ">
          <input type="text" placeholder='Subscribe to Newlettern' className="flex-1 py-2 px-6 rounded-full" />
          <button className="bg-_PrimeDark py-2 px-4 rounded-full hover:bg-_SecondDark">Go</button>
          </div>
        </form>
        <div className="hidden md:block">
        Copyright &copy; Yossef Diaa 2023, All Rights Reserved
        </div>
          </div>
     </div>
    </footer>
  )
}

export default Footer
