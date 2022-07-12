import{useState, useEffect} from 'react'

import { db } from '../Callfirebase/firebase'
import { collection,
     query,
     orderBy,
     onSnapshot, 
     where,
     } from 'firebase/firestore'



export const useFecthingDocuments =(docCollection,search=null,uid=null) =>{
  
  const [documents,setDocument] = useState(null)
  const [error, setError] = useState(null)  
  const [loading, setLoading] = useState(null)


  // deal with memory leak
  const [cancelled, setCancelled] = useState(false)

  useEffect(() => {
    
    
    const LoadData = async () => {
     if(cancelled) return;
     setLoading(true)
     //here receive reffered of collection
     const collectionRef = await collection (db,docCollection )      
     
     try {
        let q ;  

         q = await  query(collectionRef, orderBy("createdAt","desc"))
        
       // onsnapshot server to map my date!!! 
       await onSnapshot(q, (querySnapshot ) => {
           
           setDocument(
             querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }) )
         );
       })

       setLoading(false)

     } catch (error) {
        console.log('error here',error)
        setError(error.message)
        setLoading(false)
    }
   }
    LoadData();
  },[docCollection, search, uid, cancelled]);
   

    useEffect(() => {
      return () => setCancelled(true)
    },[])
    console.log("teste in the usefecthin", documents)
    return {documents, loading, error };
};




