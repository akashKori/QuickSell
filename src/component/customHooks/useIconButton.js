import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove';

const useIconButton=({color='primary',label='', component="span",icon,onClick})=>{
    return [<IconButton
       color={color}
       aria-label={label}
       component={component}
    >
     {icon && selectIcon(icon, onClick)}   
    </IconButton>]
}

export default useIconButton

function selectIcon(icon,onClick) {
  switch(icon) {
      case 'add':
          return <AddIcon fontSize='large' onClick={(e)=>onClick(e, 'inc')}/>
      case 'sub':
          return <RemoveIcon fontSize='large' onClick={(e)=>onClick(e, 'dec')}/>
      default:
          return <AddIcon onClick={(e)=>onClick(e, 'inc')}/>         
  }
}