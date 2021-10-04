import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCa-17YUOTfZAj5LItKv96j7bbmL8GT_AU",
    authDomain: "gestion-ventas-c7c19.firebaseapp.com",
    databaseURL: "https://gestion-ventas-c7c19-default-rtdb.firebaseio.com",
    projectId: "gestion-ventas-c7c19",
    storageBucket: "gestion-ventas-c7c19.appspot.com",
    messagingSenderId: "149230278380",
    appId: "1:149230278380:web:61ac5b69e7391ab6bb77c9",
    measurementId: "G-EC64LZ3R28"
};

const app = initializeApp(firebaseConfig);
export default app;