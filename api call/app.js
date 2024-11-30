
    
// display rating function
function displayRating(rating){
    let stars;
    if(rating <=0.9){
        stars=`  <i class="fa-regular fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>`
        return stars
    }else if(rating===1){
        stars=` <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>`
        return stars
    }
    else if(rating===2){
        stars=` <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>`
        return stars
    }
    else if(rating===3){
        stars=` <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>`
        return stars
    }
    else if(rating===4){
        stars=` <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>`
        return stars
    }
    else if(rating===5){
        stars=` <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>`
        return stars
    }
    else if(rating <=1.9){
        stars=` <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>`
        return stars
    }
    else if(rating <=2.9){
        stars=` <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>`
        return stars
    }
    else if(rating <=3.9){
        stars=` <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>`
        return stars
    }
    else if(rating <=4.999){
        stars=` <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>`
        return stars
    }
}

// display rating
let a= displayRating(5);

let productInner=document.querySelector(".product-inner");

async function fetchData(){
    
    let responce =await fetch("https://dummyjson.com/products");
    let api=await responce.json(); 
    let data=api.products
    console.log(data);
    data.forEach((arr)=>{
        let fontStar=displayRating(arr.rating);
        let productIteam=`            
        <div class="product-iteam">
            <div class="product-img">
                <img src=${arr.thumbnail} alt="thumbnail">
            </div>
            <div class="product-info">
                <h3 class="product-title">${arr.title}</h3>
                <p class="product-description">${arr.description}</p>
                <div class="product-price">
                    <div class="priceing">
                        <div class="del-price">$ ${arr.price}</div>
                        <div class="price">$ ${arr.discountPercentage}</div>
                    </div>
                    <div class="heart-icon">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                </div>
                <div class="rating">
                    <div class="rating-icons">
                       ${fontStar}
                    </div>
                    <span>
                        ${arr.rating}
                    </span>
                </div>
                <div class="btn-card">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>add to card</span>
                </div>
            </div>
        </div>`;
        productInner.insertAdjacentHTML("beforeend",productIteam);
    })
}
fetchData();
