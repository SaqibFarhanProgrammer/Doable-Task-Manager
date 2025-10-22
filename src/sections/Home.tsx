import MainButton from "@/components/MainButton"
import Navbar from "@/components/Navbar"
import { Link, useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white flex flex-col">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center flex-1 px-4 sm:px-8 md:px-16">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold leading-tight max-w-5xl 
           bg-gradient-to-t from-zinc-400 to-white bg-clip-text text-transparent"
        >
          Manage your growth here with Minimalism
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illum
          explicabo. Consequuntur provident sequi.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link to="/login">
            <MainButton
              text="Login"
              classname="bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-md shadow-gray-800"
            />
          </Link>

          <MainButton
            onClick={() => navigate("/work/project")}
            text="Manage Your Tasks"
            classname="bg-white/90 text-black border border-gray-400 hover:bg-gray-100 hover:text-black hover:shadow-md hover:shadow-white/20 transition-all duration-300"
          />
        </div>
      </section>
    </div>
  )
}
