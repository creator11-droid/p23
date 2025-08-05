import Card from "./Card"
import Events from "./Events"

const Helper = () => {
  return (
    <div className="w-full md:hidden">
      <Events />
      <div className="bg-hero w-full h-[1664px] font-GT font-bold text-2xl">
        <div className="flex w-full pt-16.25 h-12">
          <button className="bg-(--green-clr) w-1/2 text-white  h-12">
        All Events
          </button>
          <button className="bg-transparent w-1/2 text-(--green-clr) h-12">
            BRN Only
          </button>
        </div>
        
        <div className="pt-26.25 px-5 flex flex-col gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
           <Card/>
        </div>
      </div>
    </div>
  )
}

export default Helper