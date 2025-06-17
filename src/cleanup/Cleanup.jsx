import React, { useEffect, useState } from 'react'

const Cleanup = () => {

    const [size, setSize] = useState(window.innerWidth);


    const handleSize = () => {
        setSize(window.innerWidth)
    }
    
    
    useEffect(()=>{

        window.addEventListener("resize", handleSize);
        console.log('use effect ran')


        return ()=>{
            window.removeEventListener("resize", handleSize)
            console.log("Clean up ran")
        }

    })
    
  return (
    <>

        <h1 className='text-4xl text-center text-blue-700'>Window Size : ${size}</h1>
        
    </>
  )
}

export default Cleanup