requirejs.config({
    baseUrl : '/public/assets',//设置模块加载的基准路径
    paths : {// 给模块路径起一个别名
        //引入的所有的插件
        jquery : 'jquery/jquery.min',
        bootstrap : 'bootstrap/js/bootstrap.min',
        cookie : 'jquery-cookie/jquery.cookie', // 轻量级的cookie插件
        template:'artTemplate/template-web',    //模板引擎
        nprogress:'nprogress/nprogress',    //进度条
        validate:'validate/jquery-validate',//验证框架
        form:'jquery-form/jquery.form', //表单异步提价
        datepicker:'bootstrap-datepicker/js/bootstrap-datepicker',  //日期插件
        language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min', //中文插件
        //使用的js文件
        common : '../js/common',    //公共的
        index:'../js/index',
        login : '../js/login',
        util:'../js/util',
        teaList:'../js/teacher-list',
        teaAdd:'../js/teacher-add',
        settings:'../js/settings'   //个人中心
    },
    shim : {// 兼容非标准模块
        bootstrap : {
            deps : ['jquery']
        },
        validate:{
            deps:['jquery']
        },
        language:{
            deps:['jquery','datepicker']
        }
    }
});