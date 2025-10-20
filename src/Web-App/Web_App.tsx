import Sidebar from './Sidebar/Sidebar'
import Main from './management/Main'

function Web_App() {
  return (
    <div className='h-screen w-full flex bg-[#131013] p-2'>
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default Web_App