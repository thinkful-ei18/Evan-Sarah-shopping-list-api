/* global Item */
'use strict';
// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
  };

  const findById = function(id) {
    return store.items.find(item => item.id === id);
  };

  // const findAndToggleChecked = function(id) {
  //   const item = this.findById(id);
  //   item.checked = !item.checked;
  // };

  const findAndDelete = function(id) {
    let item = findById(id);
    store.items = store.items.filter((storeItem) => {
      return storeItem.id !== item.id;
    }); 
  };

  // const findAndUpdateName = function(id, name) {
  //   try {
  //     Item.validateName(name);
  //     const item = this.findById(id);
  //     item.name = name;
  //   } catch(e) {
  //     console.log('Cannot update name: ' + e.message);
  //   }
  // };


  const findAndUpdate = function (id,newData) {
    let item = this.items.find(item => item.id === id);
    console.log(item);
    Object.assign(item,newData);
    console.log(item);
    console.log(store.items);
  };
  
  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',

    addItem,
    findById,
    findAndUpdate,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
  };
  
}());
