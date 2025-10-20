import Main_Navbar from "../main_navbar/Main_Navbar"
import  Projects_card  from "@/components/Projects_card"

function Main() {
  return (
    <div className="w-[83vw] h-[99vh] bg-[#0f0f0f] text-white overflow-y-auto">
      <Main_Navbar />

      <div className="px-12 flex flex-col gap-5 py-6">
        <h1 className="text-5xl font-semibold mb-8 tracking-tight">Projects</h1>
        <Projects_card/>
        <Projects_card/>
        <Projects_card/>
        <Projects_card/>
        <Projects_card/>
        <Projects_card/>
      </div>
    </div>
  )
}

export default Main
