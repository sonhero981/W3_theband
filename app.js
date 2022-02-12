let header = document.getElementById("header");
let menuIcon = document.querySelector(".menu-icon");
let headerHeight = header.clientHeight;


//Đóng mở mobile menu
menuIcon.onclick = function(){
   let isClosed = header.clientHeight === headerHeight;
   if(isClosed){
   header.style.height = 'auto';
   }else{
   header.style.height = null;
   }
}

//Tự động đóng khi chọn menu
let menuItems = document.querySelectorAll(`#nav li a[href*="#"]`)
console.log(menuItems)
for (let i = 0; i<menuItems.length; i++) {
  let menuItem = menuItems[i];
  menuItem.onclick = function(event){
     let isParenrMenu = this.nextElementSibling&& this.nextElementSibling.classList.contains("subnav")
     if(isParenrMenu){
        event.preventDefault()
   } else {
       header.style.height = null;
    }
 }
}

//Buy ticket
let modal = document.querySelector(".modal");
let buyBtns = document.querySelectorAll(".js-buy-ticket");
let modalClose = document.querySelector(".js-modal-close");
let modalContainer = document.querySelector(".modal-container")

//Hien thi modal mua ve
for(let buyBtn of buyBtns){
   buyBtn.onclick = function(){
   modal.classList.add("open")
   }
}

//An modal mua ve
modalClose.onclick = function(){
   modal.classList.remove("open")
}

modal.onclick = function(){
   modal.classList.remove("open")
}

modalContainer.onclick = function(event){
   event.stopPropagation()
}