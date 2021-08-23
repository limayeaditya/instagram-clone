import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtXPDl3YtDImI-SJmMAuqav_-881fEps0",
    authDomain: "instagram-clone-fa8c6.firebaseapp.com",
    projectId: "instagram-clone-fa8c6",
    storageBucket: "instagram-clone-fa8c6.appspot.com",
    messagingSenderId: "814639593331",
    appId: "1:814639593331:web:cf153e7ac5009d59d5b706"
  });

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()

  export {db, auth, storage} 