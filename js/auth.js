import { auth, db } from './firebase.js';

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {

  if (user) {

    const docRef = doc(db, "users", user.uid);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

      if (docSnap.data().approved === true) {

        console.log("Access Granted");

      } else {

        window.location.href = "pending.html";

      }

    } else {

      window.location.href = "index.html";

    }

  } else {

    window.location.href = "index.html";

  }

});
