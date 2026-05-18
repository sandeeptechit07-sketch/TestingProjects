export default function App() {
  return (
    <div className="font-sans text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-15 py-5 shadow-sm">

      </nav>

      {/* Page Header */}
      <section className="bg-gray-200 text-center py-12">
        <h2 className="text-3xl font-semibold mb-2">About Us</h2>
        <p className="text-sm text-gray-500">Home • About Us</p>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto text-center py-16 px-6">
        <p className="text-sm text-gray-500 mb-2">About Us</p>
        <h2 className="text-3xl font-bold leading-snug mb-10">
          Our Company Is Committed <br/>
          Earning Your Trust By Providing The Expertise
        </h2>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-10 text-left mb-10">
          <div>
            <h3 className="font-semibold mb-3">
              #Full Services Auto Repair Center
            </h3>
            <p className="text-gray-500 text-sm leading-6">
              It is a long established fact that a reader will be distracted by
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using content here,
              making it look like readable English.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              #Trusted Auto Services Center In Bangladesh
            </h3>
            <p className="text-gray-500 text-sm leading-6">
              It is a long established fact that a reader will be distracted by
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using content here,
              making it look like readable English.
            </p>
          </div>
        </div>

        <button className="bg-black text-white px-8 py-3 text-sm">
          Know More About Us
        </button>
      </section>

      {/* Video Section */}
      <section className="bg-gray-200 py-20 flex justify-center">
        <div className="w-[700px] h-[300px] bg-gray-400 flex items-center justify-center">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-l-[14px] border-l-white border-y-[10px] border-y-transparent ml-1"></div>
          </div>
        </div>
      </section>

    </div>
  );
}