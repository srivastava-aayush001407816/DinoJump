document.addEventListener('DOMContentLoaded' , () => {

    const dino = document.querySelector('.dino');
    const grid = document.querySelector('.grid');
    const alert = document.getElementById('alert');
    const body = document.querySelector('body');
    let midJump = false;
    let position=0;
    let gravity = 0.9;
    let isGameOver = false;


    function control(e){
        if(e.keyCode===32){
            //console.log('pressed');
            if(!midJump){
                midJump = true;
                jump();
            }   
        }
    }

    document.addEventListener('keyup' , control);

    function jump(){
        let count =0;
        let timer = setInterval(function(){
            //Gravity
            if(count === 15){
                clearInterval(timer)
                console.log('down');
                let downTimerId = setInterval(function(){
                    if(count === 0){
                        clearInterval(downTimerId);
                        midJump = false;
                    }
                    position -= 4.5;
                    count--;
                    position = position * gravity ; 
                    dino.style.bottom = position + 'px';
                },20);
            }
            //Jumping up
            console.log('up');
            count++;
            position += 30;
            position = position * gravity;
            dino.style.bottom = position + 'px'; 
        },20);
    }

    function generateObstacle(){
        let randomTime = Math.random() * 3000;
        let obs = 1000;
        const obstacle = document.createElement('div');
        if (!isGameOver) {obstacle.classList.add('obstacle');}
        grid.appendChild(obstacle);
        obstacle.style.left = obs + 'px';

        let timerId = setInterval(function(){

            if(obs > 0 && obs < 60 && position < 60){
                clearInterval(timerId);
                // alert.innerHTML = 'Game Over :(';
                isGameOver = true;
                body.removeChild(body.firstChild);
                while (grid.firstChild) {
                    grid.removeChild(grid.lastChild);
                }
                window.location.href = "gameOver.html";
            }

            obs -= 10;
            obstacle.style.left = obs + 'px';

        },20);

        if(!isGameOver){
            setTimeout(generateObstacle,randomTime);
        }
    }

    generateObstacle();
    
})