import React from 'react'

const CounterLabel= React.memo( function label({count}){
   return (<>
     Counter value : {count}
   </>)
})

 export default  CounterLabel