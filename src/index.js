import {initializeApp} from 'firebase/app';
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBuz4vW2eLQkxkcXDEsVVhfCqpsYutWFzI",
  authDomain: "test-project-affe1.firebaseapp.com",
  projectId: "test-project-affe1",
  storageBucket: "test-project-affe1.appspot.com",
  messagingSenderId: "339075153372",
  appId: "1:339075153372:web:80a2b0d49c465067506319"
};

initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'books');

getDocs(colRef)
  .then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books)
  })
  .catch(err => {
    console.log(err.message);
  });