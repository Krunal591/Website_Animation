import React, { createContext, useState } from 'react'
export const navContext = createContext()
const Navcontext = ({ children }) => {
  const [navOpen, setnavOpen] = useState(false)
  return (
    <div>
       <navContext.Provider value={[navOpen,setnavOpen]}>
        {children}
       </navContext.Provider>
    </div>
  )
}

export default Navcontext
