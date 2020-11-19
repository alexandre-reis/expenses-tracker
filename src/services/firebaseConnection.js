import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: 'AIzaSyACGrgB6wYEf4YmEcztRTdiWSUET6vl57U',
  authDomain: 'expenses-tracker-upf.firebaseapp.com',
  databaseURL: 'https://expenses-tracker-upf.firebaseio.com',
  projectId: 'expenses-tracker-upf',
  storageBucket: 'expenses-tracker-upf.appspot.com',
  messagingSenderId: '321799933704',
  appId: '1:321799933704:web:0186a1d95b74ccd560e6bd',
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;
