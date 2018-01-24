/* global shoppingList, store, Item, api */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));


// api.getItems(function(data) {
//   console.log(data);
// });


api.createItem('pears', (newItem) => {
  api.getItems((items) => {
    console.log(items);
  });
});