// JavaScript code for mobile and tablet devices
if (window.innerWidth > 1200) {
  function setElementHeightToScreen() {
    // Get the screen height
    const screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    // Select the element you want to resize
    const myElement = document.getElementById('commonNav'); // or document.querySelector('.your-class-name');

    // Set the height of the element to match the screen height
    myElement.style.height = screenHeight - 245 + 'px';
  }

  // Call the function to set the element's height initially and update it when the window is resized
  setElementHeightToScreen();
  window.addEventListener('resize', setElementHeightToScreen);

  console.log('1200');
} else {
  console.log('mobile');
}

// JavaScript code for mobile and tablet devices
