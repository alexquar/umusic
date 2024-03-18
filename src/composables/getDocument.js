import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getDocument = (collection, id) => {

  const document = ref(null)
  const error = ref(null)

  // register the firestore collection reference
  let documentRef = projectFirestore.collection(collection).doc(id)

  const unsub = documentRef.onSnapshot(snap => {
    if(doc.data()){
document.value = {...doc.data(), id : doc.id}
error.value = null 
    } else {
       error.value = 'Document does not exist' 
    }
  }, err => {
    console.log(err.message)
    error.value = 'Could not find the playlist'
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, document }
}

export default getDocument