import { Button } from "./ui/button"

function Navbar() {
  return (
    <nav className="bg-black/95 backdrop-blur-sm h-[10%] w-[55%] mx-auto mt-3 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-[1.01]">
      <div className="flex items-center justify-between px-6 py-3">
        <h1 className="text-2xl font-semibold tracking-tight text-white select-none">
          Osiko
        </h1>

        <Button className="rounded-full px-7 py-5 text-sm font-medium bg-white text-black hover:bg-zinc-100 active:scale-95 transition">
          Login
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
