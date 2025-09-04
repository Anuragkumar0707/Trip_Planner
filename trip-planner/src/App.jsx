import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/ui/custom/Hero'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* hero*/}
   <Hero/>
   <div className="w-full fixed bottom-0 left-0 bg-gradient-to-br from-purple-300 to-blue-200 p-4 ">
      <Button className="bg-gradient-to-r from-blue-500 via-purple-600 to-red-400 text-white hover:opacity-90 px-6 py-3 rounded-lg text-lg">Subscribe</Button>
   </div>
    </>
  )
}

export default App
