/* global Product, Cart */

'use strict';
let listOfItems = [];
// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.

function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let optionEl = document.createElement('option');
    selectElement.appendChild(optionEl);
    optionEl.textContent = Product.allProducts[i].name;

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault()
  // TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  console.log(cart);
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  let selectedProduct = document.getElementById('items').value;
  console.log(selectedProduct);
  let qProduct = document.getElementById('quantity').value;
  cart.addItem(selectedProduct, qProduct);

  // let value =selectedProduct.selectElement.optionEl[selectedProduct.selectedIndex].value;
  // optionEl.setAttribute('value',);
  // selectedProduct.nodeValue



  // console.log(selectedProduct.option)
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
let counter = 0;
function updateCounter() {
  counter++;
  let countitemEl = document.getElementById('itemCount');
  countitemEl.textContent = counter;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function gettingItem(){
  
  let cartStr = localStorage.getItem('cart');
  let cartObj = JSON.parse(cartStr);
  if (cartObj !== null) {
    cart.items = cartObj;


  }
}
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  // console.log(cart);
  let list = document.getElementById('cartContents');
  
  console.log(cart.items);
  let para = document.createElement('p');
  para.textContent='';

  for (let i = 0; i < cart.items.length; i++) {
    list.appendChild(para);
    para.textContent = (`This cart it has a ${cart.items[i].product}`);

  }

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
// console.log (Product.allProducts)
// localStorage.clear();
gettingItem();
