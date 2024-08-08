const CategoryBreakdown = () => {
  const categories = [
    {
      name: 'Governance - Compliance/Legal',
      colors: ['bg-yellow-400 w-1/2', 'bg-red-500 w-1/2'],
      numbers: ['50', '50'],
    },
    {
      name: 'Asset Management',
      colors: ['bg-green-400 w-3/5', 'bg-yellow-400 w-1/5', 'bg-red-500 w-1/5'],
      numbers: ['60', '20', '20'],
    },
    {
      name: 'Access Control',
      colors: [
        'bg-green-400 w-1/3',
        'bg-yellow-400 w-1/3',
        'bg-orange-400 w-1/4',
        'bg-red-500 w-1/12',
      ],
      numbers: ['33', '33', '25', '8'],
    },
    {
      name: 'Assessments & Audits',
      colors: [
        'bg-green-400 w-1/3',
        'bg-yellow-400 w-1/3',
        'bg-orange-400 w-1/4',
        'bg-red-500 w-1/12',
      ],
      numbers: ['33', '33', '25', '8'],
    },
    {
      name: 'Incident Response',
      colors: ['bg-red-500 w-1/2', 'bg-orange-400 w-1/2'],
      numbers: ['50', '50'],
    },
  ];

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark h-[400px]">
      <h2 className="text-xl font-semibold mb-4">Category Breakdown</h2>
      {categories.map((category, index) => (
        <div key={index} className="mb-3">
          {' '}
          {/* Reduce margin-bottom for less space between bars */}
          <p className="text-sm text-gray-600 mb-1">{category.name}</p>
          <div className="relative flex h-2 rounded-full overflow-hidden">
            {category.colors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className={`relative h-full ${color}`}
              ></div>
            ))}
          </div>
          <div className="flex mt-1 space-x-1 text-xs">
            {' '}
            {/* Add space-x-1 for some space between numbers */}
            {category.numbers.map((number, numberIndex) => (
              <div
                key={numberIndex}
                className={`text-center w-full ${
                  category.colors[numberIndex].split(' ')[1]
                }`}
              >
                {number}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryBreakdown;
