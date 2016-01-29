<?
if(!$_POST){//检查是否获取到post
$data="请输入账号密码进行查询。";
}
$zjh=$_POST['zjh'];//账号
$mm=$_POST['mm'];//密码
$url='http://urp.cupl.edu.cn/loginAction.do'; //登陆地址 
$post="zjh=$zjh&mm=$mm";               //传输参数
$cookie_file=tempnam('./tmp','cookie');//保存cookie
$ch = curl_init($url) ;                //通过curl来登陆
curl_setopt($ch,CURLOPT_HEADER,0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1) ;
curl_setopt($ch, CURLOPT_POST,1) ; 
curl_setopt($ch,CURLOPT_COOKIEJAR,$cookie_file);
curl_setopt($ch, CURLOPT_POSTFIELDS,$post); 
curl_exec($ch);                         //登陆
curl_close($ch);

$url='http://urp.cupl.edu.cn/gradeLnAllAction.do?type=ln&oper=sxinfo&lnsxdm=001#qb_001';//这是查成绩的页面
$ch = curl_init() ;  
curl_setopt($ch, CURLOPT_URL,$url) ; 
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch,CURLOPT_COOKIEFILE,$cookie_file);
$data=curl_exec($ch);
$nodata="/moved/";
$datacut="";
if (preg_match($nodata, $data)) {  
    $data="密码输入错误，或服务器繁忙，请稍后再试！";
}/*else{
	preg_match_all("/<body[^>]*?>(.*\s*?)<\/body>/is",$data,$datacut);
	}*/
$data=iconv("gb2312","utf-8//IGNORE",$data);
echo $data;//输出内容。
curl_close($ch); 

?>

<script src="http://cdn.hcharts.cn/jquery/jquery-1.8.3.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="js/getResultsCards.js"></script> 