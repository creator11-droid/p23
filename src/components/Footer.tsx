import Logo from "../assets/icons/Logo.svg"
import FaLeft from "../assets/icons/FaleftGreen.svg"
import Ig from "../assets/icons/Insta.svg"
import Fb from "../assets/icons/FB.svg"
import In from "../assets/icons/Linkedin.svg"
import Yt from "../assets/icons/Youtube.svg"
const Footer = () => {
  return (
    <div className="flex flex-col gap-6.5 bg-(--green-clr) pt-16.25 pl-8 pr-12.25 pb-10.75 mt-17.25 lg:flex-row lg:justify-evenly lg:mt-4">
      <div className="flex justify-between">
        <div>
          <figure>
      <img src={Logo}></img>
          </figure>
          <p className="font-GT text-white text-base font-normal pt-3.25 w-45.75">
            P23 Africa LTD is registered in the United Kingdom. Company No: 15246700
          </p>
        </div>
        <div className="flex flex-col gap-10 font-GT text-white font-medium w-26 lg:hidden ">
          <h2>Quick Links</h2>
          <div className="">
            <p className="whitespace-nowrap">Who We Are</p>
            <p className="whitespace-nowrap"> What We Do</p>
            <p className="whitespace-nowrap"> Our Events</p>
            <p className="whitespace-nowrap"> Resource Hub</p>
            <p className="whitespace-nowrap">Let's Collaborate</p>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col gap-6.75 lg:hidden">
        <div className="w-59.5 flex flex-col gap-6">
          <h2 className="font-GT text-white font-normal text-lg"> Subscribe to get updates</h2>
        <div className="relative w-full max-w-sm h-14 ">
          <input placeholder="Enter your email" className="w-full pr-10 pl-4 py-2 h-full rounded bg-white" />
          <div className="absolute right-0 top-0 ">
              <div className="bg-[#CCED60] h-14 w-14 grid place-items-center" >
            <img src={FaLeft} />
          </div>
          </div>
        </div>
        
        
          
        </div>
        <div className="flex flex-col gap-4.25">
          <h1 className="font-GT text-white font-normal text-lg">Contact us</h1>
          <div className="flex gap-4">
        <img src={In} alt="" /><img src={Fb} alt="" /><img src={Ig} alt="" /><img src={Yt} alt="" />
          </div>
        </div>
      <div className="w-full  px-4 py-2">
  <div className="flex flex-col md:flex-row justify-end items-center text-white font-Georgia text-sm">
    <p className="whitespace-nowrap text-right w-full md:w-auto">
      &copy; P23 Africa 2025
    </p>

    <ul className="hidden md:flex gap-4 text-sm pl-1.5">
      <li className="cursor-pointer hover:underline"> Privacy Policy</li>
      <li className="cursor-pointer hover:underline">Terms & Conditions</li>
    </ul>
  </div>
</div>
      </div>
      <div className="hidden lg:flex flex-col">
        <h1 className="font-GT text-xl font-normal text-white">Who We Are</h1>
        <p className="font-GT text-base font-normal text-white">About Us</p>
        <p className="font-GT text-base font-normal text-white"> Business Referral Network</p>
        <p className="font-GT text-base font-normal text-white"> University Partnerships</p>
        <p className="font-GT text-base font-normal text-white"> The 54th Pitch</p>
      </div>
       <div className="hidden lg:flex flex-col">
        <h1 className="font-GT text-xl font-normal text-white">What We Do</h1>
        <p className="font-GT text-base font-normal text-white">Business Strategy</p>
        <p className="font-GT text-base font-normal text-white">Market Entry</p>
        <p className="font-GT text-base font-normal text-white">Business Research</p>
        <p className="font-GT text-base font-normal text-white">Sales</p>
        <p className="font-GT text-base font-normal text-white">Marketing</p>
        <p className="font-GT text-base font-normal text-white">Business Audit</p>
      </div>
       <div className="hidden lg:flex flex-col gap-25">
        <div className="flex gap-13.75">
          <div className="flex flex-col gap-4.25">
          <h1 className="font-GT text-white font-normal text-lg">Contact us</h1>
          <div className="flex  gap-4">
        <img src={In} alt="" /><img src={Fb} alt="" /><img src={Ig} alt="" /><img src={Yt} alt="" />
          </div>
        </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-GT text-white font-normal text-lg"> Subscribe to get updates</h2>
            <input className="h-15.25 w-full border border-[#CCED6099] rounded-xl text-white" placeholder="Enter your Email"/>
            <button className="bg-[#CCED6099] rounded-xl flex gap-6.25 justify-between items-center p-4.25">
              <span className="font-GT text-(--green-clr) font-normal text-base">Subscribe</span>
              <img src={FaLeft} />
            </button>
          </div>
        </div>
      <div className="flex :flex-row justify-end items-center text-white font-Georgia text-sm">
    <p className="whitespace-nowrap text-right w-full md:w-auto">
      &copy; P23 Africa 2025
    </p>

    <ul className="hidden md:flex gap-4 text-sm pl-1.5">
      <li className="cursor-pointer hover:underline"> Privacy Policy</li>
      <li className="cursor-pointer hover:underline">Terms & Conditions</li>
    </ul>
  </div>
      </div>
      
    </div>
  )
}

export default Footer