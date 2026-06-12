import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-right bg-contain bg-no-repeat ' style={{backgroundImage: `url(${FreshFruits})`}}>
        <div className='flex md:flex-row flex-col max-w-350 mx-auto px-10 py-10 bg-amber-300 md:bg-transparent '>
            <span className='md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 md:self-center h-fit'>20%</span>
            <div className='max-w-175 '>
                <h3 className='md:text-7xl text-4xl font-bold text-zinc-800'>First Order Discount!</h3>
                <p className='text-zinc-600 my-6'>Enjoy an exlclusive firdt order discount on our grocery website! Shop fresh essentials and save big on your first phase. Fast delivery and quality guaranteed.</p>
                <Button content='Get Discount'/>
            </div>

        </div>
    </section>
  )
}

export default Discount