import  { useState, type FC } from 'react'
import { type card } from '../data/data';
import IconGreen from "../assets/icons/IconGreensvg.svg"
import FaLeft from "../assets/icons/FALeftsvg.svg"
import FaLeftGreen from "../assets/icons/FaleftGreen.svg"

interface InfoCardProps {
  data: card;
}
const InfoCard: FC<InfoCardProps> = ({ data }) => {
  const[isHovered, setIsHovered] = useState(false)
  return (
    <div className='group w-98.75 h-77 flex flex-col bg-white text-(--green-clr) rounded-xl p-7.5 hover:text-white hover:bg-(--green-clr) transition-transform duration-300 hover:-rotate-3 hover:translate-x-1 hover:translate-y-1'
     onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    > 
      <div className='flex gap-3 items-center'>
        <img src={isHovered? data.image: IconGreen} />
        <p className='font-GT font-bold text-2xl align-middle'>
          {
          isHovered? 'Vision & Execution' : 'Event Name'
        } 
        </p>
       
      </div>
      <div className='py-3'>
        <p className='font-GT font-light text-base'>{data.word}</p>
      </div>
      <div className='flex'>
        <button className='flex pt-0.5 pl-4 pr-2 pb-0.5 border border-(--green-clr) rounded-xl justify-between cursor-pointer  w-38.25 group-hover:border-white'>
          <p className='whitespace-nowrap'>Book a Seat</p>
          <img src={isHovered? FaLeft: FaLeftGreen} className='w-4'/>
         </button>
        <button className='flex pt-0.5 pl-4 pr-2 pb-0.5 justify-between w-38.25 cursor-pointer '>
          <p className='whitespace-nowrap'>Event details</p>
            <img src={isHovered? FaLeft: FaLeftGreen} className='w-4'/>
        </button>
      </div>

    </div>
  )
}

export default InfoCard