import Main_Navbar from "../main_navbar/Main_Navbar"
import { GrProjects } from "react-icons/gr"
import { FaChevronDown } from "react-icons/fa"

function Main() {
  return (
    <div className="w-[83vw] min-h-screen bg-[#0f0f0f] text-white overflow-hidden">
      <Main_Navbar />

      <div className="px-12 py-6">
        <h1 className="text-5xl font-semibold mb-8 tracking-tight">Projects</h1>

        <div className="bg-gradient-to-br from-[#1f1f1f] to-[#101010] border border-white/10 rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_35px_rgba(0,0,0,0.7)] transition-all duration-300 ease-out hover:scale-[1.01]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-semibold">Blog App</h2>
              <p className="text-gray-400 text-sm mt-2 max-w-2xl leading-relaxed">
                A modern blogging platform built with React and Node. Allows users to
                create, edit, and manage articles with a clean interface and real-time updates.
              </p>
            </div>
            <FaChevronDown className="text-xl opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
          </div>

          <div className="mt-6 border-t border-white/10 pt-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-lg flex items-center justify-center">
                <GrProjects className="text-xl" />
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="capitalize text-base">Tasks</span>
                <span className="font-medium text-white">12</span>
              </div>
            </div>

            <div className="text-gray-400 text-sm">
              <p>Due: 9/10/2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
