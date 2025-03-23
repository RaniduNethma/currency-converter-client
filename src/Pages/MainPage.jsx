import React from 'react'
import '../index.css'

function MainPage() {
  return (
    <>
        <div className='bg-black h-screen p-[20px]'>
            <h1 className="text-4xl text-white font-semibold flex justify-center">Welcome to the Ultimate Currency Converter!</h1>
            <p className='text-white'>Easily convert currencies in real-time and even check past exchange rates all for free! 
                Select your desired time, source currency, target currency, and amount, and get instant, 
                accurate results. Whether you're planning a trip, managing finances, 
                or analyzing historical rates, our powerful converter has you covered.</p>
            
        </div>
    </>
  )
}

export default MainPage