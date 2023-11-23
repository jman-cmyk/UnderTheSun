document.addEventListener('DOMContentLoaded', function() {
    createStars();
    setInterval(createShootingStar, Math.random() * 7000 + 8000);
});

function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const starColors = ['#e15701', '#ffeabc', '#2b86bf', '#2db6d2']; // Array of colors

    for (let i = 0; i < 200; i++) {
        let star = document.createElement('div');
        star.classList.add('star');

        // Assign random color to star
        let colorIndex = Math.floor(Math.random() * starColors.length);
        star.style.backgroundColor = starColors[colorIndex];

        // Set position
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        // Standard size (50% bigger than original)
        let size = Math.random() * 3 * 1.5; 

        // Check if star is #ffeabc
        if (starColors[colorIndex] === '#ffeabc') {
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
    }
}


function updateProgressBarAndTimer() {
    const targetDate = new Date('2023-12-15T08:00:00');
    const now = new Date();
    const timeLeft = targetDate - now;

    // Update progress bar
    const totalDuration = targetDate - new Date('2023-01-01T00:00:00'); // Assuming the start date is January 1, 2023
    const progress = ((totalDuration - timeLeft) / totalDuration) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

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
