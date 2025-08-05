import Faleft from '../assets/icons/FALeftGreen.svg'
const Events = () => {
  return (
    <div className='bg-events h-fit pb-12 w-full flex flex-col'>
      <div className='px-12 pt-8'>
        <h2 className='text-white font-GT font-extrabold text-2xl'>Upcoming Event for the year</h2>
      <p className='font-GT font-normal text-xl text-white pt-4'>Explore upcoming events tailored to equip, connect, and empower businesses across Africa and beyond.</p>
      </div>
    
      <button className='text-(--green-clr) bg-white  rounded-2xl flex w-66.25 h-14 ml-12 mt-7 p-2.5 items-center justify-between '>
        See all events 
        <span> <img src={ Faleft} /></span>
      </button>
    </div>
  )
}

export default Events