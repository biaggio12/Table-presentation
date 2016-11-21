myApp
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/main');

        $stateProvider

            .state('main', {
                url: '/main',
                templateUrl: 'main.html'
            })

            .state('list', {
                url: '/list',
                templateUrl: 'list.html',
                controller: 'UserListCtrl'
            });

    })
    .controller('UserListCtrl',function($scope,$http, MyService){
    $scope.content = [];
    MyService.getdata().success(function (data){
        $scope.content = data;
        console.log($scope.content)
    });

    $scope.limit = 10;
    $scope.setLimit = function(num){
        $scope.limit = num;
    };
    $scope.currentPage = 0;
    $scope.numberOfPages = function()
    {
        var content = $scope.content.length;
        var itemsOnPage = $scope.limit;
        return Math.ceil(( content/itemsOnPage ));
    };
        $scope.selIdx= -1;

        $scope.selUser=function(user,idx){
            $scope.selectedUser=user;
            $scope.selIdx=idx;
        };

        $scope.isSelUser=function(user){
            return $scope.selectedUser===user;
        };
});