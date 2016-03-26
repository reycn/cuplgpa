var td = document.getElementsByTagName("td");
var i;
var cName = [];
var cNameE = [];
var cNameN = [];
var cNameP = [];
var cIptc = [];
var cResult = [];
var cResultSum = 0;
var cIptcSum = 0;
var p = 0;
var q = 0;
var bodyStr = document.getElementsByTagName('body')[0].innerHTML;
$("link").remove();
document.getElementsByTagName('body')[0].innerHTML.replace("&nbsp;","");
document.getElementsByTagName('body')[0].innerHTML.replace("<p align=\"center\">","");
document.getElementsByTagName('body')[0].innerHTML.replace("</p>","");
document.getElementsByTagName('body')[0].innerHTML.replace("align=\"center\"",""); 

$(".style-1-cropbar-clipper").remove();
if (bodyStr.indexOf("瀵杈ラ璇″ㄧ蹇锛璇风璇锛") === -1 ) {

	} else {
			alert("学校拒绝了本次查询，查询的人过多或密码错误，请返回重试。");
	window.location.href='http://cupl.ml/index.html'; 
		}

for (i = 0; i <= ((td.length - 18) / 8); i++) {
    cNameN.push(td[9 + 8 * i].innerHTML);
    cName.push(td[11 + 8 * i].innerHTML);
    cNameE.push(td[12 + 8 * i].innerHTML);
	cIptc.push(td[13 + 8 * i].innerHTML);
    cNameP.push(td[14 + 8 * i].innerHTML);
	cResult.push(td[15 + 8 * i].innerHTML);
	
	if (parseFloat(td[15 + 8 * i].innerHTML) === 0) {
        q = q + 1;//无成绩科目数
		cResult.push(0);
    } else if( parseFloat(td[16 + 8 * i].innerHTML) === null ) {
		q = q + 1;
	    cResult.push(0);
	} else if (isNaN(parseFloat(td[16 + 8 * i].innerHTML)) === true) {
        if (td[16 + 8 * i].innerHTML.indexOf("优秀") > 0) {
            cResult.push(85);
        } else if (td[16 + 8 * i].innerHTML.indexOf("良好") > 0) {
            cResult.push(80);
        } else if (td[16 + 8 * i].innerHTML.indexOf("中等") > 0) {
            cResult.push(70);
        } else if ((td[16 + 8 * i].innerHTML.indexOf("及格") > 0) && (td[18 + 8 * i].innerHTML.indexOf("不") < 0)) {
            cResult.push(60);
        } else if ((td[16 + 8 * i].innerHTML.indexOf("及格") > 0) && (td[18 + 8 * i].innerHTML.indexOf("不") > 0)){
			cResult.push(59);
		} else {
			cResult.push(0);
			q = q + 1;
			p = p - 1;//有成绩科目数
		}
		cIptc.push(parseFloat(td[14 + 8 * i].innerHTML));
        p = p + 1;
    } else {
        cResult.push(parseFloat(td[16 + 8 * i].innerHTML));
		cIptc.push(parseFloat(td[14 + 8 * i].innerHTML));
        p = p + 1;
    }

}
alert(cNameN);
alert(cName);
alert(cNameE);
alert(cIptc);
alert(cNameP);
alert(cResult);


$('title').append('成绩快捷查询');
document.getElementsByTagName('head')[0].innerHTML=('<meta charset="utf-8"><link href="../css/main.css" rel="stylesheet"><meta name="viewport" content="width=device-width,initial-scale=1"/>');
$('form').remove();
$('form').remove();$('form').remove();$('form').remove();$('form').remove();
$('head').prepend("<meta name='theme-color' content='#3498db'>");
$('body').append("<div class='cards'></div>");



$('.cards').prepend("<div class = 'card'><div class = 'card-title'>统计</div><div class='card-text' id='container'>");
		var cResultG = [0,0,0,0,0,0,0];
		for (i=0;i <= cResult.length - 1; i = i + 1) {
			if ( Number(cResult[i]) === 0 ) {
				cResultG[0]++;
				} else if ( Number(cResult[i]) <60 ) {
				cResultG[1]++;
				} else if ( Number(cResult[i]) <70 ) {
				cResultG[2]++;
				} else if ( Number(cResult[i]) <80 ) {
				cResultG[3]++;
				} else if ( Number(cResult[i]) <90 ) {
				cResultG[4]++;
				} else if ( Number(cResult[i]) < 100 ) {
				cResultG[5]++;
				} else {
				cResultG[6]++;
				}
			}
$(function () {

    $(document).ready(function () {
		
				
        // Build the chart
        $('#container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: '成绩分布'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: '占比',
                colorByPoint: true,
                data: [
				
				{
                    name: '0(未出成绩)',
                    y: cResultG[0]
                }, {
                    name: '1-60',
                    y: cResultG[1]
                }, {
                    name: '60-69',
                    y: cResultG[2]
                }, {
                    name: '70-79',
                    y: cResultG[3]
                }, {
                    name: '80-89',
                    y: cResultG[4]
                }, {
                    name: '90-100',
                    y: cResultG[5]
                }

				]
		
				
            }]
        });
    });
});

$('.cards').append("</div></div>");





