document.addEventListener("DOMContentLoaded", function () {
    const piano = document.getElementById("piano");

    // Define the piano keys for two octaves (C4 to C6)
    const keys = [
        { note: "C4", sound: "c4.mp3" },
        { note: "C#4", sound: "c-sharp4.mp3" },
        { note: "D4", sound: "d4.mp3" },
        { note: "D#4", sound: "d-sharp4.mp3" },
        { note: "E4", sound: "e4.mp3" },
        { note: "F4", sound: "f4.mp3" },
        { note: "F#4", sound: "f-sharp4.mp3" },
        { note: "G4", sound: "g4.mp3" },
        { note: "G#4", sound: "g-sharp4.mp3" },
        { note: "A4", sound: "a4.mp3" },
        { note: "A#4", sound: "a-sharp4.mp3" },
        { note: "B4", sound: "b4.mp3" },
        // Second octave
        { note: "C5", sound: "c5.mp3" },
    
        // You can add more keys for the third octave if needed
    ];

    // Create piano keys dynamically
    keys.forEach((key) => {
        const keyElement = document.createElement("div");
        keyElement.className = key.note.includes("#") ? "key black-key" : "key";
        keyElement.dataset.note = key.note;
        keyElement.addEventListener("click", () => playSound(key.sound));
        piano.appendChild(keyElement);
    });

    // Function to play the sound
    function playSound(soundFile) {
        const audio = new Audio(`path-to-your-sounds/${soundFile}`);
        audio.play();
    }
});
