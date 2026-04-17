import React, { useState } from 'react'

const Header = ({data}) => {

    const username = data ? data.firstName : 'Admin'

    const logoutuser = () => {
      localStorage.setItem('loggedInUser' , '')
      window.location.reload();
    };

  return (
    <div className='flex items-center justify-between'>
       <h1 className='text-xl sm:text-2xl text-white font-medium'>Hello <br /> <span className='text-2xl sm:text-3xl font-semibold'>{username} 👋</span></h1>
         <button onClick={logoutuser} className='bg-red-600 text-sm sm:text-base font-medium text-white px-3 sm:px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header