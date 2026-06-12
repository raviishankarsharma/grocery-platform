import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa6'
import Button from '../Button/Button'

const Cards = (props) => {
  return (
    <div className='bg-zinc-100 p-5 rounded-xl'>

        {/* CArd-Icons */}
        <div className='flex justify-between'>
            <span className='text-3xl text-zinc-300'>
                <FaHeart />
            </span >
            <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white py-3 px-4 rounded-lg text-xl'>
                <FaPlus />
            </button>
        </div>

        {/* Card-Image */}
        <div className='w-full h-50'>
            <img src={props.image}  className='w-full h-full object-contain'/>
        </div>

        {/* Card-Content */}
        <div className='text-center'> 
            <h3 className='text-2xl font-semibold'>{props.name}</h3>
            <p className='text-2xl font-bold mt-4 mb-3'>${props.price.toFixed(2)}</p>
            <Button content='Shop Now'/>
        </div>
    </div>
  )
}

export default Cards