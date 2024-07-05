// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // function to display the current UTC time
  function displayUTCTime() {
  
      const currentDate = new Date();

      const utcHours = currentDate.getUTCHours();
      const utcMinutes = currentDate.getUTCMinutes();
      const utcSeconds = currentDate.getUTCSeconds();

      // format the time to HH:MM:SS
      const formattedTime = `${utcHours.toString().padStart(2, '0')}:${utcMinutes.toString().padStart(2, '0')}:${utcSeconds.toString().padStart(2, '0')}`;

      const currentTimeElement = document.getElementById('current-time-utc');

      currentTimeElement.textContent = `The time in UTC is: ${formattedTime}`;
  }

  displayUTCTime();

  // update the time every second
  setInterval(displayUTCTime, 1000);
});

document.addEventListener('DOMContentLoaded', () => {

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const currentDate = new Date();

  const currentDayIndex = currentDate.getDay();

  const currentDayName = daysOfWeek[currentDayIndex];

  const currentDayElement = document.getElementById('current-day');

  currentDayElement.textContent = `Today is ${currentDayName}`;
});
