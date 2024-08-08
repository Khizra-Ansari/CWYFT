import { MdOutlineFileDownload } from 'react-icons/md';

const RiskAssessmentCard = () => {
  return (
    <div className="h-[150px] rounded-md w-[290px] bg-white  dark:bg-boxdark shadow-md">
      <div className="flex justify-between items-center p-4">
        <h2 className="font-bold text-[17px]">Risk Assessment</h2>
        <MdOutlineFileDownload className="text-[18px] text-gray-600 cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300" />
      </div>
      <div className="flex items-center gap-3 p-4">
        <div>
          <span className="text-sm font-bold">Scored Risks</span>
          <p className="text-blue-700 text-2xl font-semibold ml-2">43</p>
        </div>
        <div>
          <span className="text-sm font-bold pl-9">Unscored Risks</span>
          <p className="text-blue-700 text-2xl font-semibold ml-2 pl-15">153</p>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessmentCard;
