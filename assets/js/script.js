import { onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"

import { auth} from "./firebase/firebase.js"
import {loginCheck} from  './firebase/loginCheck.js';

import './firebase/signup_form.js';
import './firebase/logout.js';


onAuthStateChanged( auth, async (user) => {
    
     loginCheck(user)
    /* if (user) {
    } else {
        loginCheck(user)
    }*/

})