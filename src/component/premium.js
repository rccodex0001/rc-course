import React from 'react'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import four from './4.png'
import five from './5.png'
import six from './6.png'

export default function Premium() {
  return (
    <div data-aos="fade-up">
      
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
  <div class="flex flex-col text-center w-full mb-10">
      {/* <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2> */}
      <h1 class="sm:text-3xl text-2xl font-bold title-font text-blue-800">Buy now & Get Premium Bonuses worth ₹5000</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-bold my-2"><b>Supercharge</b> your Web Development Skills with these Bonuses</p>

    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-4  border-blue-500 shadow-2xl rounded-lg overflow-hidden zoom-out-on-hover">
          <img class=" w-full object-cover object-center" src={one} alt="blog"/>
        
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-4 border-blue-500 shadow-2xl rounded-lg overflow-hidden zoom-out-on-hover">
          <img class=" w-full object-cover object-center" src={two} alt="blog"/>
         
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-4 border-blue-500 shadow-2xl rounded-lg overflow-hidden zoom-out-on-hover">
          <img class=" w-full object-cover object-center" src={three} alt="blog"/>
         
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-4 border-blue-500 shadow-2xl rounded-lg overflow-hidden zoom-out-on-hover">
          <img class=" w-full object-cover object-center" src={four} alt="blog"/>
         
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-4 border-blue-500 shadow-2xl rounded-lg overflow-hidden zoom-out-on-hover">
          <img class=" w-full object-cover object-center" src={five} alt="blog"/>
         
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-4 border-blue-500 shadow-2xl rounded-lg overflow-hidden zoom-out-on-hover">
          <img class=" w-full object-cover object-center" src={six} alt="blog"/>
         
        </div>
      </div>
    </div>
    <div class="flex justify-center flex-wrap">
        <div>
    <a href='https://imjo.in/mZbubS' class="mb-4 md:mb-0">
        <button data-aos="zoom-out-up" class="button inline-flex text-white m-2 md:m-0 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" style={{'backgroundColor':'rgb(211,0,0)'}}>
            Get &nbsp;<span class="line-through md:inline">₹1599</span>&nbsp;₹199/- Only
        </button>
    </a>
    </div>
    <div>
    <a href='https://imjo.in/ye6Dtf'>
        <button data-aos="zoom-out-up" class="button ml-0 md:ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Frontend Course&nbsp;<span class="line-through md:inline">₹699</span>&nbsp;₹99/- Only
        </button>
    </a>
    </div>
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
      .zoom-out-on-hover {
        transition: transform 0.3s ease-in-out;
      }
      
      .zoom-out-on-hover:hover {
        transform: scale(1.05);
      }
    `}</style>
    </div>  )
}
