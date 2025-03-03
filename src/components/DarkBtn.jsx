import { useState, useEffect } from 'react'
import React from 'react'

const DarkBtn = () => {

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === "dark"
    })


    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
            <button onClick={() => setDarkMode(!darkMode)} className='className="p-2 bg-gray-200 dark:bg-gray-700 rounded"'>
                adddarkmode
            </button>
        
    )
}

export default DarkBtn
