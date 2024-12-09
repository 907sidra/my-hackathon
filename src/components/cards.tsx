    // return (
    //     <div className="border rounded-lg overflow-hidden shadow-sm">
    //         <img src={"/images/card1"} alt={t-shirt} className="w-full h-48 object-cover" />
    //         <div className="p-4">
    //             <h3 className="text-lg font-bold">{}</h3>
    //             <p className="text-gray-600">${120}</p>
    //             <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
    //                 Add to Cart
    //             </button>
    //         </div>
    //     </div>
    // );
//  interface Cardprops {
//   title:string;
//   $:string|number
//   image:string;
//   altText:string;
//   lineThrough?:number| string;
//  }


//  import React from 'react'
 
//  export default function cards({title, $,image,altText , lineThrough}:Cardprops) {
//    return (
//      <div className=''>
//       <img src={image} alt={altText}/>
//       <h3>{title}</h3>
//       <div>{$}, {lineThrough}</div>
//      </div>
//    )
//  }
interface CardProps {
  title: string;
  $: string | number;
  image: string;
  altText: string;
  lineThrough?: string | number; // Optional property for displaying struck-out prices
}

import React from 'react';

export default function Card({ title, $, image, altText, lineThrough }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4">
      <img
        src={image}
        alt={altText}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <div className="text-gray-600 flex items-center space-x-2">
        <span className="text-xl font-bold text-black">${$}</span>
        {lineThrough && (
          <span className="text-sm line-through text-gray-400">${lineThrough}</span>
        )}
      </div>
    </div>
  );
}

 