export default function App() {
  const campaigns = [
    {
      name: "iPhone App Campaign",
      company: "Coca Cola",
      days: "15 Days Left",
      influencers: 17,
      budget: "$50,000 Budget",
      cost: "$5,200 spent so far",
      color: "bg-green-500",
    },
    {
      name: "Creating Remarkable Poster",
      company: "BMW",
      days: "Started Dec 1, 2016",
      influencers: 4,
      budget: "$10,000 Budget",
      cost: "$2,500 spent",
      color: "bg-black",
    },
    {
      name: "Vacation Home Rental Success",
      company: "Airbnb",
      days: "Starts in 5 Days",
      influencers: 13,
      budget: "$10,000 Budget",
      cost: "$1,500 spent",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 p-8 flex justify-center items-start">
      <div className="w-[900px] bg-white rounded-2xl shadow-lg p-6">

        {/* Top Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatCard title="2" text="New creative campaigns." color="bg-blue-500"/>
          <StatCard title="$125,000" text="Total budget across all campaigns." color="bg-slate-700"/>
          <StatCard title="Attention" text="View campaigns that need to be reviewed." color="bg-gray-400"/>
          <StatCard title="Future" text="View requests coming soon." color="bg-green-500"/>
        </div>

        {/* Campaign Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="font-semibold text-lg">Campaigns</h2>
            <div className="flex gap-4 text-sm mt-2">
              <span className="border-b-2 border-blue-500 pb-1">All (6)</span>
              <span>Current (1)</span>
              <span>Completed (1)</span>
              <span>Future (3)</span>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <input
              placeholder="Search..."
              className="px-3 py-2 border rounded-md"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              + Create
            </button>
          </div>
        </div>

        {/* Campaign List */}
        <div className="space-y-4">
          {campaigns.map((item, index) => (
            <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              
              {/* color bar */}
              <div className={`w-1 h-16 rounded mr-4 ${item.color}`}></div>

              <div className="flex-1 grid grid-cols-4 gap-4">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.company}</p>
                </div>

                <div className="text-sm">
                  <p>{item.days}</p>
                  <p className="text-gray-500">{item.influencers} influencers</p>
                </div>

                <div className="text-sm">
                  <p>{item.budget}</p>
                  <p className="text-gray-500">{item.cost}</p>
                </div>

                {/* small action buttons */}
                <div className="flex gap-2 justify-end">
                  <SmallBtn />
                  <SmallBtn />
                  <SmallBtn />
                  <SmallBtn />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* Stat Card */
function StatCard({ title, text, color }) {
  return (
    <div className={`${color} text-white p-4 rounded-lg shadow`}>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm mt-2">{text}</p>
    </div>
  );
}

/* Small Buttons */
function SmallBtn() {
  return (
    <button className="w-8 h-6 bg-gray-200 rounded"></button>
  );
}