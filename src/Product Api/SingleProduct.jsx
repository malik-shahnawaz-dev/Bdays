import React, { useState } from 'react'
import { FaChartArea, FaDollarSign, FaPrint, FaSackDollar } from 'react-icons/fa6'
import { TbCategory, TbDimensions } from 'react-icons/tb'
import SingleReview from './SingleReview'
import { FaArrowAltCircleDown } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'

const SingleProduct = ({images, brand, category, description, dimensions, price, rating, stock, availabilityStatus, discountPercentage, reviews}) => {
    const [show, setShow] = useState(false)
    
    const {width, height, depth} = dimensions;

    const [showReview, setShowReview] = useState(false)

    const handleReview = () => {
        setShowReview(!showReview)
    }

    let actualPrice = ((price * 100) / (100 - discountPercentage)).toFixed(2);
    
  return (
    <>

        <div data-aos="fade-up" className="flex flex-col shadow-md rounded-md border border-blue-300">

            <img src={images[0]} className='w-50 mx-auto' />

            <div className="p-4">
                <h3 className='text-xl font-semibold capitalize text-gray-700'>{brand ? brand : "No Title"}</h3>

                <div className="flex justify-between">
                    <p onClick={()=> setShow(!show)} className='text-gray-500 text-sm'>{show ? description.substr(0, description.length) : description.substr(0, 50)} <button className={`${show ? "text-red-500" : "text-blue-500"} cursor-pointer`}>{show ? "Read Less" : "Read More ..."}</button></p>

                    <MdArrowDropDown onClick={handleReview} className={`${showReview ? "rotate-180" : "rotate-0"} transition`} cursor={"pointer"} size={30} color='#666666'/>
                    
                </div>
                
                <div className="flex flex-col gap-2 my-2">

                    <div className="flex capitalize text-sm">
                        <div className='flex items-center gap-2 text-[#666666]'><TbCategory color='#666666'/> {category}</div>
                    </div>

                    <div className="flex">
                        <div className='flex items-center gap-2 text-[#666666] text-sm'><TbDimensions/> {width} x {height} x {depth}</div>
                    </div>

                    <div className="flex">
                        <div className='flex items-center gap-2 text-[#666666]'><FaSackDollar color='#666666'/> Price : ${price} <span className='ms-1 line-through text-sm bg-blue-400 rounded-full px-2 text-white'>${actualPrice}</span></div>
                    </div>

                    {Array.from({length:Math.round(rating)}).map((_, index)=>{
                        return "⭐"
                    })}

                   
                    <div className={` ${showReview ? "h-[220px]" : "h-0"} overflow-hidden transition-all`}>
                        {reviews?.map((review, index)=>{
                            return <SingleReview showReview={showReview} setShowReview={setShowReview} key={index} {...review}/>
                        })}
                    </div>
                    
                </div>


            </div>
        </div>
           
    </>
  )
}

export default SingleProduct