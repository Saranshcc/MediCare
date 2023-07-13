import React from 'react'
import Header from "./Header";
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
    // const {text} = useTypewriter({
    //     words:['developer', 'designer', 'photographer'],
    //     loop :{},
    //     typeSpeed :120,
    //     deleteSpeed : 120,
    // });
    function myFunction() {
        alert("Your Appointment has been Scheduled")
    };
  return (
   
    < div className="bg-gradient-to-r from-purple-600 to-indigo-500">
    <Header/>
    <section className="text-gray-700 body-font bg-gradient-to- l from-indigo-500 ... ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font text-3xl mb-4 font-medium text-black">Caring For Life
        <br /><span className='text-5xl py-5'>By Practicing {' '} </span>
       
      
        <span className='text-6xl text-white'>
       
          <Typewriter
            words={['Compassion!', 'Empathy!', 'Skill!', 'Reliablity!']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
    
          />
        </span>
    
      
      </h1>
      <p className="mb-8 leading-relaxed">"Experience exceptional care and rejuvenate your health with MediCare, where expertise meets compassion."</p>
      <div className="flex justify-center">
        {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">

     <div className="flex items-center justify-center p-12 bg-white rounded-xl">

  <div className="mx-auto w-full max-w-[550px]; ">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="mb-5">
        <label
          for="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          required
        />
      </div>
      <div className="mb-5">
        <label
          for="phone"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="email"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          required
       />
      </div>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="date"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="time"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

     

      <div>
        <button onClick={myFunction}
          className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Book Appointment
        </button>
      </div>
    </form>
  </div>
</div>
      {/* <img className="object-cover object-center rounded" alt="hero" src="https://plus.unsplash.com/premium_photo-1661310003900-44d2d2cc488a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/> */}
    </div>
  </div>
</section>
</div>
  )
}

export default Hero