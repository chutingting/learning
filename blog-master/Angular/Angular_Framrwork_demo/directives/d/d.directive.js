/**
 * Created by wupeng5 on 2016/3/5.
 */


angular.module('app').directive("directiveTest",function(){
    return {
        templateUrl: "/blog-master/Angular/Angular_Framrwork_demo/directives/d/d.html",
        restrict:"EA",
        scope:{
            "callbackFn":"=",
            "url":"@"
        },
        link:function(){},
        controller:function($scope,$http,$rootScope){

        }
    }
})