import MainButton from "@/components/MainButton";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-[70vh]  w-full flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <section className="w-full  text-center">
          <h1 className="text-5xl w-[90%] mx-auto md:text-7xl lg:text-8xl font-semibold leadt up ">
            Manage your growth here with Minimalism.{" "}
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illum
            explicabo. Consequuntur provident sequi.
          </p>

          <div className="mt-10 flex gap-4 justify-center items-center">
            <MainButton text="Login" classname="bg-black  text-white" />
            <MainButton
              classname="bg-white hover:text-white text-black border border-[#6a6a6a]"
              text="Register"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
