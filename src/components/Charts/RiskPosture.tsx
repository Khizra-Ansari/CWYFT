const RiskPostureBar = () => {
    return (
      <div className="w-full mt-4 bg-white dark:bg-boxdark p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Risk Posture</h2>
        <div className="flex h-8">
          <div className="flex-grow bg-green-400 rounded-l-lg"></div>
          <div className="flex-grow bg-yellow-400"></div>
          <div className="flex-grow bg-orange-400"></div>
          <div className="flex-grow bg-red-500 rounded-r-lg"></div>
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-600 dark:text-gray-300">
          <div className="flex-grow text-center">1</div>
          <div className="flex-grow text-center">2</div>
          <div className="flex-grow text-center">3</div>
          <div className="flex-grow text-center">4</div>
        </div>
      </div>
    );
  };
  
  export default RiskPostureBar;
  