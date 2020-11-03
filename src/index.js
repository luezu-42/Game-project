const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const dotsAr = [];

class Dots {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }

    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}
function spawn(){
    setInterval(()=>{
        const x = 100;
        const y = 100;
        const radius = 30;
        const color = "green";
        const velocity = {
            x: 1,
            y: 1
        }
        dotsAr.push(new Dots(x, y, radius, color, velocity))

        console.log(dotsAr)
    }, 1000)
}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    dotsAr.forEach((Dots) => {
        Dots.update()
    })
}

animate()
spawn()