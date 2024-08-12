import React from 'react'
import img from './Mern-Stack.png'

export default function Book() {
  return (
    <div>
    
    <section className="text-gray-600 body-font bg-gray-300">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" data-aos="fade-up" data-aos-duration="1500">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded border-zinc-950 border-2 shadow-2xl" alt="hero" src={img}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-800">Our MERN Course
        
      </h1>
    <div className='font-semibold text-lg my-5' >
      <li> 100+ project with source code  </li>
      <li> 50+ backend project with source code  </li>
      <li> 25+ Rivision Notes  </li>
      <li> 300+ Placement Question   </li>
      </div>
      <div className="flex justify-center">
      <a href='https://payments.cashfree.com/forms/rcrao'>
        <button data-aos="zoom-in-up" className="button inline-flex text-white  border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" style={{'backgroundColor':'rgb(211,0,0)'}}>

Get Now At &nbsp; <span className="line-through md:inline"> ₹1599</span> &nbsp;₹249/- Only</button>
</a>  </div>
    </div>
  </div>
</section>
<style>{`
      .button {
        animation: shake 0.5s ease-in-out infinite;
      }

      @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
        100% { transform: translateX(0); }
      }
    `}</style>

    </div>
  )
}
