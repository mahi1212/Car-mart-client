import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config"

const initiallizeFirebase = () =>{
    initializeApp(firebaseConfig)
}

export default initiallizeFirebase;