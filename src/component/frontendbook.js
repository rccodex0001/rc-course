// import React, { useEffect, useState } from 'react';
// import img from './frontend.jpg';

// const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// export default function Frontend() {
//   const [stars, setStars] = useState([]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       const newStar = {
//         id: Date.now(),
//         x: clientX+2,
//         y: clientY+2,
//         fontSize: `${rand(10, 30)}px`,
//         color: `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`,
//         animationDuration: `${rand(200, 400)}ms` // Random duration for the falling animation
//       };
//       setStars(prevStars => [...prevStars, newStar]);

//       setTimeout(() => {
//         setStars(prevStars => prevStars.filter(star => star.id !== newStar.id));
//       }, parseInt(newStar.animationDuration)); // Remove the star after the animation duration
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div>
//     {stars.map((star, index) => (
//       <div
//         key={index}
//         className="star"
//         style={{
//           position: 'fixed',
//           top: star.y,
//           left: star.x,
//           color: star.color,
//           fontSize: star.fontSize,
//           animationDuration: star.animationDuration
//         }}
//       >
//         &#10022;
//       </div>
//     ))}

//     <section className="text-gray-600 body-font" data-aos="fade-up" data-aos-duration="1500">
//       <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//         <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-800">Our Frontend Course
//           </h1>
//           <div className='font-semibold text-lg my-5' >
//             <li> 100+ project with source code  </li>
//             <li> 50+ backend project with source code  </li>
//             <li> 25+ Revision Notes  </li>
//             <li> 300+ Placement Question   </li>
//           </div> 
//           <button 
//             data-aos="zoom-in-up" 
//             className="button inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg"
//           >
//             Frontend Course &nbsp;<span className="line-through md:inline"> ₹699</span>&nbsp; 299/- Only 
//           </button>

//         </div>
//         <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//           <img className="object-cover object-center rounded" alt="hero" src={img}/>
//         </div>
//       </div>
//     </section>
//     <style>{`
//       .button {
//         animation: shake 0.5s ease-in-out infinite;
//       }

//       @keyframes shake {
//         0% { transform: translateX(0); }
//         25% { transform: translateX(-5px); }
//         50% { transform: translateX(5px); }
//         75% { transform: translateX(-5px); }
//         100% { transform: translateX(0); }
//       }
//     `}</style>
//   </div>
//   )
// }

import React, { useEffect, useState } from 'react';
import img from './frontend.jpg';

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function Frontend() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const newStar = {
        id: Date.now(),
        x: clientX + 2,
        y: clientY + 2,
        fontSize: `${rand(10, 30)}px`,
        color: `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, 0.2)`,
        animationDuration: `${rand(200, 400)}ms` // Random duration for the falling animation
      };
      setStars(prevStars => [...prevStars, newStar]);

      setTimeout(() => {
        setStars(prevStars => prevStars.filter(star => star.id !== newStar.id));
      }, parseInt(newStar.animationDuration)); // Remove the star after the animation duration
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            position: 'fixed',
            top: star.y,
            left: star.x,
            color: star.color,
            fontSize: star.fontSize,
            animationDuration: star.animationDuration
          }}
        >
          <svg width="20" height="20">
            <circle cx="10" cy="10" r="10" fill={star.color} />
          </svg>
        </div>
      ))}

      <section className="text-gray-600 body-font" data-aos="fade-up" data-aos-duration="1500">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-800">Our Frontend Course</h1>
            <div className='font-semibold text-lg my-5' >
              <li> 100+ project with source code  </li>
              <li> 50+ backend project with source code  </li>
              <li> 25+ Revision Notes  </li>
              <li> 300+ Placement Question   </li>
            </div> 
            <a href='https://payments.cashfree.com/forms/frontend'>
            <button 
              data-aos="zoom-in-up" 
              className="button inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg"
            >
              Frontend Course &nbsp;<span className="line-through md:inline"> ₹699</span>&nbsp; 199/- Only 
            </button>
            </a>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={img}/>
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




// import React from 'react';
// import img from './frontend.jpg';

// export default function Frontend() {
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
//         <div className="lg:w-1/2 lg:pr-12 lg:mb-0 mb-10 w-full md:text-left text-center">
//           <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//             Explore Our Frontend Course
//           </h1>
//           <p className="leading-relaxed mb-8">
//             Unlock the potential of modern frontend development with our comprehensive course. Gain access to a wide array of projects, revision notes, and placement questions.
//           </p>
//           <div className="flex justify-center md:justify-start">
//             <button className="inline-flex text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enroll Now</button>
//           </div>
//         </div>
//         <div className="lg:w-1/2 lg:w-5/6 md:w-3/4 sm:w-5/6 w-full">
//           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto">
//             <div className="rounded-lg overflow-hidden">
//               <img
//                 className="object-cover object-center h-full w-full"
//                 alt="hero"
//                 src={img}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React, { useEffect } from 'react';
// import img from './frontend.jpg';

// export default function Frontend() {
//   useEffect(() => {
//     let x1 = 0, y1 = 0;
//     const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
//     const dist_to_draw = 50;
//     const delay = 1000;
//     const fsize = ['1.1rem', '1.4rem', '.8rem', '1.7rem'];
//     const colors = ['#E23636', '#F9F3EE', '#E1F8DC', '#B8AFE6', '#AEE1CD', '#5EB0E5'];

//     const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
//     const selRand = (o) => o[rand(0, o.length - 1)];
//     const distanceTo = (x1, y1, x2, y2) => Math.sqrt((Math.pow(x2 - x1, 2)) + (Math.pow(y2 - y1, 2)));
//     const shouldDraw = (x, y) => distanceTo(x1, y1, x, y) >= dist_to_draw;

//     const addStr = (x, y) => {
//       const str = document.createElement("div");
//       str.innerHTML = '&#10022;';
//       str.className = 'star';
//       str.style.top = `${y + rand(-20, 20)}px`;
//       str.style.left = `${x}px`;
//       str.style.color = selRand(colors);
//       str.style.fontSize = selRand(fsize);
//       document.body.appendChild(str);

//       const fs = 10 + 5 * parseFloat(getComputedStyle(str).fontSize);

//       str.animate({
//         translate: `0 ${(y + fs) > vh ? vh - y : fs}px`,
//         opacity: 0,
//         transform: `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`
//       }, {
//         duration: delay,
//         fill: 'forwards',
//       });

//       setTimeout(() => {
//         str.remove();
//       }, delay);
//     }

//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       if (shouldDraw(clientX, clientY)) {
//         addStr(clientX, clientY);
//         x1 = clientX;
//         y1 = clientY;
//       }
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <section className="text-gray-600 body-font ">
//       <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
//         <div className="lg:w-1/2 lg:pr-12 lg:mb-0 mb-10 w-full md:text-left text-center">
//           <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//             Explore Our Frontend Course
//           </h1>
//           <p className="leading-relaxed mb-8">
//             Unlock the potential of modern frontend development with our comprehensive course. Gain access to a wide array of projects, revision notes, and placement questions.
//           </p>
//           <div className="flex justify-center md:justify-start">
//             <button className="inline-flex text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enroll Now</button>
//           </div>
//         </div>
//         <div className="lg:w-1/2 lg:w-5/6 md:w-3/4 sm:w-5/6 w-full">
//           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto">
//             <div className="rounded-lg overflow-hidden">
//               <img
//                 className="object-cover object-center h-full w-full"
//                 alt="hero"
//                 src={img}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

