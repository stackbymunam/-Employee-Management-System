import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authprovider'

const Alltask = () => {
  const [userData] = useContext(Authcontext)

  if (!userData) return null

  return (
    <div className='bg-[#1c1c1c] p-3 sm:p-5 rounded mt-5'>

      {/* Desktop Table - hidden on mobile */}
      <div className='hidden md:block'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
          <h3 className='text-lg font-medium w-1/5'>New Task</h3>
          <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
          <h5 className='text-lg font-medium w-1/5'>Completed</h5>
          <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div>
          {userData.map(function (elem, idx) {
            return (
              <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
                <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
                <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
                <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
                <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
              </div>
            )
          })}
        </div>
      </div>

      
      <div className='block md:hidden'>
        {userData.map(function (elem, idx) {
          return (
            <div key={idx} className='border-2 border-emerald-500 mb-3 p-3 rounded'>
              <h2 className='text-base font-semibold text-white mb-2'>{elem.firstName}</h2>
              <div className='grid grid-cols-2 gap-2'>
                <div className='bg-[#2a2a2a] rounded p-2'>
                  <p className='text-xs text-gray-400'>New Task</p>
                  <p className='text-sm font-semibold text-blue-400'>{elem.taskCounts.newTask}</p>
                </div>
                <div className='bg-[#2a2a2a] rounded p-2'>
                  <p className='text-xs text-gray-400'>Active Task</p>
                  <p className='text-sm font-semibold text-yellow-400'>{elem.taskCounts.active}</p>
                </div>
                <div className='bg-[#2a2a2a] rounded p-2'>
                  <p className='text-xs text-gray-400'>Completed</p>
                  <p className='text-sm font-semibold text-white'>{elem.taskCounts.completed}</p>
                </div>
                <div className='bg-[#2a2a2a] rounded p-2'>
                  <p className='text-xs text-gray-400'>Failed</p>
                  <p className='text-sm font-semibold text-red-600'>{elem.taskCounts.failed}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Alltask