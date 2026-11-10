import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyApVsEHbd2_LzdPYdAoVYqmpvnCGdDi_p0",
  authDomain: "react-firebase-13a42.firebaseapp.com",
  projectId: "react-firebase-13a42",
  storageBucket: "react-firebase-13a42.firebasestorage.app",
  messagingSenderId: "1012822490584",
  appId: "1:1012822490584:web:9216f6104bdb416e9346ad"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
