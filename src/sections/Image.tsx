import background from "..//assets/Images'/mainbg.jpeg" 
function Image() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="w-[95vw] h-[90vh] sm:h-[70vh] md:h-[85vh] lg:h-[95vh] rounded-2xl overflow-hidden border border-white/10">
        <img
          src={background}
          alt="Main Background"
          className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  )
}

export default Image
