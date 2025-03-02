document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");

    // Function to add a message to the chat box
    function addMessage(message, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");

        // Add avatar
        const avatar = document.createElement("img");
        avatar.src = sender === "user" ? "/static/images/user.png" : "/static/images/bot.jpeg";  
        avatar.alt = sender === "user" ? "User" : "Bot";
        avatar.classList.add("avatar");

        // Create text element
        const textElement = document.createElement("span");
        textElement.textContent = message;

        // Append elements
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(textElement);
        chatBox.appendChild(messageDiv);

        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Function to send user input to Flask backend
    function handleUserInput() {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        // Add user message to chat
        addMessage(userMessage, "user");

        // Clear input field
        userInput.value = "";

        // Send message to backend
        fetch("/get_response", {  
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage })
        })
        .then(response => response.json())
        .then(data => {
            addMessage(data.response, "bot");  // Display AI response
        })
        .catch(error => {
            addMessage("Error! Please try again.", "bot");
        });
    }

    // Send button click event
    sendButton.addEventListener("click", handleUserInput);

    // Enter key event for input field
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });
});
