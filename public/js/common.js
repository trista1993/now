define(['jquery','template','nprogress','cookie'],function($,template,nprogress){
	//控制左侧菜单的展开和折叠
	$('.navs ul').prev('a').on('click',function(){
		$(this).next().slideToggle();
	});
	//实现退出功能
	 $('#logout').click(function(){
        $.ajax({
            type:'post',
            url:'/api/logout',
            dataType:'json',
            success:function(data){
               //退出
               location.href='/login';
            }
        });
    });
	 //获取请求路径
	 var pathname=location.pathname;	//返回值为url的路径
	 if(pathname != '/login'&& !$.cookie('PHPSESSID')){
	 	location.href='/login';
	 }
	 //获取登录用户的cookie信息
	 var loginInfo=$.cookie('loginInfo')&&JSON.parse($.cookie('loginInfo'));
	 if(loginInfo){
	 	//渲染页面
	 	var loginTpl='<div class="avatar img-circle"><img src="{{tc_avatar}}" ></div><h4>{{tc_name}}</h4>';
	 	var html=template.render(loginTpl,loginInfo);
	 	$('#loginInfoTpl').html(html);
	 }
	 //加载遮罩效果
	 $(document).ajaxStart(function(){
	 	//显示遮罩效果
	 	$('.overlay').show();
	 });
	 $(document).ajaxStop(function(){
	 	$('.overlay').hide();
	 });
	 //进度条控制
	 nprogress.start();
	 nprogress.done();
});