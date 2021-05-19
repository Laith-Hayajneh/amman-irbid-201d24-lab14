/* global Cart */
'use strict';
let qArray = [];
let iArray = [];
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cartItems);

}
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
  console.log(cart)

}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() { }

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let table = document.getElementById('cart');


  // TODO: Iterate over the items in the cart

  // TODO: Create a TR
  let trEl = document.createElement('tr');
  table.appendChild(trEl);

  // TODO: Create a TD for the delete link, quantity,  and the item
  let td1El = document.createElement('td');
  trEl.appendChild(td1El);

  let td2El = document.createElement('td');
  trEl.appendChild(td2El);
  // td1El.textContent=
  let tdArray = localStorage.getItem('cart');
  let tdd = JSON.parse(tdArray);

  console.log(tdd);

  for (let i = 0; i < tdd.length; i++) {
    let tr1 = document.createElement('tr');
    table.appendChild(tr1);
    
      let td = document.createElement('td');
      tr1.appendChild(td);
      td.textContent = tdd[i].quantity;    
    if (tdd !== undefined) {

      td2El.textContent = tdd[i].quantity;

    }




  }

  console.log(td2El);
  let td3El = document.createElement('td');
  trEl.appendChild(td3El);




  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}
// showCart();

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
console.log(cart)
