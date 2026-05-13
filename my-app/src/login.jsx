import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
      
      {/* Card */}
      <div className="bg-white w-[480px] p-10 rounded-xl shadow-xl">
        
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="text-2xl">💎</div>
          <h1 className="text-lg font-semibold tracking-widest">CLARITY</h1>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-1">Log in</h2>
        <p className="text-gray-500 mb-6">
          Continue your design journey with Clarity.
        </p>
        {/* Email */}
        <label className="text-sm font-medium">Email address</label>
        <input
          type="email"
          placeholder=""
          className="w-full mt-2 mb-8 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-400"
        />
       {/* Password */}
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Password</label>
          <span className="text-sm text-purple-500 cursor-pointer">
            Forgot password
          </span>
        </div>

        <div className="relative mt-2">
          <input
            type={show ? "text" : "password"}
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={() => setShow(!show)}
            className="absolute right-3 top-2.5 text-gray-500"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Remember */}
        <div className="flex items-center mt-5 mb-6 gap-6">
          <input type="checkbox" />
          <span className="text-sm text-gray-100">
            Remember me for 30 days
          </span>
        </div>

        {/* Button */}
        <button className="w-full bg-purple-800 hover:bg-purple-100 text-white rounded-md font-semibold transition">
          log in 
        </button>
      </div>
    </div>
  );
}