for (i=0;i <= cName.length - 1; i = i + 1){
	$('.cards').append("<div class='card'><div class='card-title'>" + cName[i] + " " + cNameP[i] + "<br/>" + cResult[i] + "</div>"+"<div class='card-note'>" + cNameE[i] + " " + cIptc[i] + "</div>"+"<div class='card-text'>" + "学分 " + cIptc[i] + "</div></div>");
	}



var gpapoint=0;
var gpapointr=0;
var calResult = function(x) {
		if ((x >= 95) && (x <= 100 )) {
			x = 6 + (x-95)/10;
		}else if (x >= 90) {
			x = 5 + (x-90)/10;
		}else if (x >= 85) {
			x = 4 + (x-85)/10;
		}else if (x >= 80) {
			x = 3 + (x-80)/10;
		}else if (x >= 70) {
			x = 2 + (x-70)/10;
		}else if (x >= 60) {
			x = 1 + (x-60)/10;
		}else{
			x = 0;
		}
		return x;
	};
	
var gpa=cResult;
for ( i = 0; i <= gpa.length - 1; i = i + 1 ){
	gpapoint = parseFloat(calResult(parseFloat(gpa[i]))*parseFloat(cIptc[i]));
	gpa[i] = gpapoint;
}

	for (i = 0; i<= gpa.length - 1 ; i++ ){
		cResultSum = parseFloat(cResultSum) + parseFloat(gpa[i]);
		cResultSum = parseFloat(cResultSum);
		cIptcSum =  Number(cIptcSum) +  Number(cIptc[i]);
		cIptcSum = Number(cIptcSum);
		}
		
gpapoint = Number(cResultSum / cIptcSum);
//下边是测试
 
 for(i = 0 ; i<=cResult.length - 1; i = i + 1){
             if(cResult[i] === 0)
             {
                      cResult.splice(i,1);
					  cIptc.splice(i,1);
/*                      alert("删除了第" + (i+1) + "个数据");
                      alert(cResult);*/
             }
              
 }
  
/* alert(cResult);
 alert(cIptc);*/
/*for ( i = 0; i <= cResult.length - 1; i = i + 1 ){
	gpapointr = parseFloat(calResult(parseFloat(cResult[i]))*parseFloat(cIptc[i]));
	cResult[i] = gpapointr;
}*/
cResultSum = 0;
cIptcSum = 0;
	for (i = 0; i<= cResult.length - 1 ; i++ ){
		cResultSum = parseFloat(cResultSum) + parseFloat(cResult[i]);
		cResultSum = parseFloat(cResultSum);
		cIptcSum =  Number(cIptcSum) +  Number(cIptc[i]);
		cIptcSum = Number(cIptcSum);
		}
		
gpapointr = Number(cResultSum / cIptcSum);
var sumString = "<div class='card-text' id='Summary'>已出成绩"+ p +"门,未出成绩" + q + "门.<br/>本学期绩点是" + gpapoint + "</div><div class='card-note'><strong总绩点</strong>计算了本学期所有课程，包含暂无成绩课程</div>";

$('.cards').prepend("<div class = 'card'><div class = 'card-title'>概况</div>"+ sumString +"</div>");
$('body').prepend((function (){/*

<div class="nav-bar" id="nav-bar-id">
  <table width="100%" border="0" cellpadding="0" cellspacing="0">
    <tr class="nav-tr">
      <td class="navTd" valign="middle"><img class="nav-title" alt="主页" src="http://7xs2vg.com1.z0.glb.clouddn.com/home.png" ></td>
      <td class="navTd" valign="middle"><img class="nav-tools" alt="功能" src="http://7xs2vg.com1.z0.glb.clouddn.com/tools.png" ></td>
      <td class="navTd" valign="middle"><img class="nav-help"  alt="帮助" src="http://7xs2vg.com1.z0.glb.clouddn.com/info.png" ></td>
    </tr>
  </table>
  </div>
  <script language="javascript">
var navF = function(){
	$('.nav-title').click(function(){
     	window.location.href='http://cupl.ml/index.html';   
		});
	$('.nav-refresh').click(function(){
        location.reload(true);
		});
	$('.nav-tools').click(function(){
		var navFT ="<div class='card' id = 'navTool'><table width='100%' border='0' cellspacing='0'> <tbody> <tr> <td class='card-nav-i'><a href='result.html'>手动</a></td> <td class='card-nav-i'><a href='avg.html'>平均</a></td> <td class='card-nav-i'><a href='calTool.html'>计算</a></td> </tr> <tr> <td class='card-nav-i'><a href='intro.html'>公式</a></td><td class='card-nav-i'><a href='help.html'>帮助</a></td><td class='card-nav-i'><a href='about.html'>关于</a></td> </tr> </tbody> </table> </div>";
        if ( document.getElementById("navTool") === null ){
	$(".cards").prepend(navFT);
	} else {
	$("#navTool").remove();
	}
		});
	$('.nav-help').click(function(){
        window.location.href='http://cupl.ml/help.html';  
		});
	};
$(document).ready(navF);

  </script>

 


*/}).toString().replace(/^.+?\*|\\(?=\/)|\*.+?$/gi, ""));