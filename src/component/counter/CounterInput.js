import React from 'react'

const CounterInput=({IntialInput, MaxInput,CustomButton})=>{
   return (<div className="input_container">
     {IntialInput}
     {MaxInput}
     {CustomButton}
   </div>)
}
export default CounterInput