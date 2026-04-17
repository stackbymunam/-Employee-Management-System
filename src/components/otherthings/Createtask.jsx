import React, { useContext, useState } from 'react'
import { Authcontext } from '../../context/Authprovider'

const Createtask = () => {

  const [Userdata, setUserdata] = useContext(Authcontext)

  const [title, settitle] = useState('')
  const [date, setdate] = useState('')
  const [asign, setasign] = useState('')
  const [category, setcategory] = useState('')
  const [description, setdescription] = useState('')

  const submithandler = (e) => {
    e.preventDefault()

    const newTask = {
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    }

    const updatedData = Userdata.map((elem) => {
      if (asign.trim().toLowerCase() === elem.firstName.toLowerCase()) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1
          }
        }
      }
      return elem
    })

    setUserdata(updatedData)
    localStorage.setItem('employees', JSON.stringify(updatedData))

    settitle('')
    setdate('')
    setasign('')
    setcategory('')
    setdescription('')
  }

  return (
    <div className='p-3 sm:p-5 bg-[#1c1c1c] mt-5 rounded'>
      <form
        onSubmit={(e) => { submithandler(e) }}
        className='flex flex-col md:flex-row flex-wrap w-full items-start justify-between text-white gap-4 md:gap-0'
      >
        <div className='w-full md:w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              value={title}
              onChange={(e) => settitle(e.target.value)}
              className='text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border border-white mb-4'
              type='text'
              placeholder='Make a UI design'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              value={date}
              onChange={(e) => setdate(e.target.value)}
              className='text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border border-white mb-4 text-white scheme-dark'
              type='date'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input
              value={asign}
              onChange={(e) => setasign(e.target.value)}
              className='text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border border-white mb-4'
              type='text'
              placeholder='Employee name'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              className='text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border border-white mb-4'
              type='text'
              placeholder='design, dev, etc'
            />
          </div>
        </div>

        <div className='w-full md:w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-white mb-4'
          ></textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
            Create Task
          </button>
        </div>

      </form>
    </div>
  )
}

export default Createtask