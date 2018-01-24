'use strict';


const api = function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sarah-evan';

  const getItems = (callback) => {
    
    $.getJSON(`${BASE_URL}/items`,callback);
  };  

  const createItem = (name,callback) => {
    let newItem = JSON.stringify({
      name:name,
    });

    $.ajax({url:`${BASE_URL}/items`,method:'POST', contentType:'application/json',data:newItem, success: callback});
  };

  return {
    getItems,
    createItem
  };

}();