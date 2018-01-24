'use strict';
/*Global store*/

const api = function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sarah-evan';

  
  const getItems = (callback) => {
    
    $.getJSON(`${BASE_URL}/items`,callback);
  };  

  const createItem = (name,callback) => {
    let newItem = JSON.stringify({
      name:name,
    });

    $.ajax({
      url:`${BASE_URL}/items`,
      method:'POST', 
      contentType:'application/json',
      data:newItem, 
      success: callback});
  };


  const updateItem = (id, updateData, callback)=> {

    $.ajax({
      url:`${BASE_URL}/items/${id}`,
      method:'PATCH',
      contentType:'application/json',
      data:JSON.stringify(updateData),
      success:callback
    });
  };


  const deleteItem = (id, callback)=> {

    $.ajax({
      url:`${BASE_URL}/items/${id}`,
      method:'DELETE',
      // contentType:'application/json',
      success:callback
    });
  };


  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };

}();



/* Delete Item Psuedocode

1. Delete Item on the server
2. Delete item in the store
3. Re-render the store

*/