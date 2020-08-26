let ISPLAYERROTATE = false;
let ISPLAYERMOVE = false;
let ISPLAYERGETALLCOINS = false;
let FRASENUMBER = -1;

let TIME = 0;
let TIMESTARTED = false;



let frases = [
    'Ку, щас будет микрообучалочка.',
    'Поворот на ПКМ и ЛКМ',
    'Так, Теперь попробуй двигаться путем вращения колесика мыши.',
    'Да, двигаться можно только вперед.',
    'Продержись всего 100 секунд и ты выиграл, удачи!',
    ''
]
let tip = new Audio('sounds/tip.wav');
tip.volume = 0.25;
tip.loop = false;
function showFrase(n){
    fraseWindow.innerText = '';
    fraseWindow.innerText = frases[n];
    tip.play();
    if(n < 0 || n > 4){
        fraseWindow.innerText = '';
    }
}

let bomb = [];
let laser = [];

function attack(){
    if(TIMESTARTED){
        TIME++;
        fraseWindow.innerText = 100 - TIME;
    }

    if(TIME == 1){
        bomb.push({
            x: rand(0, 4),
            y: rand(0, 3),
            time: 4000,
        })
    }

    if(TIME == 10){
        bomb.push({
            x: rand(0, 4),
            y: rand(0, 3),
            time: 4000,
        })
    }

    if(TIME == 20){
        bomb.push({
            x: rand(0, 4),
            y: rand(0, 3),
            time: 4000,
        })
    }

    if(TIME == 30){
        bomb.push({
            x: rand(0, 4),
            y: rand(0, 3),
            time: 4000,
        })
    }

    if(TIME == 40){
        bomb = [];
        bot.face = 4;
    }

    if(TIME == 42){
        bomb.push({
            x: 0,
            y: 0,
            time: 2000,
        })

        bomb.push({
            x: 1,
            y: 0,
            time: 1900,
        })

        bomb.push({
            x: 2,
            y: 0,
            time: 1800,
        })

        bomb.push({
            x: 3,
            y: 0,
            time: 1700,
        })

        bomb.push({
            x: 4,
            y: 0,
            time: 1600,
        })
    }

    if(TIME == 44){
        bomb = [];
    }

    if(TIME == 45){
        bomb.push({
            x: 0,
            y: 1,
            time: 1500,
        })

        bomb.push({
            x: 1,
            y: 1,
            time: 1400,
        })

        bomb.push({
            x: 2,
            y: 1,
            time: 1300,
        })

        bomb.push({
            x: 3,
            y: 1,
            time: 1200,
        })

        bomb.push({
            x: 4,
            y: 1,
            time: 1100,
        })
    }

    if(TIME == 47){
        bomb = [];
    }

    if(TIME == 48){
        bomb.push({
            x: 0,
            y: 2,
            time: 1000,
        })

        bomb.push({
            x: 1,
            y: 2,
            time: 900,
        })

        bomb.push({
            x: 2,
            y: 2,
            time: 800,
        })

        bomb.push({
            x: 3,
            y: 2,
            time: 700,
        })

        bomb.push({
            x: 4,
            y: 2,
            time: 600,
        })
    }

    if(TIME == 50){
        bomb = [];
    }

    if(TIME == 51){
        bomb.push({
            x: 0,
            y: 3,
            time: 500,
        })

        bomb.push({
            x: 1,
            y: 3,
            time: 400,
        })

        bomb.push({
            x: 2,
            y: 3,
            time: 300,
        })

        bomb.push({
            x: 3,
            y: 3,
            time: 200,
        })

        bomb.push({
            x: 4,
            y: 3,
            time: 100,
        })
    }

    if(TIME == 55){
        bomb = [];
    }

    if(TIME == 56){
        laser.push({
            x: rand(0, 4),
            time: 3000,
        })
    }

    if(TIME == 57){
        laser.push({
            x: player.x,
            time: 2000,
        })
    }

    if(TIME == 58){
        laser.push({
            x: player.x,
            time: 2000,
        })
    }

    if(TIME == 59){
        laser.push({
            x: player.x,
            time: 2000,
        })
    }

    if(TIME == 61){
        laser.push({
            x: 0,
            time: 2200,
        })

        laser.push({
            x: 1,
            time: 2200,
        })

        laser.push({
            x: 3,
            time: 2200,
        })

        laser.push({
            x: 4,
            time: 2200,
        })
    }

    if(TIME == 64){
        bomb.push({
            x: player.x,
            y: player.y,
            time: 1900,
        })
    }

    if(TIME == 72){
        bomb.push({
            x: player.x,
            y: player.y,
            time: 1800,
        })
        laser.push({
            x: 4,
            time: 2200,
        })
    }

    if(TIME == 82){
        bomb.push({
            x: player.x,
            y: player.y,
            time: 1800,
        })
        laser.push({
            x: player.x,
            time: 2200,
        })
    }

    if(TIME == 92){
        bomb.push({
            x: player.x,
            y: player.y,
            time: 1500,
        })
    }

    if(TIME == 100){
        bomb = [];
        bot.face = 4;
        shake = 20;
        stopSound.play();
    }
}

