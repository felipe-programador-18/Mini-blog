import{useState, useEffect} from 'react'

import { db } from '../Callfirebase/firebase'
import { collection,
     query,
     orderBy, 
     where,
     getDocs,
     limit
    
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
     
     const collectionRef = query(collection(db,docCollection))     
     console.log("test about collection", collectionRef)
     
     try {
      let q ;
      q = await  query(collectionRef)
      
      if(search){
        q= await query(collectionRef, where("tags",'array-contains', search), orderBy("createdAt","desc") )
        
      }else{
       // q = await query(collectionRef, orderBy("createdAt", "desc"))
       q = await query(collectionRef)
      }
        console.log("here verify about search", search)
      const querySnapshot = await getDocs(q,orderBy("createdAt","desc"));
      
      setDocument(
          querySnapshot.docs.map(((doc) => ({
            id: doc.id, ...doc.data(),
          }) )
      ))
         console.log("test query", querySnapshot)
        

       
      setLoading(false);

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




