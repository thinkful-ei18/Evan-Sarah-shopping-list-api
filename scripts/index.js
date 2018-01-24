/* global shoppingList, store, Item, api */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});


api.getItems((items) => {
  items.forEach((item) => store.addItem(item));
  shoppingList.render();
});



// api.getItems((items) => {
//   const item = items[0];
//   console.log(items);
//   api.updateItem(item.id, { name: 'foobar'}, () => {
//     console.log('updated!');
//   });
// });


// const item = store.items[0];
// console.log('current name: ' + item.name);
// store.findAndUpdate(item.id, { name: 'foobar' });
// console.log('new name: ' + item.name);