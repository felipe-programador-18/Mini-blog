import React from 'react'
import styles from './search.module.css'

//imported hoock
import { useFecthingDocuments } from '../../hoock/useFecthingdocuments'
import { useQuerySearch } from '../../hoock/useQuery'

const SearchDates = () => {
   const query =  useQuerySearch()
   const search = query.get("q")
   console.log("testing about search", search)
   
   return (
   <div>
      <h2>Search</h2> 
       <p> {search} </p> 
      
   </div>)

}

export default SearchDates