import {initializeApp} from 'firebase/app'
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDQLXYWcSSCfEzNuUVE8PBGr0ERPWiK3sY",
    authDomain: "auth-ef239.firebaseapp.com",
    projectId: "auth-ef239",
    storageBucket: "auth-ef239.appspot.com",
    messagingSenderId: "869875106126",
    appId: "1:869875106126:web:5295b549acb37fc5619e1f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth=getAuth(app);
  export default app;

  