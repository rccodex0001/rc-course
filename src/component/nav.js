import React from 'react'
import img from './nv1.gif'

export default function Nav() {
  return (
    <div>
      
      <header className="text-gray-600 body-font shadow-xl">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <img className='h-full ' src={img}/>
    </nav>
    
  </div>
</header>

    </div>
  )
}
