document.addEventListener('DOMContentLoaded', function() {
    // Check if user is authorized (aj08@gmail.com)
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser || currentUser.email !== 'aj08@gmail.com') {
        alert('This feature is only available for premium users.');
        window.location.href = 'index.html';
        return;
    }

    // Set up event listeners for AI selection
    document.getElementById('gpt4-option').addEventListener('click', function() {
        window.open('chatbot.html', '_blank');
    });

    document.getElementById('mistral-option').addEventListener('click', function() {
        window.open('mistral-ai.html', '_blank');
    });

    document.getElementById('llama-option').addEventListener('click', function() {
        window.open('llama-ai.html', '_blank');
    });
});