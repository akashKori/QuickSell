import { useState } from 'react'
import TextField from '@material-ui/core/TextField'

const useInput = ({type}) => {
  const [data, setData] = useState(0)
  const input = <TextField
    className='textField'
    variant='outlined' 
    value={data} onChange={e => {
      e.stopPropagation()
      setData(e.target.value)
    }}
    type={type} />
  return [data, input]
}
export default useInput