document.onkeydown = function(e){
    if(e.key == ' '){
        TIME = 80;
    }
}

let boomSound = new Audio('sounds/boom.wav');
boomSound.value = 0.2;

function death(){
    ISPLAYERROTATE = false;
    ISPLAYERMOVE = false;
    ISPLAYERGETALLCOINS = false;
    FRASENUMBER = -1;
    bot.face = 0;
    TIME = 0;
    TIMESTARTED = false;

    ISGAMESTARTED = false;
    player.x = 2;
    player.y = 1;

    bomb = [];
    laser = [];

    document.getElementsByClassName('mainTitle')[0].style.marginTop =  '0px';

    bossSound.pause();
    bossSound.currentTime = 0.0;

    backSound.currentTime = 0.0;
    backSound.play();
}

let bombSprite = document.getElementById('bomb');

function drawBombs(){
    for(let i = 0; i < bomb.length; i++){
        ctx.fillStyle = 'rgb(0,0,0,0.3)';
        ctx.beginPath();
        ctx.arc(Math.floor(cnv.width/2-(264/2))+CAM.X+30+bomb[i].x*64, cnv.height/2+CAM.Y+30+bomb[i].y*64, 20, 0, Math.PI*2, 1);
        ctx.fill();

        ctx.drawImage(bombSprite, Math.floor(cnv.width/2-(264/2))+CAM.X+20+bomb[i].x*64, cnv.height/2+CAM.Y-20+bomb[i].y*64-bomb[i].time);
        if(bomb[i].time > 0){
            bomb[i].time-=40;
        }

        if(bomb[i].time <= 0){

            if(bomb[i].x == player.x && bomb[i].y == player.y){
                death();
            }

            boomSound.currentTime = 0.0;
            boomSound.play();
            shake = 10;
            bomb.splice(i, 1);
            bomb.push({
                x: player.x,
                y: player.y,
                time: 4000,
            })
        }
    }
}

let laserSprite = document.getElementById('laser');

let laserSound = new Audio('sounds/laser.wav');
laser.volume = 0.15;

function drawLasers(){
    for(let i = 0; i < laser.length; i++){
        ctx.drawImage(laserSprite, Math.floor(cnv.width/2-(264/2))+CAM.X+20+laser[i].x*64, cnv.height/2+CAM.Y-60);

        ctx.fillStyle = 'rgb(255, 100, 0, 0.25)';

        ctx.beginPath();
        ctx.arc(Math.floor(cnv.width/2-(264/2))+CAM.X+34+laser[i].x*64, cnv.height/2+CAM.Y-10, laser[i].time/100, 0, Math.PI*2, 1);
        ctx.fill();

        if(laser[i].time > 0){
            laser[i].time -= 40;
        }

        if(laser[i].time <= 0){
            laserSound.currentTime = 0.0;
            laserSound.play();
            shake=8;
            ctx.fillStyle = 'red';
            ctx.fillRect(Math.floor(cnv.width/2-(264/2))+CAM.X+34+laser[i].x*64, cnv.height/2+CAM.Y-10, 4, 1000);

            if(TIME >= 65){
                laser.push({
                    x: player.x,
                    time: 3300,
                })
            }

            if(player.x == laser[i].x){
                death();
            }
            laser.splice(i, 1);
        }
    }
}

let endY = 0;
function endGame(){
    if(TIME > 100){
        endY+=5;
        cnv.style.marginTop = endY*-1 + 'px'
        document.getElementsByClassName('endTitle')[0].style.marginTop = endY*-1 + 'px';
        bot.face = rand(0, 5);
        bomb = [];
        laser = [];
        shake = 10;
    }
}




setInterval(attack, 1000);
