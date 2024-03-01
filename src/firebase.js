import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyAdt6bsyXRpV-8f6mFmQ6VjP7oflGPn7rs",
  authDomain: "dayp-b4fc0.firebaseapp.com",
  projectId: "dayp-b4fc0",
  storageBucket: "dayp-b4fc0.appspot.com",
  messagingSenderId: "270930397327",
  appId: "1:270930397327:web:0b6280e24e987ac288c8fa"
};


const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app