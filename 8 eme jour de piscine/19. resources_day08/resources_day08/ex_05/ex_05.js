// Function to update the time display
function updateTime() {


    const currentTime = new Date();


    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const timeDisplay = `The current time is ${hours}:${minutes}.`;

    document.getElementById("current-time").textContent = timeDisplay;
}

// Initial display

update
updateTime();

// You can set an interval to update the time periodically (if needed).
// For example, to update every 1 minute:
// setInterval(updateTime, 60000);