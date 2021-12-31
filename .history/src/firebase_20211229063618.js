import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3QL_qKk9EJ2zLixJZxYR5QYaFTRU_tlE",
  authDomain: "zhagaram-5bd76.firebaseapp.com",
  projectId: "zhagaram-5bd76",
  storageBucket: "zhagaram-5bd76.appspot.com",
  messagingSenderId: "777512901940",
  appId: "1:777512901940:web:5eba1340fce47bf0651961"
};

firebase.initialize(firebaseConfig);

export default firebase;