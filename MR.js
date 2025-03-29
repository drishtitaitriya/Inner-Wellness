

// Sound files (Ensure correct file paths)
var sounds = {
    rain: new Audio("sounds/rain-01.mp3"),
    ocean: new Audio("sounds/ocean-waves-1.mp3")
};

let timer, selectedSound;

// Start Meditation
document.getElementById("startMeditation").addEventListener("click", function () {
    let minutes = document.getElementById("timer").value;
    let secondsLeft = minutes * 60;
    document.getElementById("timeLeft").innerText = `Time Left: ${minutes} min`;

    selectedSound = document.getElementById("sound").value;

    // Reset sound if already playing
    sounds[selectedSound].pause();
    sounds[selectedSound].currentTime = 0;

    // Play sound and loop it
    sounds[selectedSound].loop = true;
    sounds[selectedSound].play();

    // Timer
    timer = setInterval(() => {
        secondsLeft--;
        let min = Math.floor(secondsLeft / 60);
        let sec = secondsLeft % 60;
        document.getElementById("timeLeft").innerText = `Time Left: ${min} min ${sec} sec`;

        if (secondsLeft <= 0) {
            clearInterval(timer);
            sounds[selectedSound].pause();
            document.getElementById("timeLeft").innerText = "Session Completed!";
        }
    }, 1000);
});

// Stop Meditation
document.getElementById("stopMeditation").addEventListener("click", function () {
    clearInterval(timer);
    if (selectedSound) {
        sounds[selectedSound].pause();
        sounds[selectedSound].currentTime = 0;
    }
    document.getElementById("timeLeft").innerText = "Session Stopped.";
});

// Dark Mode Toggle
let darkModeButton = document.getElementById("toggleDarkMode");
darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.innerText = "Dark Mode On";
    } else {
        darkModeButton.innerText = "Dark Mode Off";
    }
});

// Back to Home
document.getElementById("backToHome").addEventListener("click", function () {
    window.location.href = "index.html"; // Change to your homepage URL
});
