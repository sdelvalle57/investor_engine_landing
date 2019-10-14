import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBcEjb6bxFr1xS1bgtJLzPmu2ngu2iGoQQ",
  authDomain: "investor-engine-buckets.firebaseapp.com",
  databaseURL: "https://investor-engine-buckets.firebaseio.com",
  projectId: "investor-engine-buckets",
  storageBucket: "investor-engine-buckets.appspot.com",
  messagingSenderId: "127233644178",
  appId: "1:127233644178:web:9dc166653426aea46ab84b"

};
if(!firebase.apps.length) firebase.initializeApp(config);
  

export const database = firebase.database();