import Home from './sections/Home'

import "./App.css"
import Image from './sections/Image'
import Features from './sections/Features/Features'
import Pricing from './sections/Pricing/Priceing'
import Footer from './sections/Footer'
const App = () => {
  return (
    <div className='bg-[#000] text-white'>
    
        <Home/>
        <Image/>
        <Features/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

export default App