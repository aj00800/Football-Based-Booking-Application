document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in and has premium access
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser || (currentUser.userType !== 'admin' && currentUser.email !== 'aj08@gmail.com')) {
        // Redirect to main page if not authorized
        alert('Premium features require special access. Please contact support.');
        window.location.href = 'index.html';
        return;
    }

    // You can add any additional chatbot initialization code here
    // For example, you might want to pass the user's name to the chatbot
});




