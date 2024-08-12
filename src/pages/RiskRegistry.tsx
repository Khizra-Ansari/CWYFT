import React from 'react';
import { useCallback, useState } from 'react';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoDownloadOutline, IoSearchOutline } from 'react-icons/io5';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa6';
import { IoIosArrowDropright } from 'react-icons/io';
import { LuClock8 } from 'react-icons/lu';
import { Link } from 'react-router-dom';
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
    <div className="w-full  mx-auto ">
      <div>
        <h1 className="font-bold text-xl">Risk Management</h1>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-between mt-4">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 sm:space-x-4 w-full sm:w-auto">
          <Link
            to="/"
            className="px-4 py-2 bg-black text-white dark:bg-slate-300 dark:text-black rounded-md text-sm w-full h-12 sm:w-auto sm:h-auto hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            Risk Register
          </Link>
          <Link
            to="/Risk/Dashboard"
            className="px-4 py-2 bg-white dark:bg-boxdark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-md text-sm w-full h-12 sm:w-auto sm:h-auto"
          >
            Risk Dashboard
          </Link>
          <Link
            to="/Risk/Map"
            className="px-4 py-2 bg-white dark:bg-boxdark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-md text-sm w-full h-12 sm:w-auto sm:h-auto"
          >
            Risk Map
          </Link>
        </div>
        <Link
          to="/new-risk"
          className="px-4 py-2 bg-white dark:bg-boxdark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-md text-sm w-full h-12 sm:w-auto sm:h-auto mt-2 sm:mt-0"
        >
          New Risk
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-center w-full mt-4">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <div className="flex items-center bg-gray-200 rounded-md px-3 py-2 bg-white dark:bg-boxdark w-full h-12 sm:w-auto sm:h-auto">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="w-4 h-4 mr-2"
            />
            <span className="font-medium mr-2">Breach Risk</span>
            <span className="font-bold">USD 150M</span>
          </div>
          <div className="flex items-center bg-gray-200 rounded-md px-3 py-2 bg-white dark:bg-boxdark w-full h-12 sm:w-auto sm:h-auto">
            <FontAwesomeIcon icon={faClock} className="w-6 h-4 mr-2" />
            <span className="font-medium mr-2">Probability</span>
            <span className="font-bold">67%</span>
          </div>
          <div className="flex items-center bg-gray-200 rounded-md px-3 py-2 bg-white dark:bg-boxdark w-full h-12 sm:w-auto sm:h-auto">
            <FontAwesomeIcon icon={faCubes} className="w-4 h-4 mr-2" />
            <span className="font-medium mr-2">Analysed Assets</span>
            <span className="font-bold">67k</span>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* First container - col-span-3 */}
        <div className="col-span-1 lg:col-span-3">
          <div className="rounded-sm border border-stroke bg-white dark:bg-boxdark px-4 sm:px-6 lg:px-8 pt-7.5 pb-5 shadow-default dark:border-strokedark h-[500px] sm:h-[600px] lg:h-[700px] relative overflow-y-auto">
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
              <div className="border w-32 border-gray-300 mr-2"></div>
            </div>
          </div>
        </div>

        {/* Second container - col-span-9 */}
        <div className="col-span-1 lg:col-span-9">
          <div className="rounded-sm border border-stroke bg-white dark:bg-boxdark px-4 sm:px-6 lg:px-8 pt-4 pb-4 shadow-default dark:border-strokedark h-[500px] sm:h-[600px] lg:h-[700px] relative overflow-y-auto">
            <div className="flex items-center col-span-12 h-[42px] w-full bg-black rounded-lg cursor-pointer absolute top-0 left-0 right-0">
              <div className="flex items-center ml-2 w-full">
                <label className="custom-checkbox-container text-white cursor-pointer flex items-center font-normal text-sm sm:text-base lg:text-lg">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    name="selectAll"
                    className="mr-2 ml-2"
                  />
                  <span className="custom-checkbox h-2  bg-black border border-none"></span>
                  <span className="text-sm sm:text-base lg:text-lg font-light text-opacity-90">
                    Select All
                  </span>
                </label>
              </div>
              <div className="flex items-center gap-2 ml-auto mr-4">
                <div className="border border-gray-400 h-6 bg-gray-800 rounded-md w-full sm:w-[200px] lg:w-[250px] flex items-center gap-2 text-white">
                  <IoSearchOutline className="text-sm sm:text-base lg:text-lg ml-2" />
                  <input
                    type="text"
                    className="w-full outline-none px-3 border-none bg-inherit h-8 text-xs sm:text-sm lg:text-base font-light"
                    placeholder="Search by Risk name or code"
                  />
                </div>
                <div className="text-white text-opacity-90 cursor-pointer hover:text-green-400">
                  <IoDownloadOutline className="text-base sm:text-lg lg:text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-slate-200 dark:bg-slate-500 dark:text-white rounded-lg p-4 mt-10">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
                  <label className="custom-checkbox-container cursor-pointer flex items-center font-normal text-sm">
                    <input
                      type="checkbox"
                      checked={checkboxes['box2']}
                      onChange={() => handleSingleCheck('box2')}
                    />
                    <span className="custom-checkbox h-4 w-4 bg-gray-300 border-none border-gray-500"></span>
                  </label>
                  <IoIosArrowDropright className="ml-2" />
                  <div className="ml-2">
                    <span className="font-semibold">
                      Unauthorised System Access
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-[10px] bg-red-400 px-2 py-1 rounded">
                        CyD-4
                      </span>
                      <span className="text-[10px] bg-teal-200 px-2 py-1 rounded">
                        CyD-5
                      </span>
                      <span className="text-[10px] bg-red-400 px-2 py-1 rounded">
                        CyD-10
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-2 sm:mt-0 w-full sm:w-auto justify-start sm:justify-end ml-15 sm:ml-0">
                  <div className="border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400 flex items-center justify-center">
                    15
                  </div>
                  <div className="border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500 flex items-center justify-center">
                    -
                  </div>
                  <div className="flex items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400">
                    <div className="h-3 w-3 rounded-full bg-red-400 mr-1"></div>
                    <span>Transfer</span>
                  </div>
                  <div className="text-green-500 cursor-pointer">
                    <FaUser />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 dark:bg-slate-500 dark:text-white rounded-lg p-4 mt-4">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
                  <label className="custom-checkbox-container cursor-pointer flex items-center font-normal text-sm">
                    <input
                      type="checkbox"
                      checked={checkboxes['box3']}
                      onChange={() => handleSingleCheck('box3')}
                    />
                    <span className="custom-checkbox h-4 w-4 bg-gray-300 border-none border-gray-500"></span>
                  </label>
                  <IoIosArrowDropright className="ml-2" />
                  <div className="ml-2">
                    <span className="font-semibold">Weak Authentication</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-[10px] bg-red-400 px-2 py-1 rounded">
                        CyD-4
                      </span>
                      <span className="text-[10px] bg-teal-200 px-2 py-1 rounded">
                        CyD-5
                      </span>
                      <span className="text-[10px] bg-red-400 px-2 py-1 rounded">
                        CyD-10
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-2 sm:mt-0 w-full sm:w-auto justify-start sm:justify-end ml-15 sm:ml-0">
                  <div className="border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400 flex items-center justify-center">
                    20
                  </div>
                  <div className="border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500 flex items-center justify-center">
                    5
                  </div>
                  <div className="flex items-center justify-center border-2 h-7 rounded-md text-sm border-yellow-400 w-24 text-yellow-400">
                    <div className="h-3 w-3 rounded-full bg-yellow-300 mr-1"></div>
                    <span>Mitigate</span>
                  </div>
                  <div className="text-green-500 cursor-pointer">
                    <FaUser />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 dark:bg-slate-500 dark:text-white rounded-lg p-4 mt-4">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
                  <label className="custom-checkbox-container cursor-pointer flex items-center font-normal text-sm">
                    <input
                      type="checkbox"
                      checked={checkboxes['box4']}
                      onChange={() => handleSingleCheck('box4')}
                    />
                    <span className="custom-checkbox h-4 w-4 bg-gray-300 border-none border-gray-500"></span>
                  </label>
                  <IoIosArrowDropright className="ml-2" />
                  <div className="ml-2">
                    <span className="font-semibold">
                      Critical System Dependencies - DoS
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-[10px] bg-red-400 px-2 py-1 rounded">
                        CyD-4
                      </span>
                      <span className="text-[10px] bg-teal-200 px-2 py-1 rounded">
                        CyD-5
                      </span>
                      <span className="text-[10px] bg-red-400 px-2 py-1 rounded">
                        CyD-10
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-2 sm:mt-0 w-full sm:w-auto justify-start sm:justify-end ml-15 sm:ml-0">
                  <div className="border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400 flex items-center justify-center">
                    20
                  </div>
                  <div className="border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500 flex items-center justify-center">
                    5
                  </div>
                  <div className="flex items-center justify-center border-2 h-7 rounded-md text-sm border-green-500 w-24 text-green-500">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-1"></div>
                    <span>Accept</span>
                  </div>
                  <div className="text-green-500 cursor-pointer">
                    <FaUser />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 dark:bg-slate-500 dark:text-white rounded-lg p-4 mt-4">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
                  <label className="custom-checkbox-container cursor-pointer flex items-center font-normal text-sm">
                    <input
                      type="checkbox"
                      checked={checkboxes['box5']}
                      onChange={() => handleSingleCheck('box5')}
                    />
                    <span className="custom-checkbox h-4 w-4 bg-gray-300 border-none border-gray-500"></span>
                  </label>
                  <IoIosArrowDropright className="ml-2" />
                  <div className="ml-2">
                    <span className="font-semibold">
                      Exposure - Zero-day Attack
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-[10px] bg-red-400 px-2 py-1 rounded">
                        CyD-4
                      </span>
                      <span className="text-[10px] bg-teal-200 px-2 py-1 rounded">
                        CyD-5
                      </span>
                      <span className="text-[10px] bg-red-400 px-2 py-1 rounded">
                        CyD-10
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-2 sm:mt-0 w-full sm:w-auto justify-start sm:justify-end ml-15 sm:ml-0">
                  <div className="border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400 flex items-center justify-center">
                    20
                  </div>
                  <div className="border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500 flex items-center justify-center">
                    5
                  </div>
                  <div className="flex items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400">
                    <div className="h-3 w-3 rounded-full bg-red-400 mr-1"></div>
                    <span>Transfer</span>
                  </div>
                  <div className="text-green-500 cursor-pointer">
                    <FaUser />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 dark:bg-slate-500 dark:text-white rounded-lg p-4 mt-4">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
                  <label className="custom-checkbox-container cursor-pointer flex items-center font-normal text-sm">
                    <input
                      type="checkbox"
                      checked={checkboxes['box6']}
                      onChange={() => handleSingleCheck('box6')}
                    />
                    <span className="custom-checkbox h-4 w-4 bg-gray-300 border-none border-gray-500"></span>
                  </label>
                  <IoIosArrowDropright className="ml-2" />
                  <div className="ml-2">
                    <span className="font-semibold">
                      Physical Security - Theft
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-[10px] bg-red-400 px-2 py-1 rounded">
                        CyD-4
                      </span>
                      <span className="text-[10px] bg-teal-200 px-2 py-1 rounded">
                        CyD-5
                      </span>
                      <span className="text-[10px] bg-red-400 px-2 py-1 rounded">
                        CyD-10
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-2 sm:mt-0 w-full sm:w-auto justify-start sm:justify-end ml-15 sm:ml-0">
                  <div className="border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400 flex items-center justify-center">
                    20
                  </div>
                  <div className="border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500 flex items-center justify-center">
                    5
                  </div>
                  <div className="flex items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400">
                    <div className="h-3 w-3 rounded-full bg-red-400 mr-1"></div>
                    <span>Transfer</span>
                  </div>
                  <div className="text-green-500 cursor-pointer">
                    <FaUser />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between mt-6">
              <span className="text-sm text-gray-500">8/page</span>
              <div className="flex items-center gap-2">
                <button className="p-1 rounded hover:bg-gray-200">
                  <FaLessThan />
                </button>

                <button className="p-1 rounded bg-gray-900 ">1</button>
                <button className="p-1 rounded hover:bg-gray-200">2</button>
                <button className="p-1 rounded hover:bg-gray-200">3</button>
                <span>...</span>
                <button className="p-1 rounded hover:bg-gray-200">10</button>
                <button className="p-1 rounded hover:bg-gray-200">
                  <FaGreaterThan />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskRegistry;
