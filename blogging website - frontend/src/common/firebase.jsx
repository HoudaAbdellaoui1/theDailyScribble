import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxquak-rQAml9kzw0E_Bca8yRpF0BSkjc",
  authDomain: "blogging-77326.firebaseapp.com",
  projectId: "blogging-77326",
  storageBucket: "blogging-77326.firebasestorage.app",
  messagingSenderId: "1033149058777",
  appId: "1:1033149058777:web:f8ef7070e4ab301fd6f8c8",
  measurementId: "G-N3HKEKX2YN"
};
const app = initializeApp(firebaseConfig);

//Google Auth
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err);
    })

    return user;

}