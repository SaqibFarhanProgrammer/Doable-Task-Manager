import { LuSparkles } from "react-icons/lu";
import { RiPresentationFill } from "react-icons/ri";
import { RiMicLine } from "react-icons/ri";

function Main_Navbar() {
  return (
    <div className="w-full p-4 flex justify-between items-center ">
      
      <div>
        <h1 className="text-3xl normal text-white">Welcome, Michael</h1>
      </div>

      <div className="flex items-center gap-3">
        
        <div className="flex items-center gap-3 bg-[#1F1F1F] py-2 px-3 rounded-lg cursor-pointer hover:bg-[#2D2D2D] transition-all duration-200">
          <LuSparkles className="text-white text-xl" />
          <div className="normal">
            <p className="text-white text-sm ">Cr eate Project</p>
            <p className="text-[#6D6D6D] normala'] text-xs">Auto film & clip faster</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[#1F1F1F] py-2 px-3 rounded-lg cursor-pointer hover:bg-[#2D2D2D] transition-all duration-200">
          <RiPresentationFill className="text-white text-xl" />
          <div>
            <p className="text-white text-sm normal">Project Board</p>
            <p className="text-[#6D6D6D] text-xs">Import file from device</p>
          </div>
        </div>

        <div className="flex items-center  gap-3 bg-[#1F1F1F] py-2 px-3 rounded-lg cursor-pointer hover:bg-[#2D2D2D] transition-all duration-200">
          <RiMicLine className="text-white text-xl" />
          <div>
            <p className="text-white text-sm normalm">Dashboard</p>
            <p className="text-[#6D6D6D] text-xs">Translate any video</p>
          </div>
        </div>

        <div className="ml-2">
          <img
            className="h-10 w-10 rounded-full object-cover cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMfraI81_QCr29PrFj5TdPi50BBmJwB9dbg&s" // Re-using the same placeholder image
            alt="Profile"
          />
        </div>

      </div>
    </div>
  );
}

export default Main_Navbar;