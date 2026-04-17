import React from 'react'

const Tasknumber = ({ data }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 sm:mt-10'>
      <div className='rounded-xl px-4 sm:px-5 py-8 sm:py-10 bg-red-400'>
        {/* FIX: was showing taskCounts.completed by mistake */}
        <h2 className='text-xl sm:text-2xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-lg sm:text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl px-4 sm:px-5 py-8 sm:py-10 bg-green-400'>
        <h2 className='text-xl sm:text-2xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-lg sm:text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='rounded-xl px-4 sm:px-5 py-8 sm:py-10 bg-yellow-400'>
        <h2 className='text-xl sm:text-2xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-lg sm:text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='rounded-xl px-4 sm:px-5 py-8 sm:py-10 bg-red-600'>
        <h2 className='text-xl sm:text-2xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-lg sm:text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default Tasknumber