document.addEventListener('DOMContentLoaded', function() {
    // Check if user is authorized (aj08@gmail.com)
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser || currentUser.email !== 'aj08@gmail.com') {
        alert('This feature is only available for premium users.');
        window.location.href = 'index.html';
        return;
    }

    const chatBody = document.getElementById('chat-body');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const closeBtn = document.getElementById('close-chat');

    // Close button functionality
    closeBtn.addEventListener('click', function() {
        window.close();
    });

    // Send message function
    function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        // Add user message to chat
        addMessage(message, 'user');
        userInput.value = '';

        // Call Llama 3 AI API
        fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer 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",
                "HTTP-Referer": "https://footypitch.com",
                "X-Title": "FootyPitch",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "meta-llama/llama-3.3-70b-instruct:free",
                "messages": [{
                    "role": "user",
                    "content": message
                }]
            })
        })
        .then(response => response.json())
        .then(data => {
            const aiResponse = data.choices[0].message.content;
            addMessage(aiResponse, 'bot');
        })
        .catch(error => {
            console.error('Error:', error);
            addMessage("Sorry, I'm having trouble connecting to the AI service. Please try again later.", 'bot');
        });
    }

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Event listeners
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});