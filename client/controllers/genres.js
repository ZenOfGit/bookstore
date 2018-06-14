bookApp = angular.module('bookApp')

bookApp.controller('GenresController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    console.log('GenresController loaded...');

    $scope.getGenres = () => {
        $http.get('/api/genres').then((response) => {
            $scope.genres = response.data;
        });
    }

    $scope.getGenre = () => {
        let id = $routeParams.id;
        $http.get('/api/genres/'+id).then((response) => {
            $scope.genre = response.data;
        });
    }

    $scope.addGenre = () => {
        $http.post('/api/genres/', $scope.genre).then((response) => {
            window.location.href='#!/genres';
        });
    }

    $scope.updateGenre = () => {
        let id = $routeParams.id;
        $http.put('/api/genres/'+id, $scope.genre).then((response) => {
            window.location.href='#!/genres';
        });
    }

    $scope.removeGenre = () => {
        let id = $routeParams.id;
        $http.delete('/api/genres/'+id).then((response) => {
            window.location.href='#!/genres';
        });
    }
}]);