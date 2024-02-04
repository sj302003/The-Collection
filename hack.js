<script>
function toggleChatbot() {
  var chatbotContainer = document.getElementById("chatbotContainer");
  if (chatbotContainer.style.display === "none") {
    chatbotContainer.style.display = "block";
  } else {
    chatbotContainer.style.display = "none";
  }
}

function sendMessage() {
  var userInput = document.getElementById("userInput").value;
  var conversation = document.getElementById("conversation");

  if (userInput.trim() !== "") {
    var userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.textContent = userInput;
    conversation.appendChild(userMessage);

    // Simulate bot response (replace with actual bot logic)
    var botMessage = document.createElement("div");
    botMessage.className = "message bot-message";
    botMessage.textContent = "This is a bot response.";
    conversation.appendChild(botMessage);

    // Scroll to the bottom of the conversation
    //conversation.scrollTop = conversation.scrollHeight;
    
    // Clear the input field
    document.getElementById("userInput").value = "";
  }
}
</script>