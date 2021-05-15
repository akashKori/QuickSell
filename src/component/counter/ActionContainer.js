import React from 'react'

const ActionContainer = React.memo(function Action({AddButton,count,SubButton}){
   return(<div className='wrapper_container'>
      <div className='wrapper'>
        {SubButton}
      </div>
      <div className='wrapper_textDiv'>
        {count}
      </div>
      <div className='wrapper_minButton'>
        {AddButton}
      </div>
   </div>)
})

export default ActionContainer