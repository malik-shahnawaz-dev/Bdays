import React from 'react'


const SIngleBday = ({id, name, image, age, removeBday}) => {
  return (
    <>

        <div className="my-3 p-3 rounded-md flex justify-between items-center shadow-sm">

            <div className="flex gap-3 items-center">
                <img src={image} className='w-10 h-10' />
                <div>
                    <h4 className='text-lg font-bold'>{name}</h4>
                    <p>{age} Years</p>
                </div>
            </div>

            <button onClick={()=>removeBday(id)} className='p-2 bg-blue-400 rounded-md text-white cursor-pointer hover:bg-blue-500'>Remove</button>
            
        </div>
    
    </>
  )
}

export default SingleBday