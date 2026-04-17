import React from 'react'
import Header from '../otherthings/Header'
import Tasknumber from '../otherthings/Tasknumber'
import Tasklist from '../Taskllist/Tasklist'

const Emloyee = ({data}) => {
  return (
    <div className='p-4 sm:p-6 md:p-10 bg-[#1C1C1C] min-h-screen'>
        <Header data={data}/>
        <Tasknumber data={data}/>
        <Tasklist data={data}/>
    </div>
  )
}

export default Emloyee