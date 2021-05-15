import React, {useState} from 'react'
import CounterInput from './CounterInput'
import useInput from '../customHooks/useInput'
import useButton from '../customHooks/useButton'
import Counter from './Counter'

const DashBoard=()=>{
 const [isLoad, setLoad] = useState(false) 
 const [intialCounter, intialInput]= useInput({type: 'text'})
 const [max, maxInput]= useInput({type: 'text'}) 
 const customClick=()=>{
  setLoad(true)
}
 const {CustomButton}= useButton({
   label: 'Submit',
   customClick
  })
  
  return(<div className="dashboard_container">
    {!isLoad &&<CounterInput
       IntialInput={intialInput}
       MaxInput= {maxInput}
       CustomButton={CustomButton}       
    />}
    {isLoad && <Counter
      intial={intialCounter}
      max={max||1000}
    />}
  </div>)
}

export default DashBoard