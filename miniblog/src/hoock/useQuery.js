import {useMemo} from 'react'
import { useLocation } from 'react-router-dom'

//react memo is very interest because avoid rendering!!

export const useQuerySearch = () => {
    //GET DATE ABOUT URL
   const {search} = useLocation()
   return  useMemo(() => new URLSearchParams(search), [search] )
}
