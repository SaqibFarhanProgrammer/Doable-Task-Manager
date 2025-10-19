import background from "..//assets/Images'/mainbg.jpeg"
function Image() {
  return (
    <div className='w-full h-screen   flex items-center justify-center'>
      <div className="img a-[95vw] h-[95vh] p-[2px]">

        <img className='w-[100%] h-[100%]' src={background} alt="" />
      </div>
    </div>
  )
}

export default Image