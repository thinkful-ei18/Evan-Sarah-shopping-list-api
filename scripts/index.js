/* global shoppingList, store, Item, api */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

api.getItems((items) => {
  items.forEach((item) => store.addItem(item));
  shoppingList.render();
});