import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { RiVideoLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";

function Sidebar() {
  return (
    <div className="w-[17vw] relative h-[98vh] p-2 bg-[#121212] rounded-2xl flex flex-col justify-between">
      <div className="top  flex flex-col gap-4">
        <div className="bottom flex items-center gap-3 p-3 bg-[#1F1F1F] rounded-xl mt-4">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMfraI81_QCr29PrFj5TdPi50BBmJwB9dbg&s" // Placeholder image for Michael Robinson
            alt="Michael Robinson"
          />
          <div className="flex flex-col">
            <h4 className="text-white text-sm font-medium">Michael Robinson</h4>
            <span className="text-[#6D6D6D] text-xs">
              michaelrobinson@email.com
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-[#6D6D6D]">
          <h3 className="text-xs font-semibold uppercase mb-1">Main Menu</h3>
          <div className="flex items-center gap-3 p-2 rounded-lg transition-all duration-200 cursor-pointer bg-[#2D2D2D] text-white">
            <MdOutlineDashboardCustomize className="text-xl" />
            <span className="text-sm">Home</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] transition-all duration-200 cursor-pointer">
            <TfiLayoutGrid3Alt className="text-xl" />
            <span className="text-sm">Projects</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] transition-all duration-200 cursor-pointer">
            <TfiLayoutGrid3Alt className="text-xl" />
            <span className="text-sm">Profile</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] transition-all duration-200 cursor-pointer">
            <RiVideoLine className="text-xl" />
            <span className="text-sm">Board</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] transition-all duration-200 cursor-pointer">
            <RiVideoLine className="text-xl" />
            <span className="text-sm">Dashboard</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] transition-all duration-200 cursor-pointer">
            <RiVideoLine className="text-xl" />
            <span className="text-sm">Create New Project</span>
          </div>
        </div>

        <div className="flex left-0 border-t py-2 border-zinc-800 absolute bottom-0 w-full flex-col gap-2 text-[#6D6D6D]">
          <div className="flex  items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] transition-all duration-200 cursor-pointer">
            <IoSettingsOutline className="text-xl" />
            <span className="text-sm">Settings</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2D2D2D] transition-all duration-200 cursor-pointer">
            <LiaCrownSolid className="text-xl" />
            <span className="text-sm">Help</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
