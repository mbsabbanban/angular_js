(function(){
    var app = angular.module('store', [ ]);
	
	app.controller('StoreController', function(){
	    this.products = gems;
	});
	
	var gems = [
	
	{
	  name: "Ramen",
	  price: 2.95,
	  description: '. . .',
	  canPurchase: true,
	  soldOut: false,
	  images: [
		{
	  //full: "img/ramen.jpg"
	  full: "Happy Ramen Image"
		}
	  ]
	},
	
	{
	  name: "Sunflowers",
	  price: 3.95,
	  description: '. . .',
	  canPurchase: true,
	  soldOut: false,
	  images: [
		{
	  //full: "img/sunflower.jpg"
	  full: "Happy Sunflower Image"
		}
	  ]
	  
	}
	
	];
	
})();