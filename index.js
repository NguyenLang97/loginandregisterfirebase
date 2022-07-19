// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCUVqHdXShNBNzgGvFvEx4NCYQf_h0PE-4",
    authDomain: "fir-login-550c6.firebaseapp.com",
    databaseURL: "https://fir-login-550c6-default-rtdb.firebaseio.com",
    projectId: "fir-login-550c6",
    storageBucket: "fir-login-550c6.appspot.com",
    messagingSenderId: "786215854947",
    appId: "1:786215854947:web:7f4ed4ad2396ce4ab3e956",
    measurementId: "G-PVECFF853D",
};
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Set up our register function
function register() {
    // Get all our input fields
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    full_name = document.getElementById("full_name").value;

    // Validate input fields
    if (
        validate_email(email) == false ||
        validate_password(password) == false ||
        validate_field(full_name) == false
    ) {
        alert("Nhập đầy đủ các trường thông tin");
        return;
        // Don't continue running the code
    }

    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser;
            console.log("cheadvbavd", user);

            // Add this user to Firebase Database
            var database_ref = database.ref();
            console.log(database.ref());

            // Create User data
            var user_data = {
                email: email,
                password: password,
                full_name: full_name,
                last_login: Date.now(),
            };

            // Push to Firebase Database
            database_ref.child("users/" + user.uid).set(user_data);

            // DOne
            alert("Tạo thành công tài khoản");
        })

        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code;
            var error_message = error.message;

            alert(error_message);
        });
}

// Set up our login function
function login() {
    // Get all our input fields
    email = document.getElementById("lemail").value;
    password = document.getElementById("lpassword").value;

    // Validate input fields
    if (
        validate_email(email) == false ||
        validate_password(password) == false
    ) {
        alert("Tài khoản hoặc mật khẩu không đúng");
        return;
        // Don't continue running the code
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser;

            // Add this user to Firebase Database
            var database_ref = database.ref();

            // Create User data
            var user_data = {
                last_login: Date.now(),
            };

            // Push to Firebase Database
            database_ref.child("users/" + user.uid).update(user_data);

            // DOne
            alert("Đăng nhập thành công");
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code;
            var error_message = error.message;

            alert("Tài khoản hoặc mật khẩu không đúng!!" || error_message);
        });
}

// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if (expression.test(email) == true) {
        // Email is good
        return true;
    } else {
        // Email is not good
        return false;
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
        return false;
    } else {
        return true;
    }
}

function validate_field(field) {
    if (field == null) {
        return false;
    }

    if (field.length <= 0) {
        return false;
    } else {
        return true;
    }
}

const registerBtn = document.getElementById("link-register");
const loginBtn = document.getElementById("link-login");
const loginForm = document.getElementById("login-form_container");
const registerForm = document.getElementById("register-form_container");

registerBtn.addEventListener("click", () => {
    registerForm.style.display = "block";
    loginForm.style.display = "none";
});
loginBtn.addEventListener("click", () => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
});
