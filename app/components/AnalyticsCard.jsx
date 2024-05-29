const AnalyticsCard = ({title, icon, subtitles, stats, totalStats, completed, color}) => {

  console.log("this is color", color)

  return (
    <div className="w-[340px] h-[153px] shadow-lg rounded-lg flex flex-col justify-center items-center gap-6 py-2 overflow-hidden bg-white">
      <div className="flex-shrink-0 w-[292px] h-[25px] flex justify-start items-center gap-3 px-4">
        <img src={icon} id="0:354" className="flex-shrink-0 w-[22px] h-[23px]" />
        <div className="flex-grow w-[222px] h-[25px] text-gray-700 font-inter text-[18px] font-semibold">
          {title}
        </div>
        <img src="/img/send.png" id="0:363" className="flex-shrink-0 w-[24px] h-[25px]"></img>
      </div>
      <div className="flex-shrink-0 w-[292px] h-[58px] flex flex-col justify-start items-start gap-1 px-4">
        <div className="flex-shrink-0  flex justify-start items-center gap-2">
          <div className="flex-shrink-0 text-gray-900 font-inter text-[16px] font-medium">
            {stats}
          </div>
          <div className="flex-grow  flex justify-start items-end gap-2 pb-1">
            <div className="flex-shrink-0 text-gray-900 font-medium text-[12px]  tracking-[0.14px]">
              {subtitles}
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-[240px]  flex justify-start items-center gap-2">
          <div className="flex-grow w-[190px] h-[8px] flex justify-start items-center gap-2">
            <div className="flex-grow w-[190px] h-[8px] rounded-full flex flex-col justify-center items-start bg-gray-100">
              <div className={`flex-shrink-0 w-[138px] h-[8px] rounded-full `}  style={{ backgroundColor: color }}></div>
            </div>
          </div>
          <div className="flex-shrink-0 w-[41px]  text-gray-900 font-inter text-[12px]  font-normal tracking-[0.38px] text-right">
            {completed}/{totalStats}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;

