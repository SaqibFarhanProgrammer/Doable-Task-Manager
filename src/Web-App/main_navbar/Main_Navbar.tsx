import { LuSparkles } from "react-icons/lu";
import { RiPresentationFill } from "react-icons/ri";
import { RiMicLine } from "react-icons/ri";

function Main_Navbar() {
  return (
    // Main navbar container
    <div className="w-full p-4 flex justify-between items-center">
      
      {/* Left Side: Welcome Message */}
      <div>
        <h1 className="text-3xl font-bold text-white">Welcome, Michael</h1>
      </div>

      {/* Right Side: Action Buttons & Profile */}
      <div className="flex items-center gap-3">
        
        {/* Action Button 1: AI Assistant */}
        <div className="flex items-center gap-3 bg-[#1F1F1F] py-2 px-3 rounded-lg cursor-pointer hover:bg-[#2D2D2D] transition-all duration-200">
          <LuSparkles className="text-white text-xl" />
          <div>
            <p className="text-white text-sm font-medium">AI video assistant</p>
            <p className="text-[#6D6D6D] text-xs">Auto film & clip faster</p>
          </div>
        </div>

        {/* Action Button 2: Import PowerPoint */}
        <div className="flex items-center gap-3 bg-[#1F1F1F] py-2 px-3 rounded-lg cursor-pointer hover:bg-[#2D2D2D] transition-all duration-200">
          <RiPresentationFill className="text-white text-xl" />
          <div>
            <p className="text-white text-sm font-medium">Import PowerPoint</p>
            <p className="text-[#6D6D6D] text-xs">Import file from device</p>
          </div>
        </div>

        {/* Action Button 3: Video Dubbing */}
        <div className="flex items-center gap-3 bg-[#1F1F1F] py-2 px-3 rounded-lg cursor-pointer hover:bg-[#2D2D2D] transition-all duration-200">
          <RiMicLine className="text-white text-xl" />
          <div>
            <p className="text-white text-sm font-medium">Video dubbing</p>
            <p className="text-[#6D6D6D] text-xs">Translate any video</p>
          </div>
        </div>

        {/* Profile Image */}
        <div className="ml-2">
          <img
            className="h-10 w-10 rounded-full object-cover cursor-pointer"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377dd9?q=80&w=2080&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Re-using the same placeholder image
            alt="Profile"
          />
        </div>

      </div>
    </div>
  );
}

export default Main_Navbar;