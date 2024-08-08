import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const HeatMap = () => {
  const options: ApexOptions = {
    chart: {
      type: 'heatmap',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 1,
        colorScale: {
          ranges: [
            {
              from: 1,
              to: 1,
              color: '#008000', // Green
            },
            {
              from: 2,
              to: 2,
              color: '#FFFF00', // Yellow
            },
            {
              from: 3,
              to: 3,
              color: '#FFA500', // Orange
            },
            {
              from: 4,
              to: 8,
              color: '#FF0000', // Red
            },
          ],
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#000000'],
      },
    },
    xaxis: {
      type: 'category',
      categories: ['1', '2', '3', '4', '5'],
    },
    yaxis: {
      labels: {
        formatter: (value: number) => value.toString(),
      },
    },
    title: {
      text: 'Risk Heatmap',
      align: 'center',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
      },
    },
  };

  const series = [
    {
      name: '1',
      data: [2, 1, 1, 2, 8],
    },
    {
      name: '2',
      data: [3, 1, 1, 2, 2],
    },
    {
      name: '3',
      data: [2, 1, 1, 1, 3],
    },
    {
      name: '4',
      data: [2, 3, 3, 1, 1],
    },
    {
      name: '5',
      data: [2, 1, 3, 2, 1],
    },
  ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white dark:bg-boxdark px-4 sm:px-6 lg:px-8 pt-7.5 pb-5 shadow-default dark:border-strokedark h-[400px] sm:h-[500px] lg:h-[566px]">
      <h2 className="text-lg font-semibold mb-4 dark:text-gray-300">
        Risk Heatmap
      </h2>
      <div className="w-full h-full">
        <ReactApexChart
          options={options}
          series={series}
          type="heatmap"
          height="55%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default HeatMap;
