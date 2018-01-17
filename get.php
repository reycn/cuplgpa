
<head>
    <meta name="theme-color" content="#e74c3c">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link href="https://cdn.icupl.cn/css/main.css" rel="stylesheet">
    <title>成绩</title>
</head>
<?php
if(!$_POST){//检查是否获取到post
$data="请输入账号密码进行查询。";
}
$zjh=$_POST['zjh'];//账号
$mm=$_POST['mm'];//密码
$cn=$_POST['cn'];

$url='http://urp.cupl.edu.cn/loginAction.do'; //登陆地址
$post="zjh=$zjh&mm=$mm";                      //传输参数
$cookie_file=tempnam('./tmp','cookie');//保存cookie
$ch = curl_init($url) ;                //通过curl来登陆
curl_setopt($ch,CURLOPT_HEADER,0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1) ;
curl_setopt($ch, CURLOPT_POST,1) ;
curl_setopt($ch,CURLOPT_COOKIEJAR,$cookie_file);
curl_setopt($ch, CURLOPT_POSTFIELDS,$post);
curl_exec($ch);                         //登陆
curl_close($ch);
if (preg_match('/0/', $cn)) { //判断是查询什么成绩
                        //传输参数
        $url='http://urp.cupl.edu.cn/gradeLnAllAction.do?type=ln&oper=fainfo';//这是查主修方案成绩的页面
    } else if(preg_match('/1/', $cn)){
        $url='http://urp.cupl.edu.cn/gradeLnAllAction.do?type=ln&oper=sxinfo&lnsxdm=001#qb_001';//这是查全部案成绩的页面
    } else if(preg_match('/2/', $cn)) {
        $url='http://urp.cupl.edu.cn/bxqcjcxAction.do';//这是查本学期成绩的页面
    } else if(preg_match('/3/', $cn)) {
        $url='http://urp.cupl.edu.cn/gradeLnAllAction.do?type=ln&oper=qbinfo';//各个学期全部及格成绩
    } else {
        $url='http://urp.cupl.edu.cn/gradeLnAllAction.do?type=ln&oper=fainfo';//默认查询主修方案成绩
}

$ch = curl_init() ;
curl_setopt($ch, CURLOPT_URL,$url) ;
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch,CURLOPT_COOKIEFILE,$cookie_file);
$data=curl_exec($ch);
$nodata="/moved/";
$datacut="";
if (preg_match($nodata, $data)) {
    $data="密码输入错误，或服务器繁忙，请稍后再试！";
}
$data=iconv("gb2312","utf-8//IGNORE",$data);
echo $data;//输出内容。
curl_close($ch);


?>

<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<!-- <script src="https://cdn.bootcss.com/highcharts/4.2.6/highcharts.js"></script> -->
<script src="https://cdn.hcharts.cn/highcharts/highcharts.js"></script>
<script src="https://cdn.hcharts.cn/highcharts/highcharts-more.js"></script>
<script src="https://cdn.hcharts.cn/highcharts-plugins/highcharts-zh_CN.js"></script>
<script src="https://cdn.icupl.cn/js/jquery-labelauty.js"></script>
<script src="https://cdn.icupl.cn/js/results_years.js"></script>
