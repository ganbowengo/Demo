/**
 * Created by Administrator on 2017/9/26 0026.
 */
var app = angular.module("myNba",['ngRoute']);
app.config(["$routeProvider",function($routeProvider){
    $routeProvider
        .when('/nba/list',{
            templateUrl:'tmpl/list.html'
            ,controller:"listController"
        }).when('/nba/add',{
            templateUrl:'tmpl/add.html'
            ,controller:"addController"
        }).when('/nba/view/:id',{
            templateUrl:'tmpl/view.html'
            ,controller:"viewController"
        }).when('/nba/edit/:id',{
            templateUrl:'tmpl/edit.html'
            ,controller:"editController"
        }).otherwise({redirectTo:'/nba/list'})
}]);
