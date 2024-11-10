import { useState,useEffect } from "react"
import { assets } from "../assets/assets"

const Navbar = () => {
  const [open,setOpen] = useState(false);
  useEffect(()=>{
    if(open){
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "auto";
    }
    return()=>{
      document.body.style.overflow = "auto";
    }
  },[open]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>
        <img onClick={()=>setOpen(true)} src={assets.menu_icon} className="md:hidden w-7 cursor-pointer" alt="menuicon" />
      </div>
      {/* Mobile Menu */}

      <div className={`md:hidden ${open ? "fixed w-full" : "h-0 w-0" } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`} >
        <div className="flex justify-end p-6">
          <img onClick={()=>setOpen(false)}  src={assets.cross_icon} className="w-6 cursor-pointer" alt="closeicon" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a onClick={()=>setOpen(false)} className="px-4 py-2 rounded-full inline-block" href="#Header">Home</a>
          <a onClick={()=>setOpen(false)} className="px-4 py-2 rounded-full inline-block" href="#About">About</a>
          <a onClick={()=>setOpen(false)} className="px-4 py-2 rounded-full inline-block" href="#Projects">Projects</a>
          <a onClick={()=>setOpen(false)} className="px-4 py-2 rounded-full inline-block" href="#Testimonials">Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
