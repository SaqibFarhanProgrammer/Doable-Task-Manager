import { HiOutlinePlusCircle } from "react-icons/hi2"
import { LuLayoutDashboard } from "react-icons/lu"
import { MdOutlineAnalytics } from "react-icons/md"

function Main_Navbar() {
  return (
    <div className="w-full p-4 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-medium text-white">Welcome, Michael</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 bg-[#1F1F1F] py-2 px-3 rounded-lg cursor-pointer hover:bg-[#2D2D2D] transition-all duration-200">
          <HiOutlinePlusCircle className="text-white text-xl" />
          <div>
            <p className="text-white text-sm font-medium">Create Project</p>
            <p className="text-[#6D6D6D] text-xs">Auto film & clip faster</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[#1F1F1F] py-2 px-3 rounded-lg cursor-pointer hover:bg-[#2D2D2D] transition-all duration-200">
          <LuLayoutDashboard className="text-white text-xl" />
          <div>
            <p className="text-white text-sm font-medium">Project Board</p>
            <p className="text-[#6D6D6D] text-xs">Import file from device</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[#1F1F1F] py-2 px-3 rounded-lg cursor-pointer hover:bg-[#2D2D2D] transition-all duration-200">
          <MdOutlineAnalytics className="text-white text-xl" />
          <div>
            <p className="text-white text-sm font-medium">Dashboard</p>
            <p className="text-[#6D6D6D] text-xs">Translate any video</p>
          </div>
        </div>

        <div className="ml-2">
          <img
            className="h-10 w-10 rounded-full object-cover cursor-pointer border border-zinc-700"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMfraI81_QCr29PrFj5TdPi50BBmJwB9dbg&s"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  )
}

export default Main_Navbar
