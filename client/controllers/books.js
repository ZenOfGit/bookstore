bookApp = angular.module('bookApp')

bookApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    console.log('BooksController loaded...');

    $scope.getBooks = () => {
        $http.get('/api/books').then((response) => {
            $scope.books = response.data;
        });
    }

    $scope.getBook = () => {
        let id = $routeParams.id;
        $http.get('/api/books/'+id).then((response) => {
            $scope.book = response.data;
        });
    }

    $scope.addBook = () => {
        $http.post('/api/books/', $scope.book).then((response) => {
            window.location.href='#!/books';
        });
    }

    $scope.updateBook = () => {
        let id = $routeParams.id;
        $http.put('/api/books/'+id, $scope.book).then((response) => {
            window.location.href='#!/books';
        });
    }

    $scope.removeBook = () => {
        let id = $routeParams.id;
        $http.delete('/api/books/'+id).then((response) => {
            window.location.href='#!/books';
        });
    }
}]);