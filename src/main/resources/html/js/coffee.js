var coffeeApp = angular.module('coffeeApp', []);

coffeeApp.controller('DrinksController', function ($scope) {
    $scope.types = [
        {name: 'Americano', family: 'Coffee'},
        {name: 'Latte', family: 'Coffee'},
        {name: 'Tea', family: 'That Other Drink'},
        {name: 'Cappuccino', family: 'Coffee'}
    ]
})