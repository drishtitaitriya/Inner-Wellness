

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Store user details in localStorage
    let userDetails = { username, email, password };
    localStorage.setItem("registeredUser", JSON.stringify(userDetails));

    alert("Signup successful! Please login.");
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;

    let storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!storedUser) {
        alert("No registered user found. Please sign up first.");
        return;
    }

    if ((loginEmail === storedUser.email || loginEmail === storedUser.username) && loginPassword === storedUser.password) {
        localStorage.setItem("loggedInUser", loginEmail);
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to home page
    } else {
        alert("Invalid email/username or password.");
    }
});

// Handle forgot password
document.getElementById("forgotPassword").addEventListener("click", function(event) {
    event.preventDefault();

    let email = prompt("Enter your registered email:");
    if (!email) return;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.email === email);

    if (!user) {
        alert("Email not found! Please enter the correct email.");
        return;
    }

    let newPassword = prompt("Enter a new password:");
    if (!newPassword) return;

    user.password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Password reset successful! You can now log in with your new password.");
});



