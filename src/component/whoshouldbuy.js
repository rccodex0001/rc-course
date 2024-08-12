import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
// 
export default function Whoshouldbuy() {
  return (
    <div >

<section class="text-gray-600 body-font bg-gray-300 py-6" >

  <div class="container px-5 py-1 mx-auto">
    <div class="flex flex-col text-center w-full mb-10">
      {/* <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2> */}
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Who Should Buy this EBook?</h1>
      
    </div>
    <div class="flex flex-wrap -m-4" data-aos="fade-up" data-aos-duration="1500">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col border-blue-600 border-4 shadow-xl zoom-out-on-hover ">
          <div class="flex items-center mb-3 border-b-4 border-gray-950 rounded-md">
           
            <h2 class="text-blue-900 text-2xl title-font  font-bold ">Students</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-lg text-left">Computer science, software engineering, and web development students seeking to gain practical skills in web development.</p>
           
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col border-blue-600 border-4 shadow-xl zoom-out-on-hover">
          <div class="flex items-center mb-3 border-b-4 border-gray-950 rounded-md">
           
            <h2 class="text-blue-900 text-2xl title-font  font-bold ">Web Developer</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-lg text-left">Both beginners and experienced developers looking to expand their skills or learn how to build web applications using the MERN stack.
        </p>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col border-blue-600 border-4 shadow-xl zoom-out-on-hover">
          <div class="flex items-center mb-3 border-b-4 border-gray-950 rounded-md">
           
            <h2 class="text-blue-900 text-2xl title-font  font-bold ">Freelancer</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-lg text-left">Freelance developers aiming to broaden their service offerings by becoming full-stack developers.</p>
           
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col border-blue-600 border-4 shadow-xl zoom-out-on-hover">
          <div class="flex items-center mb-3 border-b-4 border-gray-950 rounded-md">
           
            <h2 class="text-blue-900 text-2xl title-font  font-bold ">Tech Enthusiasts</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-lg text-left">Individuals passionate about technology and interested in understanding the MERN stack for personal or side projects.</p>
           
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col border-blue-600 border-4 shadow-xl zoom-out-on-hover">
          <div class="flex items-center mb-3 border-b-4 border-gray-950 rounded-md">
           
            <h2 class="text-blue-900 text-2xl title-font  font-bold ">Anyone Interested in Web Development</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-lg text-left">People curious about web development and its technologies can use the eBook as a valuable learning resource.</p>
           
          </div>
        </div>
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
</section>
<style>
{`
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
        transform: scale(1.1);
      }
    `}
</style>
    </div>
  )
}
