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
