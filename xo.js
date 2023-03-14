let title = document.querySelector('.title')

let squares = [];
function weinner(){
    for(let i = 1 ; i < 10; i++){
        squares[i]= document.getElementById('item' +i).innerHTML;
    }
    if(squares[1] == squares[2]&& squares[2] == squares[3] && squares[1] !=''){
        title.innerHTML =`${squares[1]} Wine `
        document.getElementById('item'+1).style.background='#000';
        document.getElementById('item'+2).style.background='#000';
        document.getElementById('item'+3).style.background='#000';
        setInterval(function(){title.innerHTML+='.'},1000)
        setTimeout(function(){location.reload()},3000);
    }else if(squares[4] == squares[5]&& squares[5] == squares[6] && squares[4] !=''){
        title.innerHTML =`${squares[4]} Wine `
        document.getElementById('item'+4).style.background='#000';
        document.getElementById('item'+5).style.background='#000';
        document.getElementById('item'+6).style.background='#000';
        setInterval(function(){title.innerHTML+='.'},1000)
        setTimeout(function(){location.reload()},3000);
    }else if(squares[7] == squares[8]&& squares[8] == squares[9] && squares[7] !=''){
        title.innerHTML =`${squares[7]} Wine `
        document.getElementById('item'+7).style.background='#000';
        document.getElementById('item'+8).style.background='#000';
        document.getElementById('item'+9).style.background='#000';
        setInterval(function(){title.innerHTML+='.'},1000)
        setTimeout(function(){location.reload()},3000);
    }else if(squares[1] == squares[5]&& squares[5] == squares[9] && squares[1] !=''){
        title.innerHTML =`${squares[1]} Wine `
        document.getElementById('item'+1).style.background='#000';
        document.getElementById('item'+5).style.background='#000';
        document.getElementById('item'+9).style.background='#000';
        setInterval(function(){title.innerHTML+='.'},1000)
        setTimeout(function(){location.reload()},3000);
    }else if(squares[3] == squares[5]&& squares[5] == squares[7] && squares[3] !=''){
        title.innerHTML =`${squares[3]} Wine `
        document.getElementById('item'+3).style.background='#000';
        document.getElementById('item'+5).style.background='#000';
        document.getElementById('item'+7).style.background='#000';
        setInterval(function(){title.innerHTML+='.'},1000)
        setTimeout(function(){location.reload()},3000);
    }else if(squares[1] == squares[4]&& squares[4] == squares[7] && squares[1] !=''){
        title.innerHTML =`${squares[1]} Wine `
        document.getElementById('item'+1).style.background='#000';
        document.getElementById('item'+4).style.background='#000';
        document.getElementById('item'+7).style.background='#000';
        setInterval(function(){title.innerHTML+='.'},1000)
        setTimeout(function(){location.reload()},3000);
    }else if(squares[3] == squares[6]&& squares[6] == squares[9] && squares[3] !=''){
        title.innerHTML =`${squares[3]} Wine `
        document.getElementById('item'+3).style.background='#000';
        document.getElementById('item'+6).style.background='#000';
        document.getElementById('item'+9).style.background='#000';
        setInterval(function(){title.innerHTML+='.'},1000)
        setTimeout(function(){location.reload()},3000);
    }else if(squares[2] == squares[5]&& squares[5] == squares[8] && squares[2] !=''){
        title.innerHTML =`${squares[2]} Wine `
        document.getElementById('item'+2).style.background='#000';
        document.getElementById('item'+5).style.background='#000';
        document.getElementById('item'+8).style.background='#000';
        setInterval(function(){title.innerHTML+='.'},1000)
        setTimeout(function(){location.reload()},3000);
    }
}


let turn = 'x';
function game(id){
    let e = document.getElementById(id);
    if(turn === 'x' && e.innerHTML == ''){
        e.innerHTML = 'x';
        turn = 'o';
        title.innerHTML= 'o';
        console.log(id)
    }else if(turn ==='o' && e.innerHTML==''){
        e.innerHTML = 'o';
        turn = 'x';
        title.innerHTML='x'
    }
    weinner()
}