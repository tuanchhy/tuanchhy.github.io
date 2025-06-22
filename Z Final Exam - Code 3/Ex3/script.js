const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const profilePicture = document.getElementById('profilePicture');

    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const fileError = document.getElementById('fileError');
    const passwordStrength = document.getElementById('passwordStrength');

    function validatePasswordStrength(passwordValue) {
            if (passwordValue.length < 6) {
                passwordStrength.textContent = 'Weak';
                passwordStrength.className = 'password-strength weak';
            } else if (passwordValue.match(/[0-9]/) && passwordValue.match(/[a-zA-Z]/)) {
                passwordStrength.textContent = 'Medium';
                passwordStrength.className = 'password-strength medium';
            } else if (passwordValue.length >= 8 && passwordValue.match(/[0-9]/) && passwordValue.match(/[a-zA-Z]/)) {
                passwordStrength.textContent = 'Strong';
                passwordStrength.className = 'password-strength strong';
            } else {
                passwordStrength.textContent = '';
            }
        }

    password.addEventListener('input', () => {
        validatePasswordStrength(password.value);
    });

    form.addEventListener('submit', (event) => {
    event.preventDefault();

        let isValid = true;

            if (username.value.length < 5 || username.value.length > 15) {
                usernameError.textContent = 'Username must be 5-15 characters long.';
                isValid = false;
            } else {
                usernameError.textContent = '';
            }

           
            if (!password.value.match(/[0-9]/) || !password.value.match(/[a-zA-Z]/)) {
                passwordError.textContent = 'Password must contain letters and numbers.';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }

            
            if (password.value !== confirmPassword.value) {
                confirmPasswordError.textContent = 'Passwords do not match.';
                isValid = false;
            } else {
                confirmPasswordError.textContent = '';
            }

            const file = profilePicture.files[0];
            if (file && !['image/jpeg', 'image/png'].includes(file.type)) {
                fileError.textContent = 'File must be a JPG or PNG image.';
                isValid = false;
            } else {
                fileError.textContent = '';
            }

            if (isValid) {
                alert('Registration successful!');
            }
        });