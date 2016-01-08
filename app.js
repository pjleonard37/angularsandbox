(function(){
  var app = angular.module('gemStore',[]);

  app.controller('StoreController', function(){ //name should be in capital
    this.product = gem; // outside hs needs to be set as property
  })

  var gem = {
    name: 'Dod',
    price: 2.95,
    description: 'f f f description',
    canPurchase: false, // boolean for display
    
  }
})(); // closure for havut
