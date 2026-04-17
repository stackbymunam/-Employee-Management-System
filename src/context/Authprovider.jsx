import React, { createContext, useEffect, useState } from 'react'
import {setLocalStorage , getLocalStorage} from '../utils/Localstorage'


export const Authcontext = createContext();

const Authprovider = ({ children }) => {
    const [Userdata, setUserdata] = useState(null);


  useEffect(() => {
        const {employees} = getLocalStorage()
        setUserdata(employees)
    }, [])

    return (
       
            <Authcontext.Provider value={[Userdata , setUserdata]}  >
                {children}
            </Authcontext.Provider>
       
    )
}

export default Authprovider
