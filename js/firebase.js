import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB-S8M-sxB6T1FUX2jxIRRTyaQiUfw0JUk",
  authDomain: "portfolio-access-system.firebaseapp.com",
  projectId: "portfolio-access-system",
  storageBucket: "portfolio-access-system.firebasestorage.app",
  messagingSenderId: "202253421269",
  appId: "1:202253421269:web:804114263f0e2c3e92305c",
  measurementId: "G-CNM7YNXD95"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
