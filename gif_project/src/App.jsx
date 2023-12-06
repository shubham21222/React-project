import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'


 const App = () => {
  return (
    <div className='w-full h-screen flex flex-col background relative overflow-x-hidden items-center'>
      <h1 className= 'absolute bg-white rounded-lg w-11/12 text-center mt-[40px] ml-[25px] px-10 py-2 text-4xl mx-auto font-bold'>RANDOM GIFS</h1>
      <div  className='flex flex-col w-full items-center gap-y-10 mt-[150px]' >
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}


export  default App;