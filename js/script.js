
var allProducts = document.querySelectorAll(".card")
var div = document.querySelector("#content")
var priceDiv = document.getElementById('price-content'); 
var btn = document.querySelector("#btn")
var totalPrice = 0

allProducts.forEach(function (item){
    item.onclick = function (){
        div.innerHTML += item.textContent + ", "
        totalPrice +=  +(item.getAttribute("price"))

        if(div.innerHTML != ""){
            btn.style.display = "block";
        }
    }
})

btn.onclick = function () {
    priceDiv.textContent = "Total Price: $" + totalPrice;

    //display as alert
    // alert("Total Price: $" + totalPrice);
};




