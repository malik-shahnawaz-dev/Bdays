import React, { useState } from 'react'

const ChangeTitle = () => {

    const [title, setTitle] = useState('Change this title')
    
    const handleChange = () => {
        if(title=='Change this title'){
            setTitle('Title Changed')
        }else{
            setTitle('Change this title')
        }
    }
  return (
    <>

        <div className="container w-[50%] shadow-md text-center mx-auto mt-10 p-5 bg-teal-100">
            <h3 className='text-blue-800 font-bold text-3xl'>{title}</h3>
            <button onClick={handleChange} className='mt-5 bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white px-4 py-2 rounded-md'>Change</button>
        </div>
        
    </>
  )
}

export default ChangeTitle;