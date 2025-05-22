 document.getElementById('settingsForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
    
        // Get form values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        // Perform validation (you can add more checks here)
        if (email === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }
    
        // Simulate a successful update
        document.getElementById('settingsMessage').innerText = 'Settings updated successfully!';
        });