import MainButton from "@/components/MainButton";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden text-white">
     

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center">
        <Navbar />

        <section className="w-full text-center mt-20 px-6">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight w-[90%] mx-auto 
             bg-gradient-to-t from-zinc-400  to-white bg-clip-text text-transparent"
          >
            Manage your growth here with Minimalism
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illum
            explicabo. Consequuntur provident sequi.
          </p>
          f
          <div className="mt-5 flex gap-4 justify-center items-center">
            <Link to="/login">
              <MainButton text="Login" classname="bg-zinc-800 text-white" />
            </Link>
            <Link to="/work">
              <MainButton
                classname="bg-white hover:bg-black hover:text-white text-black border border-[#6a6a6a]"
                text="Manage Your Tasks"
              />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
