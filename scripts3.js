// Get references to the buttons
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const backButton = document.getElementById('backButton');

// Get reference to the video element
const video = document.getElementById('videoBackground');

// Function to start the video
function enableCamera() {
    video.play(); // Start the video playback
}

// Function to stop the video
function stopCamera() {
    video.pause(); // Pause the video playback
}

// Function to navigate back to index2.html
function navigateBack() {
    window.location.href = 'index2.html'; // Redirect to index2.html
}

// Attach click event listeners to the buttons
startButton.addEventListener('click', enableCamera);
stopButton.addEventListener('click', stopCamera);
backButton.addEventListener('click', navigateBack);
