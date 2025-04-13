document.addEventListener('DOMContentLoaded', function() {
    // Chatbot elements
    const chatInput = document.querySelector('.chat-input');
    const sendButton = document.querySelector('.send-btn');
    const chatBody = document.querySelector('.chat-body');
    const chips = document.querySelectorAll('.chip');

    // FAQ elements
    const faqItems = document.querySelectorAll('.faq-item');

    // Function to add a new message
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
        messageDiv.textContent = text;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Handle send button click
    sendButton.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, true);
            chatInput.value = '';
            
            setTimeout(() => {
                const responses = [
                    "I'll help you with that! What specific information are you looking for?",
                    "That's a great fitness goal. Let me provide some tailored advice for you.",
                    "I have several recommendations that might help. Would you like to know more?",
                    "I can definitely assist with that. Let me put together some resources for you."
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addMessage(randomResponse);
            }, 1000);
        }
    });

    // Allow sending message with Enter key
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });

    // Handle suggestion chips
    chips.forEach(chip => {
        chip.addEventListener('click', function() {
            addMessage(this.textContent, true);

            setTimeout(() => {
                let response = '';
                switch (this.textContent) {
                    case 'Workout plans':
                        response = "I can help you create a personalized workout plan. What's your fitness level and what are your goals?";
                        break;
                    case 'Nutrition advice':
                        response = "Nutrition is key to fitness success! Are you looking for meal planning, macro tracking, or general dietary guidance?";
                        break;
                    case 'Track progress':
                        response = "Tracking your progress is motivating! Would you like to track measurements, weight, or workout performance?";
                        break;
                    default:
                        response = "I'll help you with that! What specifically are you interested in?";
                }
                addMessage(response);
            }, 1000);
        });
    });

    // FAQ toggle functionality
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });
});
