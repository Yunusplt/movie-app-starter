import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//todo buradaki en önemli sey auth. auth u tüm metotlarda kullanacagiz. yukariyi birkez kuruyoruz sonra birdaha isimiz yok. 



//todo 1.Step    => https://firebase.google.com/docs/auth/web/start buradan yukaridaki code blogunu al. 
//todo 2.step    => https://console.firebase.google.com/ => project settings buradanda firebaseconfig yapisini al yukari yapistir...