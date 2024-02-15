document.addEventListener('DOMContentLoaded', function() {
    createStars();
    setInterval(createShootingStar, Math.random() * 7000 + 8000);
});

function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const starColors = ['#9d8ea5', '#a0bcd4', '#6b4b60', '#a4bbd3'];  // Array of updated colors

    for (let i = 0; i < 200; i++) {
        let star = document.createElement('div');
        star.classList.add('star');

        // Assign random color to star
        let colorIndex = Math.floor(Math.random() * starColors.length);
        star.style.backgroundColor = starColors[colorIndex];

        // Initial position (center of the screen)
        star.style.left = '50%';
        star.style.top = '50%';

        // Standard size (50% bigger than original)
        let size = Math.random() * 3 * 1.5;

        // Check if star is #86b1ae
        if (starColors[colorIndex] === '#86b1ae') {
            // Make diamond-shaped and twice as big
            star.style.width = `${size * 2}px`;
            star.style.height = `${size * 2}px`;
            star.style.transform = 'rotate(45deg)'; // Rotate to make it diamond-shaped
        } else {
            // Regular star size
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
        }

        starsContainer.appendChild(star);
        twinkleStar(star);
        driftStar(star);

        // Immediately start moving star to final position
        window.requestAnimationFrame(() => {
            star.style.transition = 'left 1s ease-out, top 1s ease-out'; // Smooth and curved transition
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
        });
    }
}



document.addEventListener('DOMContentLoaded', function() {
    updateProgressBarAndTimer();
    setInterval(updateProgressBarAndTimer, 1000); // Update every second
});

function updateProgressBarAndTimer() {
    const startDate = new Date('2024-01-15T00:00:00');
    const endDate = new Date('2024-02-29T21:00:00');
    const now = new Date();
    const totalDuration = endDate - startDate;
    const timeLeft = endDate - now;

    if (timeLeft <= 0) {
        // Countdown has ended, display the "Open Album" button
        displayOpenAlbumButton();
        return; // Stop further execution of this function
    }

    // Calculate current progress
    let progress = 0;
    if (now > startDate) {
        progress = ((now - startDate) / totalDuration) * 100;
        progress = Math.min(Math.max(progress, 0), 100); // Clamp between 0 and 100
    }

    // Update progress bar width
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progress}%`;

    // Update countdown timer
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

function displayOpenAlbumButton() {
    const countdownContainer = document.getElementById('countdown-timer'); // Container for the timer
    const progressBarContainer = document.getElementById('progress-bar-container'); // Container for the progress bar
    const uploadingTextElement = document.querySelector("#file-uploading-text"); // Get the uploading text element

    // Clear existing content and hide elements
    countdownContainer.innerHTML = '';
    progressBarContainer.innerHTML = '';

    // Remove the uploading text element if it exists
    if (uploadingTextElement) {
        uploadingTextElement.remove();
    }

    // Create button
    const button = document.createElement('a');
    button.href = 'https://music.apple.com/us/artist/isaiah-schmidt/1640949166';
    button.innerHTML = `<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external">
        <path fill-rule="evenodd" d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
    </svg> Open Album`;
    button.className = 'open-album-button'; // Class for styling
    button.target = '_blank'; // Open in a new tab

    // Replace the countdown timer and progress bar with the button
    countdownContainer.appendChild(button);
    progressBarContainer.style.display = 'none'; // Optionally hide progress bar container if not removed
}




function twinkleStar(star) {
    setInterval(() => {
        star.style.opacity = Math.random();
    }, Math.random() * 2000 + 500);
}

function driftStar(star) {
    setInterval(() => {
        star.style.left = `calc(${star.style.left} + 1%)`;
    }, 120000); // 2 minutes
}

function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('star', 'shooting-star');
    shootingStar.style.left = `${Math.random() * 50}vw`;
    shootingStar.style.top = `${Math.random() * 50}vh`;
    shootingStar.style.width = `${Math.random() * 300 + 100}px`;
    shootingStar.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(shootingStar);

    // Animate and remove the shooting star after it's done
    shootingStar.style.display = 'block';
    setTimeout(() => {
        document.body.removeChild(shootingStar);
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    animateLoadingDots();
    // ... other initialization code ...
});

function animateLoadingDots() {
    const dotStates = ["   ", ".  ", ".. ", "..."];
    let currentIndex = 0;
    setInterval(() => {
        document.getElementById('loading-dots').textContent = dotStates[currentIndex];
        currentIndex = (currentIndex + 1) % dotStates.length;
    }, 500); // Adjust the timing as needed
}