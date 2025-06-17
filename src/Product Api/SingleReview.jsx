import moment from 'moment'
import React from 'react'

const SingleReview = ({comment, date, reviewerName, rating}) => {
  return (
    <>
        <div className="flex items-center justify-between text-gray-500 border border-gray-100 rounded-md shadow p-2">

            <div className="flex items-center gap-2 w-full">
                <img src="https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png" className='w-[50px] h-[50px] rounded-full' />

                <div className='text-sm'>
                    <p className='text-[10px]'>
                            {Array.from({length:Math.round(rating)}).map((_, index)=>{
                                return "⭐"
                            })}
                        </p>
                    <h3 className='text-md font-semibold text-gray-700'>{reviewerName}</h3>
                    <p>{comment}</p>
                </div>
            </div>

            <div className="text-xs">
                {moment(date).format('L')}
            </div>
            
        </div>  
    </>
  )
}

export default SingleReview