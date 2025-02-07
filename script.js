const audioPlayer = document.getElementById('audioPlayer');

function playExplanation(audioPath) {
    audioPlayer.src = audioPath;
    audioPlayer.play();
}

function playSong(songPath) {
    audioPlayer.src = songPath;
    audioPlayer.play();
    alert("Reproduciendo la canción...");
}
document.addEventListener("DOMContentLoaded", function() {
    const videoFrame = document.getElementById("videoFrame");

    if (!videoFrame) {
        console.error("Elemento 'videoFrame' no encontrado en el DOM.");
        return; // Detiene la ejecución si no encuentra el elemento
    }

    const songs = document.querySelectorAll(".song-item");

    songs.forEach(song => {
        song.addEventListener("click", function() {
            const videoUrl = this.getAttribute("data-video");
            videoFrame.src = videoUrl;
        });
    });
});

