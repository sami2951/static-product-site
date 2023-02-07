fetch("https://kea-alt-del.dk/t7/api/products/1528")
.then((response) => response.json())
.then((data) => showProduct(data));

function showProduct(product){
console.log(product);
document.querySelectorAll(".productName").forEach(setName)
function setName(oneElementAtATime){
    oneElementAtATime.textContent = product.productdisplayname;
}


document.querySelector(".productPrice").textContent = "DKK "+product.price;
document.querySelector(".productColor").textContent = product.colour1;
document.querySelector(".productNumber").textContent = product.id;
document.querySelector(".productImg").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`
document.querySelector(".brandName").textContent = product.brandname;
document.querySelector(".productDescription").innerHTML = product.description;
}

/*	
id	1525
gender	"Unisex"
category	"Accessories"
subcategory	"Bags"
articletype	"Backpacks"
basecolour	"Navy Blue"
season	"Fall"
productionyear	2010
usagetype	"Casual"
productdisplayname	"Deck Navy Blue Backpack"
parsed	1
soldout	0
relid	1525
price	1299
discount	55
variantname	"Deck Backpack"
brandname	"Puma"
brandbio	"PUMA is the World's Fastest Sports Brand"
brandimage	"http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg"
agegroup	"Adults-Unisex"
colour1	"NA"
colour2	"NA"
fashiontype	"Fashion"
materialcaredesc	null
sizefitdesc	null
description	"<p>asfafaf<br> kasjhdkashd</p>"
styledesc	null

*/