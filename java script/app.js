   // Load users from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Toggle between forms
        function showSignup() {
            document.getElementById('login-form').classList.add('hidden');
            document.getElementById('signup-form').classList.remove('hidden');
        }

        function showLogin() {
            document.getElementById('signup-form').classList.add('hidden');
            document.getElementById('login-form').classList.remove('hidden');
        }

        // Signup
        document.getElementById('signup').onsubmit = function(e) {
            e.preventDefault();
            
            const newUser = {
                name: document.getElementById('signup-name').value,
                email: document.getElementById('signup-email').value,
                password: document.getElementById('signup-password').value
            };

            // Reset errors
            document.querySelectorAll('#signup-form .error').forEach(el => {
                el.style.display = 'none';
            });

            // Simple validation
            if (newUser.name.length < 3) {
                document.getElementById('signup-name-error').textContent = 'Name must be at least 3 characters';
                document.getElementById('signup-name-error').style.display = 'block';
                return;
            }

            if (!newUser.email.includes('@')) {
                document.getElementById('signup-email-error').textContent = 'Please enter a valid email';
                document.getElementById('signup-email-error').style.display = 'block';
                return;
            }

            if (newUser.password.length < 6) {
                document.getElementById('signup-password-error').textContent = 'Password must be at least 6 characters';
                document.getElementById('signup-password-error').style.display = 'block';
                return;
            }

            // Check if email exists
            if (users.some(user => user.email === newUser.email)) {
                document.getElementById('signup-email-error').textContent = 'Email already exists';
                document.getElementById('signup-email-error').style.display = 'block';
                return;
            }

            // Add user and save
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Signup successful! Please login.');
            this.reset();
            showLogin();
        };

        // Login
        document.getElementById('login').onsubmit = function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            // Reset errors
            document.querySelectorAll('#login-form .error').forEach(el => {
                el.style.display = 'none';
            });

            // Find user
            const user = users.find(user => user.email === email);

            if (!user) {
                document.getElementById('login-email-error').textContent = 'Email not found';
                document.getElementById('login-email-error').style.display = 'block';
                return;
            }

            if (user.password !== password) {
                document.getElementById('login-password-error').textContent = 'Incorrect password';
                document.getElementById('login-password-error').style.display = 'block';
                return;
            }

            alert(`Welcome back, ${user.name}!`);
            this.reset();
        };