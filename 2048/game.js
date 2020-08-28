let cnv = document.querySelector('#c');
cnv.height = Math.floor(window.innerHeight/2)+250;
let ctx = cnv.getContext('2d');

let rand = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

let grid = [[],[],[],[]];

//filling grid zero's::
function createGrid(){
    let x = 0;
    let y = 0;
    for(let i = 0; i < grid.length; i++){
        let y = i;
        for(let j = 0; j < 4; j++){
            let x = j;
            grid[i].push({
                num: 0,
                x: x,
                y: y,
            })
        }
    }
}
createGrid();

//create new cell with 2 or 4 number in it::
function addCells(){
    let num = [2, 4][rand(0, 1)];
    let freeCells = [];
    //found zero cells::
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j].num == 0){
                freeCells.push({
                    x: grid[i][j].x,
                    y: grid[i][j].y,
                })
            }
        }
    }
    //debug
    //console.log(freeCells);
    let r = rand(0, freeCells.length-1);
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j].x == freeCells[r].x && grid[i][j].y == freeCells[r].y){
                grid[i][j].num = num;
            }
        }
    }
}
addCells();

//drawing cell's::
function drawCells(){
    ctx.clearRect(0,0, cnv.width, cnv.height);

    //fill up side of canvas::
    ctx.fillStyle = '#eff0eb';
    ctx.fillRect(0,0,cnv.clientWidth,cnv.height-500);

    //draw cells on canvas::
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){

            //pick a color by numbre (cringe =( )::

            if(grid[i][j].num == 2){
                ctx.fillStyle = '#EA69A6';
                ctx.fillRect(grid[i][j].x*125, (grid[i][j].y*125+cnv.height-500), 125, 125);
            } else if (grid[i][j].num == 4){
                ctx.fillStyle = '#EA3A8D';
                ctx.fillRect(grid[i][j].x*125, (grid[i][j].y*125+cnv.height-500), 125, 125);
            } else if (grid[i][j].num == 8){
                ctx.fillStyle = '#D50065';
                ctx.fillRect(grid[i][j].x*125, (grid[i][j].y*125+cnv.height-500), 125, 125);
            } else if (grid[i][j].num == 16){
                ctx.fillStyle = '#A02860';
                ctx.fillRect(grid[i][j].x*125, (grid[i][j].y*125+cnv.height-500), 125, 125);
            } else if (grid[i][j].num == 32){
                ctx.fillStyle = '#8A0041';
                ctx.fillRect(grid[i][j].x*125, (grid[i][j].y*125+cnv.height-500), 125, 125);
            } 

            if(grid[i][j].num == 64){
                ctx.fillStyle = '#5ED0BD';
                ctx.fillRect(grid[i][j].x*125, (grid[i][j].y*125+cnv.height-500), 125, 125);
            } else if (grid[i][j].num == 128){
                ctx.fillStyle = '#34D0B6';
                ctx.fillRect(grid[i][j].x*125, (grid[i][j].y*125+cnv.height-500), 125, 125);
            } else if (grid[i][j].num == 256){
                ctx.fillStyle = '#00A287';
                ctx.fillRect(grid[i][j].x*125, (grid[i][j].y*125+cnv.height-500), 125, 125);
            } else if (grid[i][j].num == 512){
                ctx.fillStyle = '#1E796A';
                ctx.fillRect(grid[i][j].x*125, (grid[i][j].y*125+cnv.height-500), 125, 125);
            } else if (grid[i][j].num == 1024){
                ctx.fillStyle = '#006957';
                ctx.fillRect(grid[i][j].x*125, (grid[i][j].y*125+cnv.height-500), 125, 125);
            } 

            else if (grid[i][j].num >= 2048){
                ctx.fillStyle = '#FFD300';
                ctx.fillRect(grid[i][j].x*125, (grid[i][j].y*125+cnv.height-500), 125, 125);
            } 
            
        }
    }
}
drawCells();

//move cells with arrows key's::

function moveCells(side){
    addCells();
    drawCells();
}

document.onkeydown = function(e){
    switch(e.which){
        case 37: moveCells('left'); break;
    }
}