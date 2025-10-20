import Sidebar from './Sidebar/Sidebar'
import Main from './management/Main'

function Web_App() {
  return (
    <div className='h-screen w-full flex'>
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default Web_App