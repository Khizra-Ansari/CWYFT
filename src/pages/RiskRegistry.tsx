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

const RiskRegistry: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-xl">Risk Management</h1>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex space-x-4">
          <Link
            to="/"
            className="px-4 py-2 bg-black text-white dark:bg-slate-300 dark:text-black  rounded-md h-8 w-30 text-sm max-md:w-32 max-sm:text-[12px]"
          >
            Risk Register
          </Link>
          <Link
            to="/Risk/Dashboard"
            className="px-4 py-2 bg-white dark:bg-boxdark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-md h-8 w-40 text-sm max-md:w-32 max-sm:text-[12px]"
          >
            Risk Dashboard
          </Link>
          <Link
            to="/Risk/Map"
            className="px-4 py-2 bg-white dark:bg-boxdark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-md h-8 w-30 text-sm max-md:w-32 max-sm:text-[12px]"
          >
            Risk Map
          </Link>
        </div>
        <Link
          to="/new-risk"
          className="px-4 py-2 bg-white dark:bg-boxdark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-md ml-auto h-8 w-30 text-sm max-md:w-32 max-sm:text-[12px]"
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

export default RiskRegistry;
