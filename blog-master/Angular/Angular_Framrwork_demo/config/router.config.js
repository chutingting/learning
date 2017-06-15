'use strict';

app.config(["$stateProvider","$urlRouterProvider","$locationProvider",routeFn]);

function routeFn($stateProvider,$urlRouterProvider,$locationProvider){
  $stateProvider
      .state("m",{
        url:"/m",
        params:{entity:null},
        templateUrl:"/blog-master/Angular/Angular_Framrwork_demo/module/m/m.html",
        controller:"mCtrl",
        resolve:{
          deps:["$ocLazyLoad",function($ocLazyLoad){
            return $ocLazyLoad.load("m_model");
          }]
        }
      })
      .state("e",{
        url:"/e",
        params:{entity:null},
        templateUrl:"/blog-master/Angular/Angular_Framrwork_demo/module/e/e.html",
        controller:"eCtrl",
        resolve:{
          deps:["$ocLazyLoad",function($ocLazyLoad){
            return $ocLazyLoad.load("e_model");
          }]
        }
      })
      .state("f",{
        url:"/f",
        params:{entity:null},
        templateUrl:"/blog-master/Angular/Angular_Framrwork_demo/module/f/f.html",
        controller:"fCtrl",
        resolve:{
          deps:['$ocLazyLoad','$q',function($ocLazyLoad,$q){
            var defer = $q.defer();
            defer.resolve($ocLazyLoad.load("f_model"));
            return defer.promise;
          }]
        }
      })
};
