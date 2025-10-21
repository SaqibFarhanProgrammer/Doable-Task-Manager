import { GrProjects } from "react-icons/gr"
import { FaChevronDown } from "react-icons/fa"

function Projects_card() {
  return (
    <div className="border border-zinc-800 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_35px_rgba(0,0,0,0.7)] transition-all duration-300 ease-out hover:scale-[1.01] h-[20vh] flex flex-col justify-between p-4">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h2 className="text-2xl heading">Blog App</h2>
          <p className="text-gray-400 text-xs mt-1 max-w-xl normal leading-snug line-clamp-2 pt-1">
            A modern blogging platform built with React and Node. Allows users
            to create, edit, and manage articles with a clean interface and
            real-time updates.
          </p>
        </div>
        <FaChevronDown className="text-lg opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
      </div>

      <div className="flex justify-between pb-0 items-center border-white/10 pt-1">
        <div className="flex items-center gap-2">
          <div className="bg-white/10 p-2 rounded-lg flex items-center justify-center">
            <GrProjects className="text-lg" />
          </div>
          <div className="flex items-center gap-1 text-gray-300">
            <span className="capitalize text-sm">Tasks</span>
            <span className="font-medium text-white text-sm">12</span>
          </div>
        </div>

        <p className="text-gray-400 text-xs">Due: 9/10/2025</p>
      </div>
    </div>
  )
}

export default Projects_card
