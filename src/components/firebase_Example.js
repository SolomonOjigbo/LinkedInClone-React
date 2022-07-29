//Grab config details from firebase
const firebaseConfig = {
  apiKey: "API Example",
  authDomain: "authDomain",
  projectId: "Enter Project Id",
  storageBucket: "Enter Storage Bucket",
  messagingSenderId: "Enter Sender Id",
  appId: "Enter appID"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };