import { useEffect, useState } from 'react'
import useFetchData from './useFetchData'
import {debounce} from '../helper/helper'

export default function useCounterUpdate({url, body,count,type}){
   const [responseData, setData] = useState({})
   const [fetchData] = useFetchData({url, body,type})
   useEffect(()=>{
      debounce(()=>setData(fetchData()),300)()
   },[count])

   return [responseData]
}