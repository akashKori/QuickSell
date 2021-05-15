import React from 'react'
import useIconButton from '../customHooks/useIconButton'
import ActionContainer from './ActionContainer'

const CounterAction=({count, setCount, intial, max})=>{
    
    const handleCount=(e,name)=>{
        e.stopPropagation()
        if(name==='inc'){
            setCount(count<max?count+1:count)
        } else {
            setCount(count>intial?count-1:count)
        }
    }
    const [AddButton] = useIconButton({
        icon: 'add',
        onClick:handleCount
    })
    const [SubButton] = useIconButton({ 
        icon: 'sub',
        onClick: handleCount
    })
   
    return(<div className='counter_action'> 
        <ActionContainer
          AddButton= {AddButton}
          count= {count} 
          SubButton= {SubButton}
        />
         </div>)
}

export default CounterAction
