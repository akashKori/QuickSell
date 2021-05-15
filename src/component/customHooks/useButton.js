import Button from '@material-ui/core/Button'

const useButton=({label, customClick,isDisabled })=>{
   const handleClick=e=>{
       e.stopPropagation()
       customClick()
   }
   return {CustomButton: (<Button disabled={isDisabled} className='button' onClick={handleClick}  variant='outlined' > {label}</Button>)}
}

export default useButton