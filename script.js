
fetch('https://makeup-api.herokuapp.com/api/v1/products.json').then((data) => 
{
    return data.json();
}).then((completedata) => {

    let data1="";
    completedata.map((value)=>
    {
    data1 +=`<div id="card" class="col-lg-3 col-sm-6 col-xs-12">
        <h1 class="title">${value.name}</h1>
        <img src="${value.image_link}"
        alt="img" class="images">
        <p class="category">${value.brand}</p>
        <p class="price">${value.price}${value.price_sign}</p>
    </div>`
    });
document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err)
})