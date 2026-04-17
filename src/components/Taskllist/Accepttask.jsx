import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authprovider'

const Accepttask = ({ data }) => {

  const [userdata, setUserdata] = useContext(Authcontext)

  const handleComplete = () => {
    const updatedEmployees = userdata.map((emp) => {
      // Check if this task belongs to this employee
      const taskIndex = emp.tasks.findIndex(
        (task) => task.title === data.title && task.date === data.date && task.category === data.category
      )

      if (taskIndex === -1) return emp  // task not in this employee, skip

      const updatedTasks = emp.tasks.map((task, idx) => {
        if (idx === taskIndex) {
          return { ...task, active: false, completed: true }
        }
        return task
      })

      return {
        ...emp,
        tasks: updatedTasks,
        taskCounts: {
          ...emp.taskCounts,
          active: Math.max(0, emp.taskCounts.active - 1),
          completed: emp.taskCounts.completed + 1
        }
      }
    })

    setUserdata(updatedEmployees)
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
  }

  const handleFail = () => {
    const updatedEmployees = userdata.map((emp) => {
      // Check if this task belongs to this employee
      const taskIndex = emp.tasks.findIndex(
        (task) => task.title === data.title && task.date === data.date && task.category === data.category
      )

      if (taskIndex === -1) return emp  // task not in this employee, skip

      const updatedTasks = emp.tasks.map((task, idx) => {
        if (idx === taskIndex) {
          return { ...task, active: false, failed: true }
        }
        return task
      })

      return {
        ...emp,
        tasks: updatedTasks,
        taskCounts: {
          ...emp.taskCounts,
          active: Math.max(0, emp.taskCounts.active - 1),
          failed: emp.taskCounts.failed + 1
        }
      }
    })

    setUserdata(updatedEmployees)
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
  }

  return (
    <div className='w-full sm:w-72 md:w-80 shrink-0'>
      <div className='p-5 bg-red-400 rounded-xl h-full'>

        <div className='flex justify-between items-center mt-5 text-white'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>

        <h2 className='mt-5 text-xl sm:text-2xl font-semibold text-white'>{data.title}</h2>
        <p className='text-sm mt-2 text-white'>{data.description}</p>

        <div className='flex justify-between mt-4 gap-2'>
          <button
            onClick={handleComplete}
            className='bg-green-900 py-1 px-2 text-sm flex-1 rounded'
          >
            Mark as completed
          </button>
          <button
            onClick={handleFail}
            className='bg-red-700 py-1 px-2 text-sm flex-1 rounded'
          >
            Mark as failed
          </button>
        </div>

      </div>
    </div>
  )
}

export default Accepttask