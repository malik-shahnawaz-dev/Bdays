import React, { useState } from 'react'
import SingleBday from './SIngleBday'
import { bdays } from './data'

const Birthdays = () => {

    const [remove, setRemove] = useState(bdays)
    const removeData = () => {
        if(remove.length > 0){
            setRemove([]);
        }else{
            setRemove(bdays);
        }
    }


    const removeBday = (id) => {
        // console.log(id)
        const newBday = remove.filter((item, index) => {
            return item.id !== id;
        })

        setRemove(newBday)
    }
    
    
    
    
  return (
    <>
        <div className='w-full sm:w-[70%] lg:w-[50%] border rounded-md shadow p-6 mx-auto mt-10'>
            <h1 className='uppercase font-bold text-3xl text-blue-700 text-center'>{remove.length} Birthdays Today</h1>

            {remove?.map((item, index)=>{
                return <SingleBday key={item.id} {...item} removeBday={removeBday} />
            })}
            
            <button onClick={removeData} className={`cursor-pointer w-full ${remove.length > 0 ? "bg-gradient-to-r from-blue-600 to-blue-800" : "bg-gradient-to-r from-green-600 to-green-800"} text-white p-2 rounded-md shadow-md`}>
                {remove.length > 0 ? "Remove All" : "Refresh All"}
            </button>

        </div>
    </>
  )
}

export default Birthdays