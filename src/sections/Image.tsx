import background from "..//assets/Images'/mainbg.jpeg" 
function Image() {
  return (
    <div className="w-full h-screen sm:h-[20vh] max-[531px]:h-[34vh] md:h-[85vh] lg:h-[90vh] flex items-center justify-center bg-black">
      <div className="w-[95vw] h-[90vh] sm:h-[30vh] max-[531px]:h-[30vh] md:h-[80vh] lg:h-[85vh] rounded-2xl max-[531px]:rounded-[4px] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
        <img
          src={background}
          alt="Main Background"
          className="w-full h-full object-cover object-center max-[531px]:rounded-[4px] rounded-2xl transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  )
}

export default Image
