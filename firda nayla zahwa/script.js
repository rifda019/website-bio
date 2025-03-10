const canvas = document.getElementById("loveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fungsi untuk menghitung posisi berdasarkan persamaan hati
function heartShape(t) {
    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    return { 
        x: x * 20 + canvas.width / 2, 
        y: -y * 20 + canvas.height / 2 
    };
}

// Fungsi menggambar teks berbentuk hati
function drawHeartText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";

    let text = "I Love You";
    let t = 0;

    const interval = setInterval(() => {
        if (t > Math.PI * 2) {
            clearInterval(interval);
        } else {
            let pos = heartShape(t);
            ctx.fillText(text, pos.x, pos.y);
            t += 0.1;
        }
    }, 100);
}

// Panggil fungsi untuk menggambar teks berbentuk hati
drawHeartText();
