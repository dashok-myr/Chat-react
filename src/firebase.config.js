import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "chat-react-7a8f5.firebaseapp.com",
  databaseURL: "https://chat-react-7a8f5.firebaseio.com",
  projectId: "chat-react-7a8f5",
  storageBucket: "chat-react-7a8f5.appspot.com",
  messagingSenderId: "406475875879",
  appId: "1:406475875879:web:631e3186271a87d47f5002",
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;
