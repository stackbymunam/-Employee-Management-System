import React from 'react'

const Completetask = ({ data }) => {
  return (
    <div className='w-full sm:w-72 md:w-80 shrink-0'>
      <div className='p-5 bg-blue-400 rounded-xl h-full'>

        <div className='flex justify-between items-center mt-5 text-white'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>

        <h2 className='mt-5 text-xl sm:text-2xl font-semibold text-white'>{data.title}</h2>
        <p className='text-sm mt-2 text-white'>{data.description}</p>

        <div className='mt-2'>
          <button className='w-full bg-green-600 text-white py-1 px-2 text-sm rounded'>
            Completed
          </button>
        </div>

      </div>
    </div>
  )
}

export default Completetask