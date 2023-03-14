let bb =document.getElementById('bb')


window.onscroll  = function(){
    if(scrollY >=1000)
    {
        bb.classList.remove('hide');
    }else{
        bb.classList.add('hide');
    }
}



bb.onclick= function(){
    scroll({
        top:0,
        behavior:'smooth',
    })
}


let ope = document.querySelector('.op');
let clo = document.querySelector('.x');
let ul = document.querySelector('#u');



ope.onclick=function(){
    u.classList.remove('hide');
    clo.classList.remove('hide');
    this.classList.add('hide');
}
clo.onclick= function(){
    u.classList.add('hide');
    ope.classList.remove('hide');
    this.classList.add('hide'); 
}