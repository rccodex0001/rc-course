import React from 'react'

export default function Hero() {
  return (
    <div>
      
      <section className="text-gray-600 body-font bg-gray-300" data-aos="fade-up">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <img className="object-cover object-center shadow-xl shadow-slate-500 rounded" alt="hero" src="https://wallpapercave.com/wp/wp8661113.jpg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-800">Master Python Programming with Our Ebook!
      </h1>
      <p className="mb-8 leading-relaxed">
      Unlock the full potential of Python with our comprehensive e-book. Explore key concepts and advanced techniques, enabling you to develop robust, scalable applications and automate complex tasks with ease.
      </p>
      <div class="flex justify-center flex-wrap">
        <div>
    <a href='https://payments.cashfree.com/forms/pythonebook' class="mb-4 md:mb-0">
        <button data-aos="zoom-out-up" class="button inline-flex text-white m-2 md:m-0 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" style={{'backgroundColor':'rgb(211,0,0)'}}>
            Get &nbsp;<span class="line-through md:inline">₹1599</span>&nbsp;₹249/- Only
        </button>
    </a>
    </div>
    <div>
    <a href='https://www.rccodex.co.in/studymaterial'>
        <button data-aos="zoom-out-up" class="button ml-0 md:ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Resource
        </button>
    </a>
    </div>
    <div>
    <a href='https://payments.cashfree.com/forms/frontend'>
        <button data-aos="zoom-out-up" class="button ml-0 md:ml-4 my-3 inline-flex text-gray-700 bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Frontend Course&nbsp;<span class="line-through md:inline">₹699</span>&nbsp;₹199/- Only
        </button>
    </a>
    </div>
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
    `}</style>
    </div>
  )
}
