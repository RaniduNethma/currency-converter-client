import React from 'react'
import '../index.css'
import InputField from '../Components/InputField'
import SelectionField from '../Components/SelectionField'
import ConvertButton from '../Components/ConvertButton'

function MainPage() {
  return (
    <>
        <div className='bg-gray-900 h-100% w-100%  p-[20px] flex justify-center'>
          <div className=''>

            <div className='flex justify-center mb-3'>
              <h1 className=" text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 inline-block 
                              text-transparent bg-clip-text text-6xl font-bold lg:font-extrabold text-center tracking-tight pb-3">
                              Welcome To The
                              <br />
                              Ultimate Currency Converter!</h1>
            </div>
              
            <p className='text-center font-normal text-gray-400 mb-5 max-w-300'>Easily convert currencies in real-time 
                and even check past exchange rates all for free! Select your desired time, source currency, 
                target currency, and amount, and get instant, accurate results. Whether you're planning a trip, 
                managing finances, or analyzing historical rates, our powerful converter has you covered.
            </p>

            <div className='flex justify-center items-center flex-col'>
              <InputField inputFieldText="Date" inputType="Date" placeHolder="Date"/>
              <div className='flex'>
                <SelectionField selectFieldText="Source Currency" selectName="Source Currency" placeHolder="Select Source Currency"/>
                <SelectionField selectFieldText="Target Currency" selectName="Target Currency" placeHolder="Select Target Currency"/>
              </div>
              <InputField inputFieldText="Amount in Source Currency" inputType="text" placeHolder="Enter Amount"/>
            </div>

            <div className='flex justify-center items-center'>
              <ConvertButton />
            </div>

          </div>
        </div>
    </>
  )
}

export default MainPage