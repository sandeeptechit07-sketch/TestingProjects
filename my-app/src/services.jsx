const services = [
  {
    title: "Clean Design",
    icon : "🧩 ",
    text: "Continually maximize effective interfaces. Synergistically extensible.",
  },
  {
    title: "Web Design",
    icon: "🎯",
    text: "Continually maximize effective interfaces. Synergistically extensible.",
  },
  {
    title: "Creative Idea",
    icon: "💡",
    text: "Continually maximize effective interfaces. Synergistically extensible.",
  },
  {
    title: "Shopping",
    icon: "🛒",
    text: "Continually maximize effective interfaces. Synergistically extensible.",
  },
  {
    title: "24/7 Support",
    icon: "👨‍💻",
    text: "Continually maximize effective interfaces. Synergistically extensible.",
  },
  {
    title: "Branding",
    icon: "🛟",
    text: "Continually maximize effective interfaces. Synergistically extensible.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-3xl font-bold mb-3">My SERVICES</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-12">
          Dynamically Disseminate Timely Results Without Errorfree Testing
          Procedures. Globly actualize Highble Competently Deliver Cross.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition"
            >
              <div className="text-4xl mb-4 text-blue-500">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-6">
                Continually maximize effective interfaces <br />
                Visa vis resource leveling leadershipskills.
                <br /> Synergistically Extensible.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}