app.controller('ProjectsCtrl', ['$scope', '$resource', function($scope, $resource) {
    var Projects = $resource('/api/projects');
    $scope.projects = Projects.query();
}]);