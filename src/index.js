const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const dotsAr = [];

class Player {
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}

const player = new Player(canvas.width / 2, canvas.height / 2, 30, 'black');

console.log(player)

player.draw()

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
        const radius = 30;

        let x = Math.random() * canvas.width;
        let y = 0;

        const color = "#654321";

        const angle = Math.atan2(canvas.height, canvas.width / 2 - x)

        const velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }
        dotsAr.push(new Dots(x, y, radius, color, velocity))

        console.log(dotsAr)
    }, 700)
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