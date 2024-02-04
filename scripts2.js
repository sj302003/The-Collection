// Function to handle the dragstart event
function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.src); // Set the data being dragged (image source URL)
}

// Function to handle the dragover event
function handleDragOver(event) {
    event.preventDefault(); // Prevent default behavior which may not allow dropping
}

// Function to handle the drop event
function handleDrop(event) {
    event.preventDefault(); // Prevent default behavior
    const displayedImage = document.getElementById('displayedImage'); // Selecting the existing image element
    const imageUrl = event.dataTransfer.getData('text/plain'); // Get the dropped image URL from the dragged data
    displayedImage.src = imageUrl; // Set the src attribute of the existing image element to the dropped image URL
}

// Add event listeners for dragstart, dragover, and drop events on the image buttons and center panel
const imageButtons = document.querySelectorAll('.image-button');
const centerPanel = document.querySelector('.center-panel');

imageButtons.forEach(button => {
    button.addEventListener('dragstart', handleDragStart);
});

centerPanel.addEventListener('dragover', handleDragOver);
centerPanel.addEventListener('drop', handleDrop);
function displayAsButton() {
    const displayedImage = document.getElementById('displayedImage'); // Selecting the displayed image element
    const imageUrl = displayedImage.src; // Get the image URL
    const button = document.createElement('button'); // Create a button element
    const buttonText = document.createTextNode('Image Button'); // Create text node for button text (you can change this)
    
    button.appendChild(buttonText); // Append text node to button
    button.style.backgroundImage = `url('${imageUrl}')`; // Set button background image to displayed image URL
    button.style.backgroundSize = 'cover'; // Ensure image covers the button
    button.style.width = '200px'; // Set button width (adjust as needed)
    button.style.height = '200px'; // Set button height (adjust as needed)
    
    document.querySelector('.panel').appendChild(button); // Append button to the center panel
}

