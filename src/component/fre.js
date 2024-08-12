import React, { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Fre() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div>
      <section className=" bg-gray-100">
        <div className="container  px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-left text-gray-800 lg:text-6xl">
            Frequently asked questions
          </h1>

          <div className="mt-12 space-y-8">
            {
            [
            //   {
            //     question: `01. What is Unikon.<span style={{ color: 'rgb(20, 143, 128)' }}>ai</span>?`,
            //     answer:
            //       `Unikon.<span style={{ color: 'rgb(20, 143, 128)' }}>ai</span> is a market place that allows users to connect with anyone, anytime, anywhere for any personal and professional queries alike.`,
            //   },
            //   {
            //     question: '02. How can I get monetised on the platform?',
            //     answer:
            //       `Unikon.<span style={{ color: 'rgb(20, 143, 128)' }}>ai</span> gives the flexibility to anyone to determine the value of their services. We just charge a flat 20% platform fee to give a seamless experience for all users.`,
            //   },
            //   {
            //     question: `03. What kind of services can be offered on Unikon.<span style={{ color: 'rgb(20, 143, 128)' }}>ai</span>?`,
            //     answer:
            //       'You can offer services based on your expertise which can range from business development, marketing, career advice, mental health and more.',
            //   },
            //   {
            //     question: '04. Can I host seminars and workshops on the platform?',
            //     answer:
            //       'The Unishow feature enables users to host live online seminars, workshops, or presentations on various topics using the platform’s tools and resources.',
            //   },
            //   {
            //     question: '05. How are payments processed on the platform?',
            //     answer:
            //       `Unikon. <span style={{ color: 'rgb(20, 143, 128)' }}>ai</span> uses a secure payment system where users can make transactions using credit/debit cards, digital wallets, or other accepted payment methods to add money to their wallet.`,
            //   },
            {
                question: 'What will I learn from this eBook?',
                answer:
                  `You will learn how to build a full-stack web application using the MERN stack. This eBook covers topics such as setting up the development environment, creating a RESTful API, building a user interface with React, connecting to a MongoDB database, and deploying your application. You’ll also learn best practices and tips for MERN development.`,
              },
              {
                question: 'Is this eBook up-to-date with the latest versions of MERN stack components?',
                answer:
                  `This eBook ensures you’re at the forefront of web development, providing you with the most up-to-date and relevant knowledge for secure, high-performance applications. With a focus on the latest MERN stack versions, this eBook equips you with the tools, practices, and skills required to excel in today’s ever-evolving development landscape.`,
              },
              {
                question: `Do I need prior programming experience to use this eBook?`,
                answer:
                  'Some prior programming experience is beneficial, but this eBook provides explanations and examples that are accessible to beginners. If you’re new to web development or JavaScript, it’s recommended to learn the basics first, but the eBook will still be a valuable resource.',
              },
              {
                question: 'Can I use the knowledge from this eBook to build production-ready applications?',
                answer:
                  'Yes, the eBook is designed to give you the knowledge and skills needed to build production-ready MERN applications. However, building production applications may require additional considerations like security, scalability, and best practices, which you can explore further after mastering the fundamentals presented in this eBook.',
              },
              {
                question: 'Who is this eBook for?',
                answer:
                  `This eBook is for web developers, both beginners and experienced, who want to learn how to build web applications using the MERN stack. It covers a wide range of topics, from the basics to advanced concepts, making it suitable for various skill levels.`,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-2 border-gray-100 rounded-lg dark:border-gray-700"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
                data-aos="zoom-in" data-aos-duration="2500"
              >
                <button className="flex items-center justify-between w-full p-8">
                  <h1 className="font-semibold text-2xl text-gray-700"  dangerouslySetInnerHTML={{
        __html: item.question.replace(/<span style={{ color: 'rgb\(20, 143, 128\)' }}>ai<\/span>/g, '<span style="color:rgb(20, 143, 128);">ai</span>')
      }}></h1>

                  <span className="text-blue-500  bg-gray-300 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 transform ${
                        hoveredIndex === index ? 'rotate-180' : 'rotate-0'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                
                    {hoveredIndex === index && (
  <div>
    <hr className="border-gray-700" />
    <p
      className="p-8 text-xl text-gray-900 text-left"
      dangerouslySetInnerHTML={{
        __html: item.answer.replace(/<span style={{ color: 'rgb\(20, 143, 128\)' }}>ai<\/span>/g, '<span style="color:rgb(20, 143, 128);">ai</span>')
      }}
    ></p>
  </div>
)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
