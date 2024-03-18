import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'



const useDocument = (collection, id) => {
const error = ref(null)
const isPending=ref(null)
let docRef = projectFirestore.collection(collection).doc(id)
const deleteDoc = async ()=>{
    isPending.value = true
    error.value = null
    try{
    const res = await docRef.delete()
    return res
    } catch (err){
        console.log(err.message)
        isPending.value = false
        error.value = "could not delete playlist"
    }
}

return {error, isPending, deleteDoc}
}


export default useDocument