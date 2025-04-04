import React from 'react'

function SelectionField(props) {

  return (
    <>
        <div className="mb-5 w-100 mr-8">
            <label  htmlFor={props.selectionHTMLFor} 
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.selectFieldText}
            </label>
            <select onChange={(e)=>props.selectionOnChange(e.target.value)}
                    name={props.selectName} 
                    id={props.selectID} 
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">{props.placeHolder}</option>
              {Object.keys(props.currencyNames).map((currency) => (
                <option className='p-1' key={currency} value={currency}>
                  {props.currencyNames[currency]}
                </option>
              ))}
            </select>
        </div>
    </>
  )
}

export default SelectionField