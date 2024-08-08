import React from 'react';
import { useCallback, useState } from 'react';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoDownloadOutline, IoSearchOutline } from 'react-icons/io5';
import {
  faTriangleExclamation,
  faClock,
  faCubes,
} from '@fortawesome/free-solid-svg-icons';
type CheckboxName =
  | 'selectAll'
  | 'box1'
  | 'box2'
  | 'box3'
  | 'box4'
  | 'box5'
  | 'box6'
  | 'box7'
  | 'box8';

type CheckboxState = {
  [key in CheckboxName]: boolean;
};

const RiskDashboard: React.FC = () => {
  const [checkboxes, setCheckboxes] = useState({
    selectAll: false,
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
    box7: false,
    box8: false,
  });

  const handleSelectAll = useCallback(() => {
    setCheckboxes((prev) => {
      const newSelectAllState = !prev.selectAll;
      return Object.keys(prev).reduce((acc, key) => {
        acc[key as CheckboxName] = newSelectAllState;
        return acc;
      }, {} as CheckboxState);
    });
  }, []);
  const handleSingleCheck = useCallback((boxName: keyof typeof checkboxes) => {
    setCheckboxes((prev) => {
      const newState = { ...prev, [boxName]: !prev[boxName] };
      const allChecked = Object.entries(newState)
        .filter(([key]) => key !== 'selectAll')
        .every(([, value]) => value);
      return { ...newState, selectAll: allChecked };
    });
  }, []);

  return (
    <>
      <div>
        <h1 className="font-bold text-xl">Risk Management</h1>
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="flex space-x-4">
          <div className="flex items-center bg-gray-200 rounded-md px-3 py-2 bg-white mt-4 dark:bg-boxdark">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="w-4 h-4 mr-2"
            />
            <span className="font-medium mr-2">Breach Risk</span>
            <span className="font-bold">USD 150M</span>
          </div>
          <div className="flex items-center bg-gray-200 rounded-md px-3 py-2 bg-white mt-4 dark:bg-boxdark">
            <FontAwesomeIcon icon={faClock} className="w-6 h-4 mr-2" />
            <span className="font-medium mr-2">Probability</span>
            <span className="font-bold">67%</span>
          </div>
          <div className="flex items-center bg-gray-200 rounded-md px-3 py-2 bg-white mt-4 dark:bg-boxdark">
            <FontAwesomeIcon icon={faCubes} className="w-4 h-4 mr-2" />
            <span className="font-medium mr-2">Analysed Assets</span>
            <span className="font-bold">67k</span>
          </div>
        </div>
        <div className="mt-4">
          <button className=" bg-white dark:bg-boxdark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-md font-medium w-30 px-4 py-2">
            New Risk
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4">
        {/* First container - col-span-3 */}
        <div className="col-span-12 lg:col-span-3">
          <div className="col-span-12 rounded-sm border border-stroke bg-white dark:bg-boxdark px-4 sm:px-6 lg:px-8 pt-7.5 pb-5 shadow-default dark:border-strokedark h-[500px] sm:h-[600px] lg:h-[700px] relative">
            <div className="flex items-center col-span-12 h-[42px] w-full bg-black rounded-lg cursor-pointer absolute top-0 left-0 right-0">
              <HiOutlineAdjustmentsVertical className="text-white ml-2" />
              <span className="ml-10 text-white font-[300] text-[16px] text-opacity-90">
                All Risks
              </span>
            </div>
            <div className="flex flex-col gap-3 mt-4 items-start">
              <h1 className="text-[17px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Treatment
              </h1>
              <span className="text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Accepted
              </span>
              <span className="text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Mitigate
              </span>
              <span className="text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Avoided
              </span>
              <span className="text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Transferred
              </span>
              <span className="text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Needs Treatment
              </span>
              <div className="border w-32 border-gray-300 mr-2"></div>
            </div>
            <div className="flex flex-col gap-2 mt-2 items-start">
              <h1 className="text-[17px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Assessment
              </h1>
              <span className="text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Scored
              </span>
              <span className="text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Not Scored
              </span>
              <div className="border w-32 border-gray-300 mr-2"></div>
            </div>
            <div className="flex flex-col gap-2 mt-2 items-start">
              <h1 className="text-[17px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Category
              </h1>
              <span className="text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Assessment
              </span>
              <span className="text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Audits
              </span>
              <span className="text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Access Control
              </span>
              <span className="text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Asset Management
              </span>
              <span className="text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Governance
              </span>
              <span className="text-[13px] font-medium cursor-pointer hover:text-green-500 hover:transition-all hover:duration-300">
                Physical Access
              </span>
            </div>
          </div>
        </div>

        {/* Second container - col-span-9 */}
        <div className="col-span-12 lg:col-span-9">
          <div className="col-span-12 rounded-sm border border-stroke bg-white dark:bg-boxdark px-4 sm:px-6 lg:px-8 pt-7.5 pb-5 shadow-default dark:border-strokedark h-[500px] sm:h-[600px] lg:h-[700px] relative">
            <div className="absolute top-0 left-0 right-0 flex items-center h-10 py-[22px] w-full gap-2 bg-black rounded-lg">
              <div className="flex items-center ml-4">
                <label className="custom-checkbox-container text-white cursor-pointer flex items-center font-normal text-sm">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    name="selectAll"
                  />
                  <span className="custom-checkbox h-4 w-4 bg-black border border-black "></span>
                  <span className="">Select All</span>
                </label>
              </div>
              <div className="flex items-center gap-2 ml-auto mr-4">
                <div className="border border-gray-400 h-7 bg-gray-800 rounded-md w-[300px] flex items-center gap-2 text-white">
                  <IoSearchOutline className="text-xl ml-2" />
                  <input
                    type="text"
                    className="w-full outline-none px-4 border-none bg-inherit h-4 text-[12px] font-light"
                    placeholder="Search by Risk name or code"
                  />
                </div>
                <div className="text-white text-opacity-90 cursor-pointer hover:text-green-400">
                  <IoDownloadOutline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskDashboard;
