import MIWM from "../assets/icons/MIWM.svg"
import MobilePat from "../assets/icons/MobilePat.svg"
import MobilePat1 from "../assets/icons/MobilePat1.svg"
import BigIcon from "../assets/icons/BigIcon.svg"
import MIW from "../assets/icons/MIW.svg"

const Hero = () => {
  return (
    <div className='bg-hero w-full p-5.5  md:flex md:w-full md:h-220.75 md:gap-19'>
      <div className="hidden md:block w-1/2 h-171.5 md:-motion-translate-x-in-150 md:motion-duration-1000">
        <img src={BigIcon } />
      </div>
      <div className=" w-full h-full flex flex-col gap-6 md:w-1/2 ">
        <h1 className="w-full font-Montserrat text-(--green-clr) md:-motion-translate-y-in-150 md:motion-duration-1000"> <span className="font-extrabold text-4xl md:text-[65px]">Gaining Knowledge</span> <span className="font-light text-4xl md:text-[65px]">through Connections</span> </h1>
      <div className=" h-109.25 md:pt-3.5 md:motion-translate-x-in-150 md:motion-duration-1000">
          <img src={MIWM} className="md:hidden" />
          <img src={MIW} className="hidden md:block w-full h-124"/>
      </div>
        <div className="flex  w-full  md:hidden">
          <figure className="w-1/2 h-full">
            <img src={MobilePat}  />
          </figure>
          <figure className="w-1/2 h-full">
            <img src={ MobilePat1} />
          </figure>
        
        
      </div>
      </div>
      
    </div>
  )
}

export default Hero