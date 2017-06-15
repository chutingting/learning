/**
 * Created by wupeng5 on 2016/5/9.
 */

angular.module('app').service("s2",function($http){
    var t = function(){
        this.name = 2;
    }

    return new t();
})