import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHBBSrDCPUXxlLbPcEH99w5DbrxsuqxyY",
    authDomain: "blackmyth-632eb.firebaseapp.com",
    projectId: "blackmyth-632eb",
    storageBucket: "blackmyth-632eb.appspot.com",
    messagingSenderId: "642771898082",
    appId: "1:642771898082:web:7981bacbbad71651f698bb",
    measurementId: "G-WTD4BLLXJC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);