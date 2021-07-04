let products =[];
let total = 0;

function add(product, price){
    console.log(product,price);
    products.push(product);
    total=total+price;
    document.getElementById("checkout").innerHTML = `TOTAL ${total} Bs.`
}

function pay(){

    window.alert(products.join(", \n"));
}