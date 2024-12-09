
// import React, { ReactNode } from 'react'
// import Card from './cards';

// export default function Grid({children , title , price, oldPrice ,image}:{children:ReactNode ,title:string , price:string, oldPrice?:string , image:string}) {
    
//   return (
//     <div className='wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    
        {/* <div className='w-full xl:w-[295px] h-[298px] rounded-xl border-2 mt-[220px] bg-[#F0EEED] '></div>
        <div className='w-full xl:w-[295px] h-[298px] rounded-xl border-2 mt-[220px] bg-[#F0EEED] '></div>
        <div className='w-full xl:w-[295px] h-[298px] rounded-xl border-2 mt-[220px] bg-[#F0EEED] '></div>
        <div className='w-full xl:w-[295px] h-[298px] rounded-xl border-2 mt-[220px] bg-[#F0EEED] '></div>
        {children}{title}{price}{oldPrice}{image}
        </div>
        <div className='wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    
        <div className='w-full xl:w-[295px] h-[298px] rounded-xl border-2 mt-[220px] bg-[#F0EEED] '></div>
        <div className='w-full xl:w-[295px] h-[298px] rounded-xl border-2 mt-[220px] bg-[#F0EEED] '></div>
        <div className='w-full xl:w-[295px] h-[298px] rounded-xl border-2 mt-[220px] bg-[#F0EEED] '></div>
        <div className='w-full xl:w-[295px] h-[298px] rounded-xl border-2 mt-[220px] bg-[#F0EEED] '></div>
        {children}{title}{price}{oldPrice}{image}
        </div>
    */}
import React from 'react';
import Card from '@/components/cards';

const cardData = [
  { title: 'Stylish Jacket', $: 120, image: '/images/jacket.jpg', altText: 'Stylish Jacket', lineThrough: 150 },
  { title: 'Classic Sneakers', $: 85, image: '/images/sneakers.jpg', altText: 'Classic Sneakers' },
  { title: 'Elegant Watch', $: 300, image: '/images/watch.jpg', altText: 'Elegant Watch', lineThrough: 350 },
  { title: 'Trendy Bag', $: 150, image: '/images/bag.jpg', altText: 'Trendy Bag' },
];

export default function CardSection() {
  return (
    <section className="wrapper my-10">
      <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            $={card.$}
            image={card.image}
            altText={card.altText}
            lineThrough={card.lineThrough}
          />
        ))}
      </div>
    </section>
  );
}

//         </div>  
//   )
// }
