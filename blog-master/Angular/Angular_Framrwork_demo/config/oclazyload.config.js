/**
 * Created by mac on 16/8/28.
 */

"use strict"
app.constant("Modules_Config",[
        {
            name:"app_css",
            module:true,
            files:[
                "/blog-master/Angular/Angular_Framrwork_demo/app.css"
            ]
        },
        {
            name:"f_model",
            module:true,
            files:[
                "/blog-master/Angular/Angular_Framrwork_demo/module/f/f.controller.js"
            ]
        },
        {
            name:"m_model",
            module:true,
            files:[
                "/blog-master/Angular/Angular_Framrwork_demo/services/s1.js",
                "/blog-master/Angular/Angular_Framrwork_demo/services/s2.js",
                "/blog-master/Angular/Angular_Framrwork_demo/directives/d/d.directive.js",
                "/blog-master/Angular/Angular_Framrwork_demo/module/m/m.controller.js"
            ]
        },
        {
            name:"e_model",
            module:true,
            files:[
                "/blog-master/Angular/Angular_Framrwork_demo/services/s1.js",
                "/blog-master/Angular/Angular_Framrwork_demo/services/s2.js",
                "/blog-master/Angular/Angular_Framrwork_demo/directives/d/d.directive.js",
                "/blog-master/Angular/Angular_Framrwork_demo/module/e/e.controller.js"
            ]
        }

    ])
    .config(["$ocLazyLoadProvider","Modules_Config",function($ocLazyLoadProvider,Modules_Config){
        $ocLazyLoadProvider.config({
            debug:false,
            events:false,
            modules:Modules_Config
        });
    }]);