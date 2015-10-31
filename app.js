(function(){
    var app = angular.module('store', [ ]);
	
	app.controller('StoreController', function(){
	    this.products = gems;
	});
	
	//Adding a new Controller for the PANEL in the page
	app.controller('PanelController', function(){
	
		this.tab = 1;
		
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab){
			return this.tab === checkTab; 
		};
		
	});
	
	var gems = [
	
	{
	  name: "Ramen",
	  price: 2.95,
	  description: 'This is the Ramen',
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
	  description: 'This is the Sunflower',
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