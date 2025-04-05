
function validateForm() {
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
  
    const fullnameError = document.getElementById("fullnameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
  
  
  
    if (fullname.length < 5) {
      fullnameError.textContent = "Full name must be at least 5 characters long.";
      isValid = false;
    }
  
  
    if (!email.includes("@") || !email.includes(".")) {
      emailError.textContent = "Enter a valid email (must include @ and .)";
      isValid = false;
    }
  
  
    if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters long.";
      isValid = false;
    }
  
  
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      isValid = false;
    }
  
    return isValid;
  }