import Logo from "../assets/icons/Logo.svg"
import Menu from "../assets/icons/homeIcon.svg"
import LinkedIn from "../assets/icons/Linkedin1.svg"
import Fb from "../assets/icons/FB1.svg"
import Ig from "../assets/icons/Insta1.svg"
import YT from "../assets/icons/Youtube1.svg"

const Nav = () => {
  return (
    <div className="w-full flex justify-between items-center bg-(--green-clr) h-21.5 px-13 pt-6 pb-2.75 xl:h-30.75 xl:py-4.75 xl:px-2.5 ">
      <div>
        <img src={Logo}/>
      </div>
      <div className="hidden xl:flex text-white font-GT font-normal">
        <p className="w-30.75 h-4.5 justify-self-start">Who we are</p>
        <p className="w-30.75 h-4.5 justify-self-start">What we do</p>
        <p className="w-30.75 h-4.5 justify-self-start">Our Events </p>
        <p className="w-30.75 h-4.5 justify-self-start">Recourse Hub</p>
        <p className="w-30.75 h-4.5 justify-self-start">Let's Collaborate</p>
      </div>
      <div className="hidden xl:flex gap-10.25 justify-center items-center">
        <div>
          <button className="text-white border-1 rounded-xl border-white p-0.5 w-28 h-12 font-GT font-normal leading-6"> Subscribe</button>
        </div>
        <div className="flex gap-0.5 h-6 w-32">
          <img src={LinkedIn} alt="" /><img src={Fb} alt="" /><img src={Ig} alt="" /><img src={YT} alt="" />
        </div>
        
        
      </div>
      <div className="xl:hidden">
        <img src={Menu}/>
      </div>
    </div>
  )
}

export default Nav