
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    let isValid = true;
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const phone = document.getElementById('phone');
    const successMessage = document.querySelector('.success-message');
  
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');
    document.querySelectorAll('input').forEach(input => input.classList.remove('error'));
  
    // Username validation
    if (username.value.trim().length < 3) {
      setError(username, 'Username must be at least 3 characters long');
      isValid = false;
    }
  
    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
      setError(email, 'Please enter a valid email address');
      isValid = false;
    }
  
    // Password validation
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password.value.trim())) {
      setError(password, 'Password must be at least 8 characters long and contain at least one number and one special character');
      isValid = false;
    }
  
    // Confirm password validation
    if (password.value.trim() !== confirmPassword.value.trim()) {
      setError(confirmPassword, 'Passwords do not match');
      isValid = false;
    }
  
    // Phone number validation
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phone.value.trim())) {
      setError(phone, 'Please enter a valid phone number (e.g., XXX-XXX-XXXX)');
      isValid = false;
    }
  
    // Show success message if valid
    if (isValid) {
      successMessage.style.display = 'block';
    } else {
      successMessage.style.display = 'none';
    }
  });
  
  function setError(element, message) {
    const errorMessage = element.nextElementSibling;
    element.classList.add('error');
    errorMessage.textContent = message;
  }
  