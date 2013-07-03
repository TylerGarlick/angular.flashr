'use strict';
angular.module('flashr', [])
    .factory('flashr', ['$rootScope',
        function ($rootScope) {
            var flashes = [];

            // when the route changes, flash the "later" messages
            $rootScope.$on('$routeChangeSuccess', function () {
                for (var i = 0; i < flashes; i++) {
                    var flash = flashes[i];
                    toast(flash.type, flash.message);
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
                toast('success', message);
            }

            function nowInfo(message) {
                toast('info', message);
            }
            function nowWarning(message) {
                toast('warning', message);
            }
            function nowError(message) {
                toast('error', message);
            }

            function laterSuccess(message) {
                flashes.push({ type: 'success', message: message });
            }

            function laterInfo(message) {
                flashes.push({ type: 'info', message: message });
            }

            function laterWarning(message) {
                flashes.push({ type: 'warning', message: message });
            }

            function laterError(message) {
                flashes.push({ type: 'error', message: message });
            }

            function toast(type, message) {
                toastr[type] = message;
            }
        }]);