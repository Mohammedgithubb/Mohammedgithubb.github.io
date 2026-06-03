import { auth, db } from './firebase.js';

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.registerUser = async function () {

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  const phone = document.getElementById("phone").value;

  if(name === "" || email === "" || password === "" || phone === ""){

    alert("Please fill all fields");

    return;

  }

  try {

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {

      name: name,

      email: email,

      phone: phone,

      approved: false

    });

    window.location.href = "pending.html";

  } catch (error) {

    alert(error.message);

  }

}
