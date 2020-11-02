import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: 'AIzaSyAqPv4_FgcaDh6fxdLLQZUFrdjoswWb4Ao',
  authDomain: 'shopping-list-upf.firebaseapp.com',
  databaseURL: 'https://shopping-list-upf.firebaseio.com',
  projectId: 'shopping-list-upf',
  storageBucket: 'shopping-list-upf.appspot.com',
  messagingSenderId: '368129516609',
  appId: '1:368129516609:web:7653c7ff6c2238d15512c0',
};
// Initialize Firebase

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
