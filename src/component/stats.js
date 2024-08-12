import React from 'react'

export default function Stats() {
  return (
    <section className="text-gray-600 body-font">
      
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Statistics for our Course</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">"Unlock the insights within our course data analytics hub, revealing trends and patterns to guide your educational journey. Explore our website for comprehensive statistical analysis of course offerings."</p>
    </div>
    <div className="flex flex-wrap -m-4 text-center" >
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full " data-aos="zoom-in-up">
        <div className="border-2 border-gray-200 bg-blue-300 px-4 py-6 rounded-lg">
         
          <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p className="leading-relaxed font-bold">Downloads</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="zoom-in-up">
        <div className="border-2 border-gray-200 bg-blue-300  px-4 py-6 rounded-lg">
        
          <h2 className="title-font font-bold text-3xl text-gray-900">100+</h2>
          <p className="leading-relaxed font-bold">Projects</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="zoom-in-up">
        <div className="border-2 border-gray-200 bg-blue-300 px-4 py-6 rounded-lg">
          
          <h2 className="title-font font-bold text-3xl text-gray-900">50+</h2>
          <p className="leading-relaxed font-bold">Backend Project</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="zoom-in-up">
        <div className="border-2 border-gray-200 bg-blue-300 px-4 py-6 rounded-lg">
          
          <h2 className="title-font font-bold text-3xl text-gray-900">300+</h2>
          <p className="leading-relaxed font-bold">Placement Question</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
