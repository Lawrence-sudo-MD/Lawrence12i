 // create a function to update the date and time
 function updateDateTime() {
    // create a new `Date` object
    const now = new Date();

    // get the current date and time as a string
    const currentDateTime = now.toLocaleString();

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#datetime').textContent = currentDateTime;
  }

  // call the `updateDateTime` function every second
  setInterval(updateDateTime, 1000);


  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
      document.getElementById('ip').innerText = `Your IP address is: ${data.ip}`;
  })
  .catch(error => {
      console.error('Error fetching IP address:', error);
  });


  navigator.getBattery().then(function(battery) {
    function updateBatteryStatus() {
        const batteryLevel = Math.round(battery.level * 100);
        document.getElementById('battery-status').innerText = `Battery Level: ${batteryLevel}%`;
    }

    updateBatteryStatus();
    battery.addEventListener('levelchange', updateBatteryStatus);
});


function getDeviceName() {
    const userAgent = navigator.userAgent;
    let deviceName = "Unknown Device";

    if (/android/i.test(userAgent)) {
        deviceName = "Android Device";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        deviceName = "iOS Device";
    } else if (/Windows/i.test(userAgent)) {
        deviceName = "Windows Device";
    } else if (/Macintosh/i.test(userAgent)) {
        deviceName = "Mac Device";
    }

    return deviceName;
}

document.getElementById("device-name").innerText = getDeviceName();


function getProcessorInfo() {
    const userAgent = navigator.userAgent;
    const processorInfo = userAgent.includes("Intel") ? "Intel Processor" : 
                          userAgent.includes("AMD") ? "AMD Processor" : 
                          "Processor information not available";
    document.getElementById("processor-info").innerText = processorInfo;
}

getProcessorInfo();