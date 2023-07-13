import React from 'react'

function Footer() {
  return (
    <footer class="text-white body-font bg-purple-900">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img className='w-11 h-11' src="https://img.icons8.com/?size=512&id=sXlOt49DOVAk&format=png" alt="" />
      <span class="ml-3 text-xl text-white" >MediCare</span>
    </a>
    <p class="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Medicare-
      <a href="https://twitter.com/knyttneve" class="text-gray-300 ml-1" rel="noopener noreferrer" target="_blank">@MedicarePharma</a>
    </p>
   
  </div>
</footer>
   
    
  )
}

export default Footer