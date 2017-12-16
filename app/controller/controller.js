/**
 * Created by Administrator on 2017/9/26 0026.
 */
app.controller("listController",["$scope","$http",function($scope,$http){
    $http.get("data/players.json").success(function(data){
        $scope.players = data;
        console.log(data)
    });
    $scope.order = 'name';
    $scope.removePlayer = function(e,id){
        e.preventDefault();
        angular.forEach($scope.players,function(val,key){
            if(id == val.id){
                $scope.players.splice(key,1);
            }
        })
    }
}]);

app.controller("viewController",["$scope","$routeParams","$http",function($scope,$routeParams,$http){
    $http.get("data/players.json").success(function(data){
        var i = $routeParams.id;
        console.log(data);
        $scope.player = data[i-1];
    });
    $scope.voteText = "投票";
    $scope.addVotes = function(){
        $scope.player.votes += 1;
        $scope.voteText = "投票";
        $scope.disVote = true;
    }
}]);

app.controller("editController",["$scope","$routeParams","$http","$location",function($scope,$routeParams,$http,$location){
    $http.get("data/players.json").success(function(data){
        var i = $routeParams.id;
        $scope.player = data[i-1];
    });
    //初始化位置信息
    $scope.positions = [
        {val:"PG",txt:"控球后卫"},
        {val:"SG",txt:"得分后卫"},
        {val:"SF",txt:"小前锋"},
        {val:"PF",txt:"大前锋"},
        {val:"C",txt:"中锋"}
    ];
    //初始化球队信息
    $scope.teams = ["骑士","勇士","尼克斯","快船","火箭","篮网","公牛","雷霆"];
    //提交
    $scope.submitForm = function(){
        $location.path("/nba/list");
    }
}]);

app.controller("addController",["$scope","$location",function($scope,$location){
    //初始化位置信息
    $scope.positions = [
        {val:"PG",txt:"控球后卫"},
        {val:"SG",txt:"得分后卫"},
        {val:"SF",txt:"小前锋"},
        {val:"PF",txt:"大前锋"},
        {val:"C",txt:"中锋"}
    ];
    //初始化球队信息
    $scope.teams = ["骑士","勇士","尼克斯","快船","火箭","篮网","公牛","雷霆"];
    $scope.submitForm = function(){
        $location.path("/nba/list");
    }
}]);