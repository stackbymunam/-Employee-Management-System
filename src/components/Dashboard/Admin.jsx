import React from 'react'
import Header from '../otherthings/Header'
import Createtask from '../otherthings/Createtask'
import Alltask from '../otherthings/Alltask'

const Admin = () => {
    return (
        <div className='p-3 sm:p-5 bg-[#1c1c1c] mt-3 sm:mt-5 rounded'>
            <Header />
            <Createtask/>
            <Alltask/>
        </div>
    )
}

export default Admin