
let shake = 0;
let dir = 1;

function shakeCam(){
    if(shake > 0){
        if(dir == 1){
            CAM.X += shake;
            CAM.Y += shake;
            dir *= -1;
        }

        else if(dir == -1){
            CAM.X -= shake;
            CAM.Y -= shake;
            dir *= -1;
        }
        shake--;
    }

    if(shake == 0){
        CAM.X = 0;
        CAM.Y = 0;
    }
}

setInterval(shakeCam, 1000/24);