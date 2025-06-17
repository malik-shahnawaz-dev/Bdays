import React from 'react'

const SingleUser = ({avatar_url, login, type}) => {
  return (
    <>

        <div data-aos="fade-up" className="flex flex-col shadow-md rounded-md border border-gray-400">
            <img src={avatar_url} alt="" />
            <div className='p-3'>
            <h3 className='text-xl font-semibold capitalize'>{login}</h3>
            <p className='py-2'>Type : {type}</p>
            </div>
        </div>
    
    </>
  )
}

export default SingleUser