let title = document.getElementById('title');
let price = document.getElementById('price');
let tax = document.getElementById('tax');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let cat = document.getElementById('cat');
let create = document.getElementById('create');
let dBtn = document.getElementById('d-btn')
let iner = document.getElementById('iner');

let tem;

let mood = 'create';


// get total 

function getTotal()
{
     if(price.value != ''){
        let result = (+price.value + +tax.value + +ads.value)-+discount.value
        total.innerHTML = result;
        total.style.background= 'green';
     }else{
        total.innerHTML = '';
        total.style.background= 'rgb(164, 12, 12)';
     }
}

// create product   

let datapro;
if (localStorage.product != null){
    datapro = JSON.parse(localStorage.product)
}else{
    datapro= [];
}
// save localstorage 

create.onclick = function(){
    let newpro = {
        title:title.value.toLowerCase() ,
        price:price.value,
        tax:tax.value,
        ads:ads.value, 
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        cat:cat.value.toLowerCase(),
    }

    if(title.value != '' && price.value != '' && cat.value !='' && newpro.count<101){
        if(mood === 'create'){
                if (newpro.count >1){
                    for(let i=0;i<newpro.count; i++){
                            datapro.push(newpro);
                        }
                }else{

                    datapro.push(newpro);
                }

        }else{
            
            datapro[tem] = newpro;
            mood = 'create';
            count.style.display='block';
            create.innerHTML = 'Create';
        }
        clearData()
    }
   
    
    localStorage.setItem('product', JSON.stringify(datapro));
    
    showData()
    
}


// clear inputs

function clearData(){
    title.value = '';
    price.value = '';
    tax.value='';
    ads.value='';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    cat.value = '';
}



// read 

function showData(){
    getTotal();
    let tab = '';
    for (let i = 0; i < datapro.length ;i++){
        tab += `<tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].tax}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td> 
        <td>${datapro[i].total}</td>
        <td>${datapro[i].count}</td>  
        <td>${datapro[i].cat}</td>
        <td><button onclick="updateData(${i})" id="update">Update</button></td>
        <td><button onclick="deleteData(${i})" id="delete" >Delete</button></td>

    </tr>`
    }
    document.getElementById('tbody').innerHTML = tab;
    if (datapro.length >0){
        dBtn.classList.remove('hide');
    }else{
        dBtn.classList.add('hide');
    }
    iner.innerHTML=`
    <h5> Total in the list <span>${datapro.length}</span>   </h5>`

}

showData()


//delete all 
function deleteAll(){
    localStorage.clear();
    datapro.splice(0)
    showData()
}

// count



// delete 

function deleteData(i){
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    showData()
}


// update 

function updateData(i){
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    tax.value = datapro[i].tax;
    ads.value = datapro[i].ads;
    discount.value = datapro[i].discount;
    getTotal()
    count.style.display= 'none';
    cat.value = datapro[i].cat;
    create.innerHTML='Update';
    tem = i;
    mood = 'update';
    scroll({
        top:0,
        behavior:'smooth',
    })
}



// search 
let searchmood= 'title';
function getSearchMood(id){
    let sea = document.getElementById('search');
    if(id=== 't-s-t'){
        searchmood = 'title';
        sea.placeholder = 'Search By Titel'
    }else{
        searchmood = 'category';
        sea.placeholder = 'Search By Category'
    }
sea.focus()
sea.value='';
showData()
}
function searchData(value){
    let tab = '';
    if(searchmood== 'title'){
        for(let i=0; i< datapro.length; i++){
           if(datapro[i].title.includes(value)){
            tab += `<tr>
                        <td>${i}</td>
                        <td>${datapro[i].title}</td>
                        <td>${datapro[i].price}</td>
                        <td>${datapro[i].tax}</td>
                        <td>${datapro[i].ads}</td>
                        <td>${datapro[i].discount}</td> 
                        <td>${datapro[i].total}</td>
                        <td>${datapro[i].count}</td>  
                        <td>${datapro[i].cat}</td>
                        <td><button onclick="updateData(${i})" id="update">Update</button></td>
                        <td><button onclick="deleteData(${i})" id="delete" >Delete</button></td>
                
                    </tr>`
            }
        }

    }else{

        for(let i=0; i< datapro.length; i++){
            if(datapro[i].cat.includes(value)){
             tab += `<tr>
                         <td>${i}</td>
                         <td>${datapro[i].title}</td>
                         <td>${datapro[i].price}</td>
                         <td>${datapro[i].tax}</td>
                         <td>${datapro[i].ads}</td>
                         <td>${datapro[i].discount}</td> 
                         <td>${datapro[i].total}</td>
                         <td>${datapro[i].count}</td>  
                         <td>${datapro[i].cat}</td>
                         <td><button onclick="updateData(${i})" id="update">Update</button></td>
                         <td><button onclick="deleteData(${i})" id="delete" >Delete</button></td>
                 
                     </tr>`
             }
         }
    }
    document.getElementById('tbody').innerHTML = tab;
}

// clean date 

