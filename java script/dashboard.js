  const loggedIn = localStorage.getItem('loggedInUser');
  if (!loggedIn) {
    alert('You must be logged in to access the dashboard.');
    window.location.href = './login-page.html'; // Redirect to login
  }

