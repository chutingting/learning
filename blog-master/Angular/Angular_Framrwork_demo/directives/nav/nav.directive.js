/**
 * Created by wupeng5 on 2016/3/5.
 */


angular.module('app').directive("navi",function(){
    return {
        templateUrl: "/blog-master/Angular/Angular_Framrwork_demo/directives/nav/nav.html",
        restrict:"EA",
        scope:{
            "callbackFn":"=",
            "url":"@"
        },
        link:function(){},
        controller:function($scope,$http,$state){
            $scope.c1 = function(){
                $state.go("m");
            }
            $scope.c2 = function(){
                $state.go("e");
            }
            $scope.c3 = function(){
                $state.go("f");
            }
        }
    }
})