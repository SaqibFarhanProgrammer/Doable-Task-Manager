import { Route, Routes } from "react-router-dom"
import Main_Navbar from "../main_navbar/Main_Navbar"
import Projects from "./sections/Projects/Projects"
import Board from "./sections/Board/Board"
import Dashboard from "./dashboard/Dashboard"

function Main() {
  return (
    <div className="w-full sm:w-[83vw] h-[99vh] bg-[#0f0f0f] text-white overflow-y-auto p-2 sm:p-4 rounded-xl">
      <Main_Navbar />
      <div className="mt-4">
        <Routes>
          <Route path="project" element={<Projects />} />
          <Route path="board" element={<Board />} />
          <Route path="dashboad" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default Main
