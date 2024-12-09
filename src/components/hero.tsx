
import Image from 'next/image'
import React, { ReactNode } from 'react'
import Cards from './cards'

export default function Hero({title}:{title:string}) {
  return (
    <main className='h-[660px] w-[1440px] bg-[url("/images/rec.png")] bg-cover bg-center '>

      
        {/* right div */ }
       <div className='flex  w-[1440px] h-[663px]'>
        <div className=' flex flex-1 flex-col justify-evenl '>
          <h4 className='w-[557px] h-[173px] mx-40 mr-0 mt-20 font-bold text-6xl'>FIND CLOTHES THAT MATCHES YOUR STYLE</h4>
          <p className=' w-[545px] h-[33px] mx-40 mr-0 mt-8 font-light text-xs text-slate-800'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button className='bg-black rounded-3xl text-white font-light w-[170px] h-[42px]  mx-40 mt-10'>Shop Now</button>
            
        </div>
            </div>
            <div className='w-[1420px] h-[122px] bg-black ml-[18px] flex justify-around items-center'>
              <ul className='text-white flex  '>
              <li className='w-[166.48px] h-[33.16px]'>VERSACE</li>
              <li className='w-[91px] h-[38px]'>ZARA</li>
              <li className='w-[156px] h-[36px]'>GUCCI</li>
              <li className='w-[94px] h-[32px]'>PRADA</li>
              <li className='w-[206px] h-[33px]'>CALVIN KLEIN</li>
              </ul>
            </div>
            <div  className=' wrapper h-[41px] border-2 w-[1240px] border-blue-700 mt-10'>
            <h4 className='font-bold text-2xl flex justify-center items-center'>{title}</h4>
         
             </div>
          
        </main>
   
  
  )
}
