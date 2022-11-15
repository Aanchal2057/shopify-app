
import "../css/custom.css";
require("noty/src/noty.scss")
require("noty/src/themes/mint.scss")


window.Noty = require('noty')
window.axios = require('axios')

 var wishlistButton=document.querySelector('.codeinspire-wishlidt-btn');

const appDomain="https://bbcb-2400-1a00-b030-976f-3798-982d-ec45-803.in.ngrok.io";
function  addWishlist(customer, id) {
    axios.post(appDomain+'/api/addToWishlist',{shop_id:Shopify.shop,customer_id:customer, product_id:id })
    .then(response=>{
        console.log("response:",response)
    })
    .catch(error=>{
       console.log("ERROR: ",error) 
    })
    new Noty({
        type: 'success',
        layout:'topRight',
        timeout:3000,
        text: 'Item added'
    }).show();    
}

function removeWishlist(customer, id) {
    axios.post(appDomain+'/api/removeWishlist',{shop_id:Shopify.shop,customer_id:customer, product_id:id })
    .then(response=>{
        console.log("response:",response)
    })
    .catch(error=>{
       console.log("ERROR: ",error) 
    })
    new Noty({
        type: 'danger',
        layout:'topRight',
        text: 'Item removed',
        timeout:3000
    }).show(); 
}

function checkWishList(customer, id) {
    axios.post(appDomain+'/api/checkWishlist',{shop_id:Shopify.shop,customer_id:customer, product_id:id })
    .then(response=>{
        if(response.data==1){
            wishListButton.classList.add('active')
        }
    })
    .catch(error=>{
       console.log("ERROR: ",error) 
    })
}
wishlistButton.addEventListener('click',function(){
    // console.log("This:",this);
    if(this.classList.contains('active')){
        removeWishlist();
        this.classList.remove('active');
    }else{
        this.classList.add('active');
        var customer=this.dataset.customer;
        var id=this.dataset.product;
        // console.log('This:',this.dataset.product);
         addWishlist(customer,id);
    }
    
})




if(wishListButton){
    var customer=wishListButton.dataset.customer;
    var id=wishListButton.dataset.product;
    checkWishList(customer,id);
}