// var name= prompt('enter your name');
// var ibs=prompt('inter the weight on ibs');
// var kg = ibs*0.450;
// alert('your weght is'+kg+' kg');
// console.log(' your weight is '+kg+' kg');



// var hot = false;
// var temp = prompt('enter the temp');

// if (temp>50) {
//     hot = true;
//     console.log(temp+hot);
// }else{
//     console.log(temp+hot)
// }


// let Cars = ['bmw','honda', 'toyota'];
// let Models = [2020, 2021, 2022, 2023];

// for(i=0; i<Cars.length; i++)
// {
//     console.log(`Cars :  ${ Cars[i].toUpperCase()}`);
//     console.log('-------------')
//     for(x=0; x<Models.length; x++)
//     {
//         console.log(`Model : ${Models[x]}`);
//     }
//     console.log('###########')
// }


// let users = ['ali', 'hasan', 1, 2 ,3];
// for (let i=0; i<users.length;i++)
// {
//     if ( users[i] !== 'ali')
//     {
//         continue;
//     }
//     console.log(users[i]);
// }


// function goOn()
// {
//     console.log('test this function');
// }
// goOn()

// function wel(name)
// {
//     console.log(`welcome mr/mis ${name}`);
// }
// wel(prompt('enter your name'))

// function ageInDay(name ,age)
// {
//     let days = age * 365;
//     console.log(`hello ${name} your age in days  ${days}`);
// }

// ageInDay(prompt('enter your name'),prompt('enter your age'))

// (function (){
//     let m = 'nasir'
//     for( let i =10;i>0;i--){
//         console.log(m+ ' ' +i);
//     }
// })()

// function add(...num){
//     let r = 0;
//     for(let i = 0; i<num.length; i++){
//         r += num[i];
//     }
//     console.log(r)
// }
// add(5,2,8,5)


// function kajar (num1,num2){
//     let re = 0;
    
//     re=num1-num2
//     console.log(re)
    
// }
// kajar(15,4)

// let car = {
//     title:'BMW',
//     price:50000,
//     color:['black','wight','red'],
//     model:2023,

//     show:function(){
//         console.log(`We have ${this.title} in or shop and it is in ${this.color} colors well cost you ${this.price} eich and all in ${this.model} models`)
//     }
// }

// car.price=25000
// console.log(car.title,car.color, car.price)
// console.log(car.show())
// car.red =function(){
//     console.log(`your ${car.title} with ${car.color[2]} `)
// }

// console.log(car.red())


// let car2 = Object.create(car);
// car.title='TOYOTA'
// console.log(car2.show())





// let a1 = {
//     name :'hasan',
//     phone: 9191191919,
//     call:function(){
//         console.log(`calling ${this.name} on ${this.phone}`);
//     }
// }

// let a2 = {
//     from:prompt('inter your name'),
//     callFrom:function(){
//         console.log(`this cal from ${this.from}`)
//     }
// }

// let a3 = Object.assign(a1,a2)


// a2.callFrom()
// a3.call(),a3.callFrom()
// const wh = document.getElementById('call');
// console.log(wh.src)
// let homeim = document.querySelector('.imo1')
// homeim.style.borderRadius = '50px'
// homeim.style.border='10px solid red'
// console.log(homeim)
// let wewe=document.getElementById('wewe')
// wewe.style.backgroundColor = '#333'
// wewe.style.color = '#fff'

// console.log(wewe)

// let btn = document.getElementById('btn');

// btn.onclick=function()
// {
//     let  name = prompt('Enter your name;')
//     btn.style.background='red'
//     btn.style.color='#fff'
//     alert(`hello ${name}`)
// }


// money
// let so = document.getElementById('so');
// let usd = document.getElementById('usd');

// so.onkeyup=function () {
//     usd.value = so.value / 40;
// }
// usd.onkeyup=function () {
//     so.value = usd.value * 40;
// }

// console.log(screen.availWidth);
// console.log(screen.availHeight  );

// let i = 0;
// let h = setInterval(function(){
//     i++
//     console.log(i)
//     if(i == 10){
//         clearInterval(h);
//     }
// },500)


