let open= document.getElementById('open');
let close = document.getElementById('close');
let container = document.getElementById('menu');



close.onclick = function(){
    container.classList.add('hide');
    open.classList.remove('hide');
    close.classList.add ('hide');
}

open.onclick= function(){
    open.classList.add('hide');
    container.classList.remove('hide');
    close.classList.remove('hide'); 
}