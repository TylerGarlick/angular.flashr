'use strict';
angular.module('flashr', [])
    .factory('flashr', ['$rootScope',
        function ($rootScope) {
            var flashes = [], 
				toastType = {
					error: 		'error',
					info: 		'info',
					success: 	'success',
					warning: 	'warning'
			    };

            // when the route changes, flash the "later" messages
            $rootScope.$on('$routeChangeSuccess', function () {
                for (var i = 0; i < flashes; i++) {
                    var flash = flashes[i];
                    toast(flash.type, flash.msg);
                }
                flashes = [];
            });

            return {
                now: {
                    success: nowSuccess,
                    info: nowInfo,
                    warning: nowWarning,
                    error: nowError
                },
                later: {
                    success: laterSuccess,
                    info: laterInfo,
                    warning: laterWarning,
                    error: laterError
                }
            };

            function nowSuccess(message) {
                toast(toastType.success, message);
            }

            function nowInfo(message) {
                toast(toastType.info, message);
            }
            function nowWarning(message) {
                toast(toastType.warning, message);
            }
            function nowError(message) {
                toast(toastType.error, message);
            }

            function laterSuccess(message) {
                flashes.push({ type: toastType.success, msg: message });
            }

            function laterInfo(message) {
                flashes.push({ type: toastType.info, msg: message });
            }

            function laterWarning(message) {
                flashes.push({ type: toastType.warning, msg: message });
            }

            function laterError(message) {
                flashes.push({ type: toastType.error, msg: message });
            }

            function toast(type, message) {
                toastr[type](message);
            }
        }]);