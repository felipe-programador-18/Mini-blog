import{useState, useEffect} from 'react'

import { db } from '../Callfirebase/firebase'
import { collection,
     query,
     orderBy, 
     where,
     getDocs
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
     
      const collectionRef =  query(collection(db, docCollection));   
      console.log('test in on coll', collectionRef)
 
  
      try {
       let q ;
       q =  query(collectionRef)
       
         //array-contains
      if(search){
        q= query(collectionRef ,where("tags","array-contains", search), orderBy("createdAT","desc"))
        console.log('what have here, IF',search)
      } else if(uid){
        q= query(collectionRef ,where("uid" ,"==",uid), orderBy("createdAT","desc"))
      }
       
        const querySnapshot = await getDocs(q)
       
        console.log("search querysearch", querySnapshot)    
          setDocument(
                querySnapshot.docs.map(((doc) => ({
              id: doc.id,
              ...doc.data(),
             }) )
          ))
           
 
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
     
     return {documents, loading, error };
 };
 