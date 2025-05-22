     // Load user data from localStorage
        document.addEventListener('DOMContentLoaded', function() {
            // Get user data from localStorage (assuming you saved it during login)
            const userData = {
                name: localStorage.getItem('userName') || 'logan579',
                email: localStorage.getItem('userEmail') || 'user@example.com',
                title: localStorage.getItem('userTitle') || 'Web Developer'
            };

            // Display the data
            document.getElementById('profileName').textContent = userData.name;
            document.getElementById('profileEmail').textContent = userData.email;
            document.getElementById('profileTitle').textContent = userData.title;

            // Edit button functionality
            document.querySelector('.edit-btn').addEventListener('click', function() {
                alert('Edit profile functionality would go here');
                // In a real app, this would open a form to edit profile
            });
        });