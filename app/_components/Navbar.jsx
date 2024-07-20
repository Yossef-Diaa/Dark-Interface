import Image from 'next/image'
import Link from 'next/link'
import { IoMdMenu } from "react-icons/io";
import NavBarconfig from './NavBar-config';

function Navbar() {
 
  return (
    <nav className="mx-auto px-10 ">
      <div className="flex item-center justify-between">
        <div>
        <Image src={"./assets/l1.png"} alt='Logo' width={150} height={50} className=''/>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-slate-900 hover:text-_SecondDark">Portfolio</a>
          <a href="#" className="text-slate-900 hover:text-_SecondDark">About</a>
          <a href="#" className="text-slate-900 hover:text-_SecondDark">Contact</a>
          <a href="#" className="text-slate-900 hover:text-_SecondDark">Social</a>
          <button className="py-2 px-6 rounded-full text-white bg-_PrimeDark hover:bg-_SecondDark">Call Me</button>
        </div>

        <div className=" md:hidden text-3xl ">
        <NavBarconfig/>
        </div>

      </div>
     
    
    </nav>
  )
}

export default Navbar
