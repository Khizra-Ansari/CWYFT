import React from 'react';
import { useCallback, useState } from 'react';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoDownloadOutline, IoSearchOutline } from 'react-icons/io5';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa6';
import { IoIosArrowDropright } from 'react-icons/io';
import { LuClock8 } from 'react-icons/lu';
import { FaUser } from 'react-icons/fa';
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

const RiskRegistry: React.FC = () => {
  const [checkboxes, setCheckboxes] = useState<CheckboxState>({
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
            <div className="absolute mt-7 left-0 right-0 flex items-center h-20 py-[22px] w-full gap-2 bg-slate-200 rounded-lg">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center w-full ml-4">
                  <label className="custom-checkbox-container text-white cursor-pointer flex mt-2 font-normal text-sm">
                    <input
                      type="checkbox"
                      checked={checkboxes['box2']}
                      onChange={() => handleSingleCheck('box2')}
                    />
                    <span className="custom-checkbox h-4 w-4 bg-gray-300 border-none border-gray-500 "></span>
                  </label>
                  <IoIosArrowDropright className="mt-2" />
                  <div className="flex flex-col gap-[4px] mt-3 ml-2 w-full">
                    <span className=" font-semibold pb-1">
                      Unauthorised System Access
                    </span>
                    <div className="flex gap-[6px]">
                      <div className="h-5 w-16 rounded-lg bg-red-400 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-4
                        </span>
                      </div>
                      <div className="h-5 w-16 rounded-lg bg-teal-200 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-5
                        </span>
                      </div>
                      <div className="h-5 w-16 rounded-lg bg-red-400 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-10
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8 ml-22">
                  <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400">
                    15
                  </div>
                  <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500">
                    -
                  </div>
                  <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <span>Transfer</span>
                  </div>
                  <div className="text-green-500 cursor-pointer">
                    <FaUser />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-35 mt-3 pb-10 left-0 right-0 flex items-center h-20 py-[22px] w-full gap-2 bg-slate-200 rounded-lg">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center w-full ml-4">
                  <label className="custom-checkbox-container text-white cursor-pointer flex mt-2 font-normal text-sm">
                    <input
                      type="checkbox"
                      checked={checkboxes['box2']}
                      onChange={() => handleSingleCheck('box2')}
                    />
                    <span className="custom-checkbox h-4 w-4 bg-gray-300 border-none border-gray-500 "></span>
                  </label>
                  <IoIosArrowDropright className="mt-2" />
                  <div className="flex flex-col gap-[4px] mt-3 ml-2 w-full">
                    <span className=" font-semibold pb-1">
                      Weak Authentication
                    </span>
                    <div className="flex gap-[6px]">
                      <div className="h-5 w-16 rounded-lg bg-red-400 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-4
                        </span>
                      </div>
                      <div className="h-5 w-16 rounded-lg bg-teal-200 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-5
                        </span>
                      </div>
                      <div className="h-5 w-16 rounded-lg bg-red-400 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-10
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8 ml-24">
                  <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400">
                    15
                  </div>
                  <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500">
                    -
                  </div>
                  <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <span>Transfer</span>
                  </div>
                  <div className="text-green-500 cursor-pointer">
                    <FaUser />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-60 mt-2 left-0 right-0 flex items-center h-20 py-[22px] w-full gap-2 bg-slate-200 rounded-lg">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center w-full ml-4">
                  <label className="custom-checkbox-container text-white cursor-pointer flex mt-2 font-normal text-sm">
                    <input
                      type="checkbox"
                      checked={checkboxes['box2']}
                      onChange={() => handleSingleCheck('box2')}
                    />
                    <span className="custom-checkbox h-4 w-4 bg-gray-300 border-none border-gray-500 "></span>
                  </label>
                  <IoIosArrowDropright className="mt-2" />
                  <div className="flex flex-col gap-[4px] mt-3 ml-2 w-full">
                    <span className=" font-semibold pb-1">
                      Critical Svstem Dependencies
                    </span>
                    <div className="flex gap-[6px]">
                      <div className="h-5 w-16 rounded-lg bg-red-400 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-4
                        </span>
                      </div>
                      <div className="h-5 w-16 rounded-lg bg-teal-200 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-5
                        </span>
                      </div>
                      <div className="h-5 w-16 rounded-lg bg-red-400 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-10
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8 ml-20">
                  <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400">
                    15
                  </div>
                  <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500">
                    -
                  </div>
                  <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <span>Accept</span>
                  </div>
                  <div className="text-green-500 cursor-pointer">
                    <FaUser />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-80 mt-6 left-0 right-0 flex items-center h-20 py-[22px] w-full gap-2 bg-slate-200 rounded-lg">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center w-full ml-4">
                  <label className="custom-checkbox-container text-white cursor-pointer flex mt-2 font-normal text-sm">
                    <input
                      type="checkbox"
                      checked={checkboxes['box2']}
                      onChange={() => handleSingleCheck('box2')}
                    />
                    <span className="custom-checkbox h-4 w-4 bg-gray-300 border-none border-gray-500 "></span>
                  </label>
                  <IoIosArrowDropright className="mt-2" />
                  <div className="flex flex-col gap-[4px] mt-3 ml-2 w-full">
                    <span className=" font-semibold pb-1">
                      Exposure - Zero-day Attack
                    </span>
                    <div className="flex gap-[6px]">
                      <div className="h-5 w-16 rounded-lg bg-red-400 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-4
                        </span>
                      </div>
                      <div className="h-5 w-16 rounded-lg bg-teal-200 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-5
                        </span>
                      </div>
                      <div className="h-5 w-16 rounded-lg bg-red-400 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-10
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8 ml-24">
                  <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400">
                    15
                  </div>
                  <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500">
                    -
                  </div>
                  <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <span>Mitigate</span>
                  </div>
                  <div className="text-green-500 cursor-pointer">
                    <FaUser />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-90 mt-20 left-0 right-0 flex items-center  h-20 py-[22px] w-full gap-2 bg-slate-200 rounded-lg">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center w-full ml-4">
                  <label className="custom-checkbox-container text-white cursor-pointer flex mt-2 font-normal text-sm">
                    <input
                      type="checkbox"
                      checked={checkboxes['box2']}
                      onChange={() => handleSingleCheck('box2')}
                    />
                    <span className="custom-checkbox h-4 w-4 bg-gray-300 border-none border-gray-500 "></span>
                  </label>
                  <IoIosArrowDropright className="mt-2" />
                  <div className="flex flex-col gap-[4px] mt-3 ml-2 w-full">
                    <span className=" font-semibold pb-1">
                      Physical Security - Theft
                    </span>
                    <div className="flex gap-[6px]">
                      <div className="h-5 w-16 rounded-lg bg-red-400 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-4
                        </span>
                      </div>
                      <div className="h-5 w-16 rounded-lg bg-teal-200 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-5
                        </span>
                      </div>
                      <div className="h-5 w-16 rounded-lg bg-red-400 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-10
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8 ml-24">
                  <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400">
                    15
                  </div>
                  <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500">
                    -
                  </div>
                  <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <span>Transfer</span>
                  </div>
                  <div className="text-green-500 cursor-pointer">
                    <FaUser />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-100 mt-34 left-0 right-0 flex items-center h-20 py-[22px] w-full gap-2 bg-slate-200 rounded-lg">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center w-full ml-4">
                  <label className="custom-checkbox-container text-white cursor-pointer flex mt-2 font-normal text-sm">
                    <input
                      type="checkbox"
                      checked={checkboxes['box2']}
                      onChange={() => handleSingleCheck('box2')}
                    />
                    <span className="custom-checkbox h-4 w-4 bg-gray-300 border-none border-gray-500 "></span>
                  </label>
                  <IoIosArrowDropright className="mt-2" />
                  <div className="flex flex-col gap-[4px] mt-3 ml-2 w-full">
                    <span className=" font-semibold pb-1">
                      Risky Software Supply Chain
                    </span>
                    <div className="flex gap-[6px]">
                      <div className="h-5 w-16 rounded-lg bg-red-400 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-4
                        </span>
                      </div>
                      <div className="h-5 w-16 rounded-lg bg-teal-200 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-5
                        </span>
                      </div>
                      <div className="h-5 w-16 rounded-lg bg-red-400 relative">
                        <span className="text-[10px] absolute left-4 top-[2px]">
                          CyD-10
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8 ml-22">
                  <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400">
                    15
                  </div>
                  <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500">
                    -
                  </div>
                  <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <span>Transfer</span>
                  </div>
                  <div className="text-green-500 cursor-pointer">
                    <FaUser />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-100 right-0 mt-60 w-full flex items-center justify-between">
              {/* Left-aligned "8/page" */}
              <div className="h-3 w-5 ml-10 rounded-lg text-gray-400 bg-white text-[12px] text-center flex items-center justify-center cursor-pointer">
                <span>8/page</span>
              </div>

              {/* Right-aligned pagination controls */}
              <div className="flex gap-1 mr-8">
                <div className="h-3 w-5 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer">
                  <FaLessThan className="ml-1" />
                  <FaLessThan className="mr-[6px]" />
                </div>
                <div className="h-3 w-5 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer">
                  <FaLessThan />
                </div>
                <div className="h-3 w-5 rounded-md bg-white cursor-pointer text-[10px] flex items-center justify-center bg-gray-900">
                  1
                </div>
                <div className="h-3 w-5 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer">
                  2
                </div>
                <div className="h-3 w-5 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer">
                  3
                </div>
                <div className="h-3 w-5 rounded-md bg-white text-[22px] flex items-center justify-center cursor-pointer">
                  ...
                </div>
                <div className="h-3 w-5 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer">
                  10
                </div>
                <div className="h-3 w-5 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer">
                  <FaGreaterThan />
                </div>
                <div className="h-3 w-5 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer">
                  <FaGreaterThan className="ml-1" />
                  <FaGreaterThan className="mr-[6px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskRegistry;
