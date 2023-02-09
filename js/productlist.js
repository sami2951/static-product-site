fetch("https://kea-alt-del.dk/t7/api/products?limit=20")
    .then(res=>res.json())
    .then(showProducts)

function showProducts(products){
    products.forEach(showProduct)

}

function showProduct(product){
console.log(product);
const template = document.querySelector("#smallProductTemplate").content;
const copy = template.cloneNode(true)
copy.querySelector("h3").textContent = product.productdisplayname;
copy.querySelector(".price").textContent = product.price;
copy.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`

if(product.soldout){
    copy.querySelector("article").classList.add("soldOut");
}

copy.querySelector(".read-more").setAttribute("href",`product.html?id=${product.id}`);
document.querySelector("main").appendChild(copy);



}


/*          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
            alt="Sahara Team India Fanwear Round Neck Jersey"
          />
          <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
          <p class="subtle">Tshirts | Nike</p>
          <p class="price"><span>Prev.</span> DKK 1595,-</p>
          <div class="discounted">
            <p>Now DKK 1560,-</p>
            <p>-34%</p>
          </div>
          */