import React, { useEffect, useState } from 'react'
import SingleUser from './SingleUser';

const Apis = () => {


    const api = "https://api.github.com/users"

    const [users, setUsers] = useState([])
    
    const fetchData = async () => {
        const response = await fetch(api);
        const data = await response.json()
        setUsers(data)
        console.log(data)
    };

    useEffect(() => {
        fetchData();
    }, [])

    
    
  return (
    <>
        <h1 className='text-4xl text-center text-blue-700 my-5 font-bold'>Github Users</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4'>

        {users?.map((item, index) => {
            return <SingleUser  key={index} {...item}/>
        })}

        </div>
        
    </>
  )
}

export default Apis