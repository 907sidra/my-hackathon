

import React from 'react';

import Link from 'next/link';
import { SearchIcon,ShoppingCartIcon} from 'lucide-react';
import { CgProfile } from "react-icons/cg";


 

export default function header() {
  return (
    <main>
        {/* header top */}
    <div className='h-[38px] w-[1440px] bg-[#000000] flex justify-center items-center text-sm text-[#FFFFFF]'>
        <div className='flex justify-center '>Sign up and get 20% off to your first order.</div>
       <Link href="/sign-up" className='underline ml-2'>Sign Up Now</Link>
        </div>

         <div className=' wrapper h-[41px] w-[1240px] border-blue-700 m-6 flex items-center justify-between'>
            <h2 className='text-[#000000] font-bold font-integral-cf'>SHOP.CO</h2>
            <div>Shop</div>
            <ul className='flex space-x-8'>
                <li>On Sale</li>
                <li>New Arrival</li>
                <li>Brands</li>
            </ul>
            <div/>
            {/* add search icon using lucide react  */}
            <div className='relative'>
            <input
            type="text"
            className="w-[500px] px-4 py-2 pl-10 text-sm border rounded-2xl bg-[#F2F0F1] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for products"
          />
          <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div>
          <ShoppingCartIcon className="h-6 w-6" />
          </div>
          <div><CgProfile className="h-6 w-6" />
          </div>
         </div>
         
    </main>
  )
}
