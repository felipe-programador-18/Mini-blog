import{useState, useEffect} from 'react'

import { db } from '../Callfirebase/firebase'
import { collection,
     query,
     orderBy,
     onSnapshot, 
     where,
     getDocs,
    
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
     
   // const querySnapshot = await getDocs(collection(db, docCollection));
     //querySnapshot.forEach((doc) => {
      //console.log(doc.id, JSON.stringify(doc.data()) )
     //})
     
     const collectionRef = await collection(db,docCollection )      
     console.log("test", collectionRef)
      
      
      try {
      //let q ;  

       //q = await  query(collectionRef, orderBy("createdAt","desc"))
       
     // onsnapshot server to map my date!!! 
       const querySnapshot = await getDocs(collection(db, docCollection));
        setDocument(
          querySnapshot.docs.map((doc) => ({
            id: doc.id, ...doc.data(),
          }) )
        ) 

       //querySnapshot.docs.map((doc) => (
        //setDocument(doc.id, doc.data())
      // ));
        //setDocument(doc.id, doc.data(),)
       

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




