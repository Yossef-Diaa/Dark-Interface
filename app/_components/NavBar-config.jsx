"use client"

import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";

function NavBarconfig() {
    const [active, setActive] = useState("hidden");

    const HandleBurger = () => {
      setActive(active === "hidden" ? "" : "hidden");
    };
  return (
    <div>
        <div className=" mt-9">
        <IoMdMenu onClick={HandleBurger} />
        </div>

   <div className="md:hidden mx-auto  ">
        <div id="Mobile-Menu" className={`absolute flex ${active} flex-col items-center  space-y-3 bg-_3Dark py-6 left-6 right-6 drop-shadow-lg border border-_SecondDark`}>
          <a href="#" className=" text-_PrimeDark hover:bg-_SecondDark hover:rounded-full">Portfolio</a>
          <a href="#" className=" text-_PrimeDark hover:bg-_SecondDark hover:rounded-full">About</a>
          <a href="#" className=" text-_PrimeDark hover:bg-_SecondDark hover:rounded-full">Contact</a>
          <a href="#" className=" text-_PrimeDark hover:bg-_SecondDark hover:rounded-full">Social</a>
          <button className="py-2 px-6 rounded-full text-white bg-_PrimeDark hover:bg-_SecondDark">Call Me</button>
       </div>
   </div>


    </div>
  )
}

export default NavBarconfig
