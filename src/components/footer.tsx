import React from 'react'

export default function footer() {
  return (
    <div className='flex justify-around py-10 bg-[#F0F0F0] h-[499px] w-[1441px] text-black'> 
    <div className=' mt-12'>
      <div>SHOP.CO</div>
    <p>We have clothes that suits your style </p>
    <p>and which you’re proud to wear. </p>
    <p>From women to men.</p></div>
    <div className="flex justify-evenly space-x-8">
    
      <div className=' mt-12 gap-10'>COMPANY
      <ul>
        <li>About</li>
        <li>Features</li>
        <li>Work</li>
        <li>Career</li>
      </ul>
      </div>
   
    
    {/* <div> */}
      <div className=' mt-12'>HELP
      <ul>
        <li>Customer Support</li>
        <li>Delivery Details</li>
        <li>Term and Conditions</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    {/* <div> */}
      <div className=' mt-12'>FAQ
      <ul>
        <li>Account</li>
        <li>Manage Deliveries</li>
        <li>Orders</li>
        <li>Payments</li>
      </ul>
    </div>

    {/* <div> */}
      <div className=' mt-12'>Resources
      <ul>
        <li>Free eBook</li>
        <li>Development Tutorials</li>
        <li>How to-Blog</li>
        <li>Youtube Playlist</li>
      </ul>
    </div>
    </div>
    </div>
  )
}
