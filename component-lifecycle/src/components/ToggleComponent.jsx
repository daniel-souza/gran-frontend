import React, { useState } from 'react'

const darkColor = 'bg-red-800 text-blue-200 hover:bg-red-600';
const lightColor = 'bg-blue-800 text-red-200 hover:bg-blue-600';

export default function ToggleComponent({ title, children, darkMode }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`m-10 flex items-stretch flex-col gap-1 justify-items-stretch ${darkMode ? "bg-black" : "bg-blue-200"}`}>
      <button className={`p-2 ${darkMode ? darkColor: lightColor }  text-lg font-bold`}
        onClick={() => setToggle(!toggle)}>
        Toggle Component {title}
      </button>
      {toggle && (
        <div className='m-1 flex items-stretch flex-col gap-3 justify-items-stretch'>
          <hr className='border-2 border-red-800' />
          {children}
        </div>
      )}
    </div>
  )
}
