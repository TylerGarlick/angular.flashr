Flashr
==============
Flashr is a library that simulates flashing in rails in AngularJS.  Essentially, it allows you to post notifications via the simple api.  

Flashr is built on the Toastr library.  Check out their website to see the options.  https://github.com/CodeSeven/toastr

Optional Toastr Configuration
--------------
```js
// Optional Toastr Options
toastr.options = {
	"debug": false,
	"positionClass": "toast-top-right",
	"onclick": null,
	"fadeIn": 300,
	"fadeOut": 1000,
	"timeOut": 5000,
	"extendedTimeOut": 1000
}
```

Toastr Demo Page
http://codeseven.github.io/toastr/demo.html

Flashr Usage
--------------
```js
// Register the flashr module with angular
angular.module('App', ['flashr'])
	.config(...);

// Usage in a controller
angular.module('App')
	.controller('SomeCtrl', ['$scope', 'flashr', 
		function($scope, flashr){
			
			// Flashes immediately
			flashr.now.success('this is a success message');
			
			// Flashes after the route changes
			flashr.later.success('this is a message that will flash after the route changes');
		}
	);
```

NuGet Installation
--------------
```c#
Install-Package angular-flashr
```

Bower Installation
--------------
```js
bower install angular.flashr
```
