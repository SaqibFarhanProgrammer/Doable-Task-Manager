import { Route, Routes } from "react-router-dom"
import Main_Navbar from "../main_navbar/Main_Navbar"
import Projects from "./sections/Projects/Projects"
import Board from "./sections/Board/Board"

function Main() {
  return (
    <div className="w-[83vw] h-[99vh] bg-[#0f0f0f] text-white overflow-y-auto">
      <Main_Navbar />
      <Routes>
        <Route path="project" element={<Projects />} />
        <Route path="board" element={<Board />} />\
        

      </Routes>
    </div>
  )
}

export default Main
