import React from 'react';
// import RiskPostureBar from '../../components/Charts/RiskPosture';
// import RiskAssessmentCard from '../../components/Charts/RiskAssessmentCard';
// import TreatmentOverviewCard from '../../components/Charts/TreatmentOverviewCard';
// import CategoryBreakdown from '../../components/Charts/CategoryBreakdown';
// import HeatMap from '../../components/Charts/HeatMap';
import HeatMap from '../components/Charts/HeatMap';
import RiskAssessmentCard from '../components/Charts/RiskAssessmentCard';
import TreatmentOverviewCard from '../components/Charts/TreatmentOverviewCard';
import CategoryBreakdown from '../components/Charts/CategoryBreakdown';
import RiskPostureBar from '../components/Charts/RiskPosture';
import { Link } from 'react-router-dom';

// import { PieChart, Pie, Cell } from 'recharts';

const RiskDashboard: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-xl">Risk Management</h1>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-between mt-4">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 sm:space-x-4 w-full sm:w-auto">
          <Link
            to="/"
            className="px-4 py-2 bg-white dark:bg-boxdark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-md text-sm w-full h-12 sm:w-auto sm:h-auto hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            Risk Register
          </Link>
          <Link
            to="/Risk/Dashboard"
            className="px-4 py-2 bg-black text-white dark:bg-slate-300 dark:text-black rounded-md text-sm w-full h-12 sm:w-auto sm:h-auto"
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

      <div className="flex items-center gap-8 max-md:flex-wrap max-sm:gap-2 -mt-1">
        <select className=" h-7 w-44 dark:bg-boxdark text-sm max-md:w-32 max-sm:text-[12px] font-normal rounded-md px-2 text-gray-700 cursor-pointer mt-4 outline-none">
          <option>Risk Categories</option>
          <option>Category-1</option>
          <option>Category-2</option>
        </select>
        <select className=" h-7 w-44 dark:bg-boxdark text-sm max-md:w-32 max-sm:text-[12px] font-normal rounded-md px-2 text-gray-700 cursor-pointer mt-4 outline-none">
          <option>Risk Owner</option>
          <option>Owner-1</option>
          <option>Owner-2</option>
        </select>
      </div>

      <div>
        <RiskPostureBar />
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4">
        {/* On small screens, span the full width; on larger screens, split into 4 and 8 columns */}
        <div className="col-span-12 lg:col-span-4">
          <HeatMap />
        </div>

        <div className="col-span-12 lg:col-span-8">
          <div>
            <CategoryBreakdown />
          </div>
          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-12 lg:col-span-6">
              <RiskAssessmentCard />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <TreatmentOverviewCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskDashboard;
