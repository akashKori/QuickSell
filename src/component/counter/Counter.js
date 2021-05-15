import React, { useState} from 'react'
import CounterAction from './CounterAction'
import CounterLabel from './CounterLabel'
import useCounterUpdate from '../customHooks/useCounterUpdate'

const Counter=(props)=>{
   const [count, setCount] = useState(props.intial||0)
   const [data] = useCounterUpdate({
     url: 'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json',
     body: {
       counter1: count
     },
     count,
     type: "PUT"
   })
    return(<div className=''> 
          <CounterAction 
            count={count}
            setCount={setCount}
            {...props}
          />  
          <CounterLabel count={count}/>
     </div>)
}

export default Counter