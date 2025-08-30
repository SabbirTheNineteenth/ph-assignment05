//   Heart count Function-
  function updateHeartCount() {

    const heartCountElement = document.getElementById("heartCount");
    let currentCount = parseInt(heartCountElement.innerText);
    

    heartCountElement.innerText = currentCount + 1;
  }

  
  const heartIcons = document.querySelectorAll('.heart-icon');
  heartIcons.forEach(icon => {
    icon.addEventListener('click', updateHeartCount);
  });

  document.addEventListener("DOMContentLoaded", function() {
  
  let copyCount = 0;

  // copy count display
  const copyCountDisplay = document.getElementById('copyCountDisplay');

  // Copy button 
  document.querySelectorAll('.btn-copy').forEach(button => {
    button.addEventListener('click', function() {

      // Though I am beginner but I searched google for How to get element without extra class and somehow I managed

      const serviceNumber = this.closest('.flex-col').querySelector('.text-3xl').innerText;

      // copy number and alert user
      navigator.clipboard.writeText(serviceNumber).then(() => {
        alert(`${serviceNumber} copied to clipboard!`);

        // Increase the copy count
        copyCount++;

        //copy count total
        copyCountDisplay.innerText = copyCount;
         
        
      });
    });
  });

  // Call alert
  document.querySelectorAll('.btn-call').forEach(button => {
    button.addEventListener('click', function() {
      const serviceName = this.closest('.flex-col').querySelector('h3').innerText;
      const serviceNumber = this.closest('.flex-col').querySelector('.text-3xl').innerText;
      let coinCount = parseInt(document.getElementById('coinCount').innerText);
      if (coinCount < 20) {
        alert("Insufficient coins to make the call!");
        return;
      }

      // Deduct coins and update 
      coinCount -= 20;
      document.getElementById('coinCount').innerHTML = `
        <span class="text-xs md:text-sm font-bold px-4">${coinCount}</span>
        <img src="assets/coin.png" alt="coin" class="h-[18px] w-[20px] md:w-[24px] md:h-[24px]">
      `;

      // Get the current time
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

      // new call history item
      const historyItem = document.createElement('div');
      historyItem.classList.add('rounded-[8px]', 'p-2', 'bg-gray-100');
      historyItem.innerHTML = `
        <p class="font-semibold">${serviceName}</p>
        <p class="text-sm text-gray-500">${serviceNumber} <span class="float-right">${currentTime}</span></p>
      `;
      document.querySelector('.call-history-container').appendChild(historyItem);

      // after call showing alert
      alert(`Calling ${serviceName} at ${serviceNumber}`);
    });
  });

  // Clear History button 
  document.getElementById('clearHistory').addEventListener('click', function() {
    document.querySelector('.call-history-container').innerHTML = '';
  });
});
