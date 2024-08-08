import { Cell, Pie, PieChart } from 'recharts';

type DataItem = {
  name: string;
  value: number;
  color: string;
};

const data: DataItem[] = [
  { name: 'Treatment 1', value: 400, color: '#38a169' },
  { name: 'Treatment 2', value: 300, color: '#f6e05e' },
  { name: 'Treatment 3', value: 300, color: '#ed8936' },
  { name: 'Treatment 4', value: 200, color: '#f56565' },
];

type LegendItemProps = {
  item: DataItem;
};

const LegendItem: React.FC<LegendItemProps> = ({ item }) => (
  <div className="flex items-center">
    <div
      className="w-3 h-3 rounded-full"
      style={{ backgroundColor: item.color }}
    ></div>
    <span className="ml-2 text-xs">{item.name}</span>
  </div>
);

const TreatmentOverviewCard: React.FC = () => {
  return (
    <div className="h-[150px] rounded-md w-[290px] bg-white dark:bg-boxdark shadow-md">
      <div className="p-4">
        <h2 className="font-bold text-[17px]">Treatment Overview</h2>
        <div className="flex flex-row items-center mt-2">
          <div className="flex-shrink-0">
            <PieChart width={90} height={90}>
              <Pie
                data={data}
                cx={45}
                cy={45}
                innerRadius={25}
                outerRadius={35}
                paddingAngle={1}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="ml-4 flex-grow">
            <div className="flex justify-between mb-1">
              <LegendItem item={data[0]} />
              <LegendItem item={data[1]} />
            </div>
            <div className="flex justify-between">
              <LegendItem item={data[2]} />
              <LegendItem item={data[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentOverviewCard;
