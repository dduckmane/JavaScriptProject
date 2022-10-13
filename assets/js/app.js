(function (){
    let intro = document.getElementById('intro');
    let game1 = document.querySelector('#intro .intro-second .game1');
    let game2 = document.querySelector('#intro .intro-second .game2');
    let game3 = document.querySelector('#intro .intro-second .game3');
    let game4 = document.querySelector('#intro .intro-second .game4');
    intro.addEventListener("click",ev => {
        if(ev.target.matches('#intro .overlay.first a')){
            ev.preventDefault();
            game1.style.opacity=1;
            game2.style.opacity=0;
            game3.style.opacity=0;
            game4.style.opacity=0;

            game1.style.zIndex=100;
            game2.style.zIndex=-100;
            game3.style.zIndex=-100;
            game4.style.zIndex=-100;
        }
        if(ev.target.matches('#intro .overlay.second a')){
            ev.preventDefault();
            game1.style.opacity=0;
            game2.style.opacity=1;
            game3.style.opacity=0;
            game4.style.opacity=0;

            game1.style.zIndex=-100;
            game2.style.zIndex=100;
            game3.style.zIndex=-100;
            game4.style.zIndex=-100;

        }
        if(ev.target.matches('#intro .overlay.third a')){
            ev.preventDefault();
            game1.style.opacity=0;
            game2.style.opacity=0;
            game3.style.opacity=1;
            game4.style.opacity=0;

            game1.style.zIndex=-100;
            game2.style.zIndex=-100;
            game3.style.zIndex=100;
            game4.style.zIndex=-100;
        }
        if(ev.target.matches('#intro .overlay.fourth a')){
            ev.preventDefault();
            game1.style.opacity=0;
            game2.style.opacity=0;
            game3.style.opacity=0;
            game4.style.opacity=1;

            game1.style.zIndex=-100;
            game2.style.zIndex=-100;
            game3.style.zIndex=-100;
            game4.style.zIndex=100;
        }
    })
})();