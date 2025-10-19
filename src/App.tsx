import Home from './sections/Home'

import "./App.css"
import Image from './sections/Image'
import Features from './sections/Features/Features'
import Pricing from './sections/Pricing/Priceing'
const App = () => {
  return (
    <div className='bg-[#fafafa]'>
    
        <Home/>
        <Image/>
        <Features/>
        <Pricing/>
    </div>
  )
}

export default App