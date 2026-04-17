import React, { useContext } from 'react'
import Accepttask from './Accepttask'
import Newtask from './Newtask'
import Completetask from './Completetask'
import Failedtask from './Failedtask'
import { Authcontext } from '../../context/Authprovider'

const Tasklist = ({ data }) => {

  const [Userdata, setUserdata] = useContext(Authcontext)

  if (!data || !data.tasks) return null

  return (
    <div
      id='tasklist'
      className='flex flex-wrap md:flex-nowrap md:overflow-x-auto items-start justify-start gap-4 w-full py-5 mt-6 sm:mt-10 pb-4 '
    >
      {data.tasks.map((elem, idx) => {

        if (elem.active) {
          return <Accepttask key={idx} data={elem} />
        }
        if (elem.newTask) {
          return <Newtask key={idx} data={elem} />
        }
        if (elem.completed) {
          return <Completetask key={idx} data={elem} />
        }
        if (elem.failed) {
          return <Failedtask key={idx} data={elem} />
        }
        return null

      })}
    </div>
  )
}

export default Tasklist