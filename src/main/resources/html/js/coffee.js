var coffeeApp = angular.module('coffeeApp', []);

coffeeApp.controller('DrinksController', function ($scope) {
    $scope.types = [
        {name: 'Americano', family: 'Coffee'},
        {name: 'Latte', family: 'Coffee'},
        {name: 'Cappuccino', family: 'Coffee'}
    ]
})