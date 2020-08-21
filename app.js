document.addEventListener('DOMContentLoaded' , () => {

    const dino = document.querySelector('.dino');
    let midJump = false;
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
        let position =0;
        let timer = setInterval(function(){

            //Gravity
            if(position === 150){
                clearInterval(timer)
                console.log('down');
                let downTimerId = setInterval(function(){
                    if(position === 0){
                        clearInterval(downTimerId);
                    }
                    position -= 30;
                    dino.style.bottom = position + 'px';
                },20)
            }

            //Jumping up
            console.log('up');
            position += 30;
            dino.style.bottom = position + 'px'; 
        },20)
    }
})