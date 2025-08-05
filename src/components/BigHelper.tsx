
import FaLeft from "../assets/icons/FaleftGreen.svg"
import { data } from "../data/data"
import InfoCard from "./InfoCard"


const BigHelper = () => {
  return (
    <div className='hidden md:grid h-196 w-full bg-events py-21.5 px-29  grid-cols-3 grid-rows-2 gap-y-14 gap-x-9'>
      <div className='bg-transparent h-70 pb-12 w-98.75 flex flex-col'>
      <div className='px-12 pt-8'>
        <h2 className='text-white font-GT font-extrabold text-2xl'>Upcoming Event for the year</h2>
      <p className='font-GT font-normal text-xl text-white '>Explore upcoming events tailored to equip, connect, and empower businesses across Africa and beyond.</p>
      </div>
    
      <button className='text-(--green-clr) bg-white  rounded-2xl flex w-63.25 h-14 ml-12 mt-7 p-2.5 items-center justify-between '>
        See all events 
        <span> <img src={ FaLeft} /></span>
      </button>
      </div>
    {data.map((item, index) => (
  <InfoCard key={index} data={item} />
))}
    </div>
  )
}

export default BigHelper