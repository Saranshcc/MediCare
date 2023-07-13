import React from 'react'
import ReactPlayer from 'react-player'

function Video() {
  return (
    <div className='flex items-center justify-center h-scren bg-purple-200'>
        <div className='h-50% w-50%' >
        <ReactPlayer controls  url='https://youtu.be/I6vUyWevqK8'
        //    height='50%'
        //    width='50%'    
                />

        </div>

           


    </div>
  )
}

export default Video