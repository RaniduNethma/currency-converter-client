import React, { useEffect, useState } from 'react'
import '../index.css'
import InputField from '../Components/InputField'
import SelectionField from '../Components/SelectionField'
import ConvertButton from '../Components/ConvertButton'
import axios from 'axios'

function MainPage() {

  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [currencyNames, setCurrencyNames] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      date,
      sourceCurrency,
      targetCurrency,
      amount
    )
  }

  useEffect( () => {
    const getCurrencyNames = async() => {
      try{
        const responce = await axios.get("http://localhost:9000/getAllCurrency")
      }
      catch(err){
        console.log(err);
      }
    }
  }, [])

  return (
    <>
      <div className='bg-gray-900 h-screen w-100%  p-[20px] flex justify-center'>
        <div>

          <div className='flex justify-center mb-3'>
            <h1 className=" text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 inline-block 
                            text-transparent bg-clip-text text-6xl font-bold lg:font-extrabold text-center tracking-tight pb-3">
                            Welcome To The
                            <br />
                            Ultimate Currency Converter!</h1>
          </div>
            
          <p className='text-center font-normal text-gray-400 mb-5 max-w-300'>
              Easily convert currencies in real-time and even check past exchange rates all for free! 
              Select your desired time, source currency, target currency, and amount, and get instant, 
              accurate results. Whether you're planning a trip, managing finances, 
              or analyzing historical rates, our powerful converter has you covered.
          </p>

          <div className='flex justify-center items-center flex-col'>
            <form onSubmit={handleSubmit}>
              <InputField inputHTMLFor={date} 
                          inputOnChange={setDate}
                          inputID={date} 
                          fieldName={date} 
                          inputFieldText="Date" 
                          inputType="Date" 
                          placeHolder="Date"/>
              <div className='flex'>
                <SelectionField selectionHTMLFor={sourceCurrency} 
                                selectionOnChange={setSourceCurrency}
                                selectID={sourceCurrency} 
                                selectName={sourceCurrency} 
                                fieldValue={sourceCurrency} 
                                selectFieldText="Source Currency"  
                                placeHolder="Select Source Currency"/>
                <SelectionField selectionHTMLFor={targetCurrency} 
                                selectionOnChange={setTargetCurrency}
                                selectID={targetCurrency} 
                                selectName={targetCurrency} 
                                fieldValue={targetCurrency} 
                                selectFieldText="Target Currency" 
                                placeHolder="Select Target Currency"/>
              </div>
              <InputField inputHTMLFor={amount} 
                          inputOnChange={setAmount}
                          inputID={amount} 
                          fieldName={amount} 
                          inputFieldText="Amount in Source Currency" 
                          inputType="text" 
                          placeHolder="Enter Amount"/>
              
              <div className='flex justify-between items-center'>
                <ConvertButton />
              </div>

              <div>
                <p>result is</p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
