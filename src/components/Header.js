import React from 'react'

function Header() {
  return (


    <header class="text-white body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    <img className='w-11 h-11' src="https://img.icons8.com/?size=512&id=sXlOt49DOVAk&format=png" alt="" />
      <span class="ml-3 text-xl">MediCare</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 cursor-pointer hover:text-gray-900">CaseStudy</a>
      <a class="mr-5 cursor-pointer hover:text-gray-900">About</a>
      <a class="mr-5 cursor-pointer hover:text-gray-900">Contact Us</a>
     
    </nav>
    {/* <button class="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-yellow-200 rounded text-base mt-4 md:mt-0">Button
     
    </button> */}
  </div>
</header>

  )
}

export default Header