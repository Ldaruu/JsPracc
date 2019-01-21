const xyz = [0,0,150];
const  navTag = document.getElementsByTagName('nav')[0];

navTag.addEventListener('click', function(event){
if(event.target.hasAttribute('data-direction')){
    const direction = event.target.attributes["data-direction"].value;
    const img = document.getElementsByClassName('img-inspector')[0];
    if(direction =='up'){
        xyz[1] -= 10;
    }
    if(direction == 'down'){
        xyz[1] += 10;
    }
    if(direction == 'left'){
        xyz[0] -= 10;
    }
    if(direction == 'right'){
        xyz[0] += 10;
    }
    if(direction == 'in'){
        xyz[2] += 20;
    }
    if(direction == 'out'){
        xyz[2] -= 20;
    }
    img.style.backgroundPosition =  xyz[0] + 'px,' + xyz[1] + 'px';
    img.style.backgroundSize = xyz[2] + '%';

};
});
