document.addEventListener('DOMContentLoaded', () => {
    // Display current time in UTC
    const currentTimeElement = document.getElementById('currentTimeUTC');
    const currentDayElement = document.getElementById('currentDay');

    function updateTime() {
        const now = new Date();
        currentTimeElement.textContent = now.toUTCString().split(' ')[4];
        currentDayElement.textContent = now.toLocaleString('en-US', { weekday: 'long' });
    }

    updateTime();
    setInterval(updateTime, 1000);
});
