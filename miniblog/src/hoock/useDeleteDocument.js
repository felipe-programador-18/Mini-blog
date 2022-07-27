

import {useState, useEffect,useReducer} from 'react'
import { db } from '../Callfirebase/firebase'
import {doc, deleteDoc} from 'firebase/firestore'

// create state with usereducer !!
//remember reducer is more easy for do tested!!
const initialState = {
    loading: null,
    error: null
}


const DeletedDocReducer = (state, action) => {
   switch(action.type){
    case "LOADING":
     return {loading:true, error:null}
    case "DELETED_DOC":
     return {loading:false, error: null}
    case "ERROR":
     return {loading:false, error: action.payload }   
    default:   
    return state;
   }
    

}


export const useDeletecDoc = (docCollection) => {
  const [response, dispatch]= useReducer(DeletedDocReducer, initialState)
 
  // deal with memory leak
  const [cancelled, setCancelled] = useState(false)

  const checkBeforeIsCancelled = (action) => {
    if(!cancelled){
        dispatch(action)
    }
  }
  
  //creating function to insert date!!
  //practice about that!!!
  const DeletedDocument = async (id) => {
    checkBeforeIsCancelled({
        type:"LOADING",
      })

    try {
        const deletedDocuments = await deleteDoc(doc(db,docCollection,id)) 


        checkBeforeIsCancelled({
            type:"DELETED_DOC",
            payload: deletedDocuments
        })
        console.log('removed somethings here',DeletedDocument)

    } catch (error) {
        checkBeforeIsCancelled({
            type:"ERROR",
           payload: error.message
        })
    }
  

  
  } 

   useEffect(() => {
     return () =>  setCancelled(true)
   },[]);
  
   return{ DeletedDocument,response }

}