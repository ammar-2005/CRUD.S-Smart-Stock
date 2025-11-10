let title =document.getElementById('title');
let price =document.getElementById('price');
let taxes =document.getElementById('taxes');
let ads =document.getElementById('ads');
let discount =document.getElementById('discount');
let total =document.getElementById('total');
let count =document.getElementById('count');
let category =document.getElementById('category');
let btn =document.getElementById('btn');
 

let moon = 'Create';

let MR;



//  get total

function getTotal() {
    if(price.value !=''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background='rgb(7, 241, 7)';  
    } else {
        total.innerHTML='';
        total.style.background='rgba(246, 64, 31, 1)';  
    }
}

// create product
let dataproduct = [];
if(localStorage.product != null){
    dataproduct = JSON.parse(localStorage.product);
} else {
    dataproduct = [];
}
 
btn.onclick=function(){
   let newproduct={
    title:title.value.toLowerCase(),
     price:price.value,
     taxes:taxes.value,
     ads:ads.value,
     discount:discount.value,
     total:total.innerHTML,
     count:count.value,
     category:category.value.toLowerCase(),
   }
    // new count
    // and cread count
    if(moon==='Create'){
       
    if(newproduct.count>1){
        for(let i=0 ; i < newproduct.count ; i++){
              dataproduct.push(newproduct);
        }
    }else{
              dataproduct.push(newproduct);
    }
    }else{
        dataproduct[ MR ]=newproduct;
    }

// for new count
    // if(newproduct.count>1){
    //     for(let i=0 ; i < newproduct.count ; i++){
    //           dataproduct.push(newproduct);
    //     }
    // }else{
    //           dataproduct.push(newproduct);
    // }



    console.log(dataproduct);
    localStorage.setItem('product',   JSON.stringify(dataproduct));
    clearData();
    showData();
}
// clear Data 
function clearData(){
    title.value = '';
     price.value= '';
     taxes.value= '';
     ads.value= '';
     discount.value= '';
     total.innerHTML= '';
     count.value= '';
     category.value= '';
    
}
// showData 
function showData(){
    let table=('');
    for(let i=0 ; i<dataproduct.length; i++){
       table += `
         <tr>
            <td>${i}</td>
            <td>${dataproduct[i].title}</td>
            <td>${dataproduct[i].price}</td>
            <td>${dataproduct[i].taxes}</td>
            <td>${dataproduct[i].ads}</td>
            <td>${dataproduct[i].discount}</td>
            <td>${dataproduct[i].total}</td>
            <td>${dataproduct[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button> </td>
            <td> <button onclick="deleteData( ${i} )" id="delete">delete</button> </td>
          </tr>
          `
          document.getElementById('tbody').innerHTML= table ;
        //  delete data in show data 
          let btndelete= document.getElementById('deleteAll');
          if(dataproduct.length>0){
            btndelete.innerHTML=`
             <button onclick="deleteAll()" id="delete">delete All(${dataproduct.length})</button>
            
            `
          }else{
              btndelete.innerHTML=''
          }
 

    }

    
}


    showData();



// delete data

function deleteData(i){
    dataproduct.splice(i, 1); 
    localStorage.product = JSON.stringify(dataproduct);
    showData();
}



function deleteAll(){
    dataproduct = []; 
    localStorage.setItem('product', JSON.stringify(dataproduct));
    showData();
}
// UPDATE DATA
  
  function updateData(i){
    // console.log(i)
    title.value=dataproduct[i].title;
    price.value=dataproduct[i].price;
    taxes.value=dataproduct[i].taxes;
    ads.value=dataproduct[i].ads;
    discount.value=dataproduct[i].discount;
    getTotal();
    count.style.display='none';
   category.value=dataproduct[i].category;
    btn.innerHTML = " UpDate" ;
    MR = i ;

  }
//   search
 let searchProject='title';

 function getSearchProject(id){


     let search = document.getElementById('search');



    if(id=='searchtitel'){
      searchProject='title'; 
      search.placeholder='Search By Title';

    }else{
        searchProject='category';
              search.placeholder='Search By Category';

    }
    search.focus();
    search.value='';
      showData();
    // console.log(searchProject)

 }


//  search data
function searchData(value)
{
    console.log(value);
    let table='';
    if(searchProject=='title'){
        //  make loop for product data
        for(let i=0; i < dataproduct.length;i++){

            if(dataproduct[i].title.includes(value.toLowerCase())){
                // console.log(i);
                 table += `
               <tr>
                   <td>${i}</td>
                   <td>${dataproduct[i].title}</td>
                   <td>${dataproduct[i].price}</td>
                   <td>${dataproduct[i].taxes}</td>
                   <td>${dataproduct[i].ads}</td>
                   <td>${dataproduct[i].discount}</td>
                   <td>${dataproduct[i].total}</td>
                   <td>${dataproduct[i].category}</td>
                   <td><button onclick="updateData(${i})" id="update">update</button> </td>
                   <td> <button onclick="deleteData( ${i} )" id="delete">delete</button> </td>
              </tr>
                      `

                

            }
        }
        
    } else{
         for(let i=0; i < dataproduct.length;i++){

            if(dataproduct[i].category.includes(value.toLowerCase())){
                // console.log(i);
                 table += `
               <tr>
                   <td>${i}</td>
                   <td>${dataproduct[i].title}</td>
                   <td>${dataproduct[i].price}</td>
                   <td>${dataproduct[i].taxes}</td>
                   <td>${dataproduct[i].ads}</td>
                   <td>${dataproduct[i].discount}</td>
                   <td>${dataproduct[i].total}</td>
                   <td>${dataproduct[i].category}</td>
                   <td><button onclick="updateData(${i})" id="update">update</button> </td>
                   <td> <button onclick="deleteData( ${i} )" id="delete">delete</button> </td>
              </tr>
                      `

                

            }
        }
        

    }
    document.getElementById('tbody').innerHTML= table ;


}















