const countdown = document.querySelector('.countdown');

// Set Launch Date
const launchDate = new Date('Oct 1, 2018 13:00:00').getTime();

// Update Every second
const intvl = setInterval(() => {
    // Get today's date and time (ms)
    const now = new Date().getTime();

    // Distance from now to the launch date 
    const distance = launchDate - now;
    console.log(distance);
    // Time Calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display result
    countdown.innerHTML = `
<div>${days}<span>Days</span></div>
<div>${hours}<span>Hours</span></div>
<div>${mins}<span>Minutes</span></div>
<div>${seconds}<span>Seconds</span></div>
`;

    // If luanch date passed
    if (distance < 0) {
        // Stop countdown
        clearInterval(intvl);

        // Style and output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!';
    }

}, 1000);