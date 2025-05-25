// Final Countdown Timer Script

function startCountdown() {
    // Set the date we're counting down to (fixed date: August 25, 2025)
    // تاريخ ثابت لا يتغير مع تحديث الصفحة (25 أغسطس 2025)
    const countDownDate = new Date('2025-08-25T03:17:00Z').getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Function to add leading zero
        const formatTime = (time) => time < 10 ? `0${time}` : time;

        // Display the result in the elements
        // Check if elements exist before setting innerText (robustness)
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (daysEl) daysEl.innerText = formatTime(days);
        if (hoursEl) hoursEl.innerText = formatTime(hours);
        if (minutesEl) minutesEl.innerText = formatTime(minutes);
        if (secondsEl) secondsEl.innerText = formatTime(seconds);

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            const countdownEl = document.getElementById("countdown");
            // Keep the countdown structure but show zeros or a message
            if (countdownEl) {
                 if (daysEl) daysEl.innerText = "00";
                 if (hoursEl) hoursEl.innerText = "00";
                 if (minutesEl) minutesEl.innerText = "00";
                 if (secondsEl) secondsEl.innerText = "00";
                 // Optionally add a message above/below countdown
                 // countdownEl.insertAdjacentHTML('beforebegin', '<h2>لقد وصلنا!</h2>');
            }
        }
    }, 1000);
}

// Start the countdown when the page loads
document.addEventListener('DOMContentLoaded', startCountdown);
