import { Mail, EyeOff } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[url('https://i.imgur.com/6Iej2c3.jpg')] bg-cover bg-center">
      
      {/* Overlay */}
      <div className="min-h-screen w-full bg-gradient-to-b from-white/40 via-blue-200/40 to-blue-900/60">

        {/* Navbar */}
        <nav className="flex justify-end gap-10 pr-16 pt-6 text-sm font-semibold text-gray-700">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">SERVICE</a>
          <a href="#">CONTACT</a>
          <a href="#" className="text-white opacity-70">LOGIN</a>
        </nav>

        {/* Login Card */}
        <div className="flex justify-center items-center mt-16">
          <div className="w-[380px] rounded-2xl backdrop-blur-xl bg-white/20 shadow-2xl p-10">

            <h2 className="text-center text-xl font-bold mb-8">LOGIN</h2>

            {/* Email */}
            <label className="text-sm text-gray-700">Email</label>
            <div className="flex items-center border-b border-gray-500 mb-6">
              <input
                type="email"
                className="bg-transparent outline-none w-full py-2"
              />
              <Mail size={18} className="text-gray-700" />
            </div>

            {/* Password */}
            <label className="text-sm text-gray-700">Password</label>
            <div className="flex items-center border-b border-gray-500 mb-2">
              <input
                type="password"
                className="bg-transparent outline-none w-full py-2"
              />
              <EyeOff size={18} className="text-gray-700" />
            </div>

            <div className="text-right text-xs text-gray-700 mb-4 cursor-pointer">
              Forgot Password?
            </div>

            {/* Remember */}
            <div className="flex items-center gap-2 mb-6 text-sm text-gray-700">
              <input type="checkbox" />
              Remember Me
            </div>

            {/* Button */}
            <button className="w-full py-2 text-white rounded-md bg-blue/40 backdrop-blur-md hover:bg-blue/60 transition">
              Login
            </button>

            {/* Register */}
            <p className="text-left text-white mt-6 text-black-800">
              Don't have an Account?{" "}
              <span className="font-semibold cursor-pointer">Register</span>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}