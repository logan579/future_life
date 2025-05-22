  // Clear session/login state
    localStorage.removeItem('loggedInUser');

    // Redirect to login page after delay
    setTimeout(() => {
      window.location.href = './login-page.html'; // Your login page
    }, 3000);