<?php 
	//路径
	$path='index';
	$filename='index';
	if(array_key_exists('PATH_INFO',$_SERVER)){
		$url=$_SERVER['PATH_INFO'];
		$str=substr($url,1);
		$pathinfo=explode('/',$str);
		if(count($pathinfo) == 2) {
			$path = $pathinfo[0];
			$filename = $pathinfo[1];

		}else{
			$filename = 'login';
		}
	}
	include('/view/'.$path.'/'.$filename.'.html');
 ?>