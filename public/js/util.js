define(['jquery'],function($){
	return {
		setMenu:function(pathname){
			$('.aside .navs a').removeClass('active');
			$('.aside .navs a[href="'+pathname+'"]').addClass('active');
		},
		qs : function(attr,param) {
			//？abc=123&flag=456
			var p=param.substring(1);//截取？以后的字符串
			var arr=p.split('&');	//将字符串以&分割,返回值是数组
			var retValue='';
			arr.forEach(function(element,index) {
				var kv=element.split('=');
				if(attr==kv[0]){
					retValue=kv[1];
					return;
				}
			});
			return retValue;
		}
		
	}
});