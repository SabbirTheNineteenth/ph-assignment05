
  // Function to update heart count in Navbar
  function updateHeartCount() {

    const heartCountElement = document.getElementById("heartCount");
    let currentCount = parseInt(heartCountElement.innerText);
    

    heartCountElement.innerText = currentCount + 1;
  }

  
  const heartIcons = document.querySelectorAll('.heart-icon');
  heartIcons.forEach(icon => {
    icon.addEventListener('click', updateHeartCount);
  });
