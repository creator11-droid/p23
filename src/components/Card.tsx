import icon from "../assets/icons/Icon.svg"
import FaLeft from "../assets/icons/FALeftsvg.svg"
const Card = () => {
  return (
    <div className="bg-(--green-clr) p-7.5 rounded-2xl ">
      <div className="flex text-white font-GT font-extrabold text-base/tight items-center justify-center gap-3 w-fit">
        <figure className="h-12 w-12">
      <img src={icon}/>
        </figure>
        <h2> Vision & Execution</h2>
      </div>
      <div className="font-GT text-sm text-white py-7">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus est magni a officia assumenda ex iure optio minus at?
      </div>
      <div className="flex w-full">
        <button className="text-white bg-transparent w-39.5 flex items-center pt-0.5 pl-2 pr-4 pb-0.5 justify-center font-GT font-bold text-base gap-3.5 border-1 border-white rounded-xl">
          Book a Seat
          <figure>
            <img src={FaLeft}/>
          </figure>
        </button>
        <button className="text-white bg-transparent w-39.5 flex items-center pt-0.5 pl-2 pr-4 pb-0.5 justify-center font-GT font-bold text-base gap-3.5 ">
          Event details
            <figure>
            <img src={FaLeft}/>
          </figure>
        </button>
      </div>

    </div>
  )
}

export default Card