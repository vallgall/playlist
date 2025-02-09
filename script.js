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
document.addEventListener("DOMContentLoaded", function () {
    const videoFrame = document.getElementById("videoFrame");

    if (!videoFrame) {
        console.error("Elemento 'videoFrame' no encontrado en el DOM.");
        return; // Detiene la ejecución si no encuentra el elemento
    }

    const songs = document.querySelectorAll(".song-item");

    songs.forEach(song => {
        song.addEventListener("click", function () {
            const videoUrl = this.getAttribute("data-video");
            videoFrame.src = videoUrl;
        });
    });
});
const canvas = document.getElementById("smokeCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 5;
        this.speedX = Math.random() * 1.5 - 0.75; // Movimiento más sutil
        this.speedY = Math.random() * 1.5 - 0.75;
        this.alpha = 1;
        this.life = Math.random() * 80 + 50; // Dura más tiempo
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.005; // Se desvanece más lentamente
        this.life--;
    }

    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = "rgba(255, 100, 100, 0.8)"; // Color rojo suave

        ctx.beginPath();
        this.drawHeart(ctx, this.x, this.y, this.size);
        ctx.fill();
    }

    drawHeart(ctx, x, y, size) {
        ctx.moveTo(x, y + size / 4);
        ctx.bezierCurveTo(x - size, y - size / 2, x - size, y - size, x, y - size / 1.5);
        ctx.bezierCurveTo(x + size, y - size, x + size, y - size / 2, x, y + size / 4);
    }
}

function createSmoke(x, y) {
    for (let i = 0; i < 5; i++) { // 🔹 Menos partículas (de 10 a 5)
        particlesArray.push(new Particle(x, y));
    }
}

function animateParticles() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.15)"; // 🔹 Más transparente para suavizar
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].alpha <= 0 || particlesArray[i].life <= 0) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(animateParticles);
}

document.addEventListener("mousemove", (event) => {
    createSmoke(event.clientX, event.clientY);
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animateParticles();
