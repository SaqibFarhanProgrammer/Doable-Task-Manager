import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { RiVideoLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";

  
function Sidebar() {
  return (
    <div className="w-[17vw] h-[98vh] p-2 bg-[#121212] rounded-2xl flex flex-col justify-between">
      {/* Top Section */}

      
      <div className="top flex flex-col gap-4">
     

        {/* Main Menu */}
        <div className="flex flex-col gap-2 text-[#6D6D6D]">
          <h3 className="text-xs font-semibold uppercase mb-1">Main Menu</h3>
          <div className="flex items-center gap-3 p-2 rounded-lg transition-all duration-200 cursor-pointer bg-[#2D2D2D] text-white">
            <MdOutlineDashboardCustomize className="text-xl" />
            <span className="text-sm">Home</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] transition-all duration-200 cursor-pointer">
            <TfiLayoutGrid3Alt className="text-xl" />
            <span className="text-sm">Templates</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] transition-all duration-200 cursor-pointer">
            <RiVideoLine className="text-xl" />
            <span className="text-sm">Videos</span>
          </div>
        </div>

        {/* Settings */}
        <div className="flex flex-col gap-2 text-[#6D6D6D]">
          <h3 className="text-xs font-semibold uppercase mb-1">Settings</h3>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] transition-all duration-200 cursor-pointer">
            <IoSettingsOutline className="text-xl" />
            <span className="text-sm">Settings</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] transition-all duration-200 cursor-pointer">
            <LiaCrownSolid className="text-xl" />
            <span className="text-sm">Brand kits</span>
          </div>
        </div>

    
       
      </div>

      {/* Bottom User Profile */}
      <div className="bottom flex items-center gap-3 p-3 bg-[#1F1F1F] rounded-xl mt-4">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377dd9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image for Michael Robinson
          alt="Michael Robinson"
        />
        <div className="flex flex-col">
          <h4 className="text-white text-sm font-medium">Michael Robinson</h4>
          <span className="text-[#6D6D6D] text-xs">michaelrobinson@email.com</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;