
const DailyActivityCard = ({title, text, img}) => {
  return (
    <div className="shadow-md rounded-lg  bg-white cursor-pointer">
      <div className="flex-shrink-0 w-full  overflow-hidden bg-purple-200">
        <img src={img} className="w-full h-[200px] hover:opacity-90" />
      </div>
      <div className="flex-shrink-0 w-full p-4">
        <div className="flex-shrink-0 w-full flex flex-col justify-start items-start  ">
          <div className="text-neutral-900 whitespace-nowrap font-inter font-semibold text-lg leading-9">
            {title}
          </div>
          <div className="flex-shrink-0 w-full  text-neutral-600 font-inter font-normal text-base">
            {text}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyActivityCard
