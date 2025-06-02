

  document.getElementById('signupForm').style.visibility = 'hidden'; // Hide signup form initially
   document.getElementById('showsignup').addEventListener('click', function() {
    document.getElementById('signupForm').style.visibility = 'visible' // Show signup form
    document.getElementById('loginForm').style.visibility = 'hidden'; // Hide login form
   });



  document.getElementById('showlogin').addEventListener('click', function() {
    document.getElementById('signupForm').style.visibility = 'hidden' // Show signup form
    document.getElementById('loginForm').style.visibility = 'visible'; // Hide login form
  });


        // Helper to get users from localStorage
        function getUsers() {
            return JSON.parse(localStorage.getItem('users') || '[]');
        }
        // Helper to save users to localStorage
        function saveUsers(users) {
            localStorage.setItem('users', JSON.stringify(users));
        }

        // Signup form validation and storage
        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('signupEmail').value.trim();
            const password = document.getElementById('signupPassword').value;
            const users = getUsers();
                                                                                                                                                                              
            if (users.find(u => u.email === email)) {
                showMessage('Email already registered.', true);
                return;
            }
            if (!validateEmail(email)) {
                showMessage('Invalid email format.', true);
                return;
            }
            if (password.length < 6) {
                showMessage('Password must be at least 6 characters.', true);
                return;
            }
            users.push({ email, password });
            saveUsers(users);
            showMessage('Signup successful! You can now login.', false);
            this.reset()
            setTimeout(() => {
                document.getElementById('signupForm').style.visibility = 'hidden'; // Hide signup form
                document.getElementById('loginForm').style.visibility = 'visible'; // Show login form
            }, 2000);
          function showMessage(msg, isError) {
            const div = document.getElementById('showmessage');
            div.textContent = msg;
            div.style.color = isError ? 'red' : 'green';
        }

        });
       
        // Login form validation
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            const users = getUsers();

            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                showMessage('Login successful!', false);                setTimeout(() => {
                    window.location.href = './dashboard.html'; // Redirect to dashboard
                },3000 );
            
            } else {
                showMessage('Invalid email or password.', true);
            }
        });

        function showMessage(msg, isError) {
            const div = document.getElementById('message');
            div.textContent = msg;
            div.style.color = isError ? 'red' : 'green';
        }

        function validateEmail(email) {
            // Simple email regex
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }


        