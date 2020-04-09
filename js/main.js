// Variables
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

//funcion para desplazar barra de navegacion
function menus(){
    let desplazamiento_actual = window.pageYOffset;

    if(desplazamiento_actual <= 400){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '0.5s';
        menu.style.top = '80px';
        abrir.style.color = '#fff';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '0.5s';
        menu.style.top = '100px';
        abrir.style.color = '#000';
    }
}

function apertura(){
    if(cerrado){
        menu.style.width = '70vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

//llama a la funcion para desplazar barra de navegacion
window.addEventListener('scroll', function(){
    menus();
})

//para mantener el nav con el scroll cuando cargue
window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});

window.addEventListener('click', function(e){
    //console.log(e.target);    <--------para ver donde se hace click
    if(cerrado == false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }

});


window.addEventListener('resize', function(){
    if(this.screen.width >= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

abrir.addEventListener('click', function(){
    apertura();
});

