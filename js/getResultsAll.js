//原创编写：中国政法大学光明新闻传播院学欧阳荣鑫
//数据判断部分===================================
var bdS = document.getElementsByTagName('body')[0].innerHTML; //body字符串
if (bdS.indexOf("瀵杈ラ璇″ㄧ蹇锛璇风璇锛") >= 0) { //检测获取数据是否成功
    alert("学校拒绝了本次查询，查询的人过多或密码错误，请返回重试。");
    window.location.href = 'http://cupl.ml/index.html';
} else if (bdS.indexOf("502 Bad Gateway") >= 0 ) {
	alert("遇到了502错误，请稍后重试");
    window.location.href = 'http://cupl.ml/index.html';
} else {

}
var cnn = 0;
//定义部分=======================================
var tn = $('.odd,.even').length; //总的科目数
/* var s1 = $("[name='qb_001']");//s1必修,s2选修,s3限选,s4任选，HTML字符串
var s2 = $("[name='qb_002']");
var s3 = $("[name='qb_003']");
var s4 = $("[name='qb_004']");
var s5 = $("[name='qb_005']");
var s1A = {};//科目对象组
var s2A = [];
var s3A = [];
var s4A = [];
var s5A = []; */

var i = 0;

var cN = [];
var cE = [];
var cR = [];
var cP = [];
var cW = [];
var cY = [];
var cRSum = 0;
var cWSum = 0;
/* var iA =[];//计数数组 */
/* 
var toObj = function (name,english,weight,property,result,why) { //数据转换成对象
	this.name = name;
	this.english = english;
	this.weight = weight;
	this.property = property;
	this.result = result;
	this.why = why;
	}
 */
var clean = function(str, num) { //成绩处理函数，num = 1,2，3可灵活添加
    switch (num) {
    case 1:
        //删除空格
        str.toString();
        str.replace(" ", "");
        break;
    case 2:
        //删除空格并转化成数字
        str.toString();
        str.replace(" ", "");
        str = Number(str);
        break;
    case 3:
        //转换等级至分数
        str.toString();
        str.replace(" ", "");
        if (str.indexOf("优秀") >= 0) {
            str = 85;
        } else if (str.indexOf("良好") >= 0) {
            str = 80;
        } else if (str.indexOf("中等") >= 0) {
            str = 70;
        } else if ((str.indexOf("及格") >= 0) && (str.indexOf("不") < 0)) {
            str = 60;
        } else if ((str.indexOf("及格") >= 0) && (str.indexOf("不") >= 0)) {
            str = 0;
        } else {
            str = Number(str);
        }
        break;
    default:
        str.toString(); //不改变原数据
    }
    return str;
}
//var t = "及格 ";
//console.log(clean(t,3));

//数据处理=======================================
if (bdS.indexOf("本学期成绩") >= 0 ) { //检测获取数据是否成功
    cnn = 2;
	for (i = 0; i <= tn - 1; i++) {
    cN.push(clean($('.odd,.even').eq(i).find('td').eq(2).text(), 1));
    cE.push($('.odd,.even').eq(i).find('td').eq(3).text());
    cW.push(clean($('.odd,.even').eq(i).find('td').eq(4).text(), 2));
    cP.push(clean($('.odd,.even').eq(i).find('td').eq(5).text(), 1));
    cR.push(clean($('.odd,.even').eq(i).find('td').eq(9).text(), 3));
    cY.push(clean($('.odd,.even').eq(i).find('td').eq(11).text(), 1));
}
} else {
for (i = 0; i <= tn - 1; i++) {
    cN.push(clean($('.odd,.even').eq(i).find('td').eq(2).text(), 1));
    cE.push($('.odd,.even').eq(i).find('td').eq(3).text());
    cW.push(clean($('.odd,.even').eq(i).find('td').eq(4).text(), 2));
    cP.push(clean($('.odd,.even').eq(i).find('td').eq(5).text(), 1));
    cR.push(clean($('.odd,.even').eq(i).find('td').eq(6).text(), 3));
    cY.push(clean($('.odd,.even').eq(i).find('td').eq(7).text(), 1));
}
}
/* for ( i = 0; i <= tn - 1; i++ ) { 
  iA.push(String(i));
} */

//数据输出=============================================
//$("body").remove();
$("[name='qb_001']").remove();
$("[name='qb_002']").remove();
$("[name='qb_003']").remove();
$("[name='qb_004']").remove();
$("[name='qb_005']").remove();
$('title').append('全部成绩查询');
document.getElementsByTagName('head')[0].innerHTML = ('<meta charset="utf-8"><link href="http://7xs8jq.com1.z0.glb.clouddn.com/main.css" rel="stylesheet"><meta name="viewport" content="width=device-width,initial-scale=1"/>');
$('table').remove();
$('head').prepend("<meta name='theme-color' content='#3498db'>");
$('body').append("<div class='cards'></div>");

$('.cards').prepend("<div class = 'card'><div class = 'card-title'>概况</div><div class='card-text' id='container' sytle='min-width:90%'>");
//绘制表格开始
var cRG = [0, 0, 0, 0, 0, 0, 0];
for (i = 0; i <= cR.length - 1; i = i + 1) {
    if (Number(cR[i]) === 0) {
        cRG[0]++;
    } else if (Number(cR[i]) < 60) {
        cRG[1]++;
    } else if (Number(cR[i]) < 70) {
        cRG[2]++;
    } else if (Number(cR[i]) < 80) {
        cRG[3]++;
    } else if (Number(cR[i]) < 90) {
        cRG[4]++;
    } else if (Number(cR[i]) < 100) {
        cRG[5]++;
    } else {
        cRG[6]++;
    }
}

$(function() {

    $(document).ready(function() {

        // Build the chart
        $('#container').highcharts({
			credits:{
                enabled:false // 禁用版权信息
            },
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: null
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
                    y: cRG[0]
                },
                {
                    name: '1-60',
                    y: cRG[1]
                },
                {
                    name: '60-69',
                    y: cRG[2]
                },
                {
                    name: '70-79',
                    y: cRG[3]
                },
                {
                    name: '80-89',
                    y: cRG[4]
                },
                {
                    name: '90-100',
                    y: cRG[5]
                }

                ]

            }]
        });
    });
});

$('.cards').append("</div></div>");
//绘制表格结束
/*for (i = 0; i <= cN.length - 1; i = i + 1) {
    $('.cards').append("<div class='card'><div class='card-title'>" + cN[i] + " " + cP[i] + "<br/>" + cR[i] + "</div>" + "<div class='card-note'>" + cE[i] + " " + cW[i] + "</div>" + "<div class='card-text'>" + "学分 " + cW[i] + "</div></div>");
}*/
$(".cards").append('<div class="card"><div class="card-table"><table width="100%" border="0" cellpadding="0" cellspacing="0"><tbody><tr border="0"><th scope="col" style="text-align:left; padding-left:2em;">课程</th><th scope="col">分数</th></tr></tbody></table></div></div>');
for (i = 0; i <= cN.length - 1; i = i + 1) {
	if ( i % 2 !== 0 ) {
	$(".card-table tbody").append('<tr class="a" ><td class="d" width="80%"><strong>' + cN[i] + '</strong>' + cP[i] + ' ' + cW[i] + '学分' + '</td><td class="c" rowspan="2">' + cR[i] + '</td></tr><tr class="a" ><td class="e" >' + cE[i] + '</td></tr>');
	} else {
	$(".card-table tbody").append('<tr class="b" ><td class="d" width="80%"><strong>' + cN[i] + '</strong>' + cP[i] + ' ' + cW[i] + '学分' + '</td><td class="c" rowspan="2">' + cR[i] + '</td></tr><tr class="b" ><td class="e" >' + cE[i] + '</td></tr>');
	}
}

var gpapoint = 0;
var gpapointr = 0;

var calResult = function(x) {
    if ((x >= 95) && (x <= 100)) {
        x = 6 + (x - 95) / 10;
    } else if (x >= 90) {
        x = 5 + (x - 90) / 10;
    } else if (x >= 85) {
        x = 4 + (x - 85) / 10;
    } else if (x >= 80) {
        x = 3 + (x - 80) / 10;
    } else if (x >= 70) {
        x = 2 + (x - 70) / 10;
    } else if (x >= 60) {
        x = 1 + (x - 60) / 10;
    } else {
        x = 0;
    }
    return x;
};

var gpa = cR;
for (i = 0; i <= gpa.length - 1; i = i + 1) {
    gpapoint = parseFloat(calResult(parseFloat(gpa[i])) * parseFloat(cW[i]));
    gpa[i] = gpapoint;
}
console.log(gpa);

for (i = 0; i <= gpa.length - 1; i++) {
    cRSum = parseFloat(cRSum) + parseFloat(gpa[i]);
    cRSum = parseFloat(cRSum);
    cWSum = Number(cWSum) + Number(cW[i]);
    cWSum = Number(cWSum);
}

gpapoint = Number(cRSum / cWSum);
//下边是测试
/* for (i = 0; i <= cR.length - 1; i = i + 1) {
    if (cR[i] === 0) {
        cR.splice(i, 1);
        cW.splice(i, 1);
    }

} */

/* alert(cR);
 alert(cW);*/
/*for ( i = 0; i <= cR.length - 1; i = i + 1 ){
	gpapointr = parseFloat(calResult(parseFloat(cR[i]))*parseFloat(cW[i]));
	cR[i] = gpapointr;
}*/
/* cRSum = 0;
cWSum = 0;
for (i = 0; i <= cR.length - 1; i++) {
    cRSum = parseFloat(cRSum) + parseFloat(cR[i]);
    cRSum = parseFloat(cRSum);
    cWSum = Number(cWSum) + Number(cW[i]);
    cWSum = Number(cWSum);
}

gpapointr = Number(cRSum / cWSum); */
/*console.log(gpapoint);*/
var sumString = "<div class='card-text' id='Summary'>一共查询到" + cN.length + "门成绩，您的绩点约为" + gpapoint.toFixed(2) + "(保留两位小数)。</div>";

$('#container').before(sumString);

var navF = function(){
	$('.nav-title').click(function(){
     	window.location.href='http://cupl.ml/index.html';   
		});
	$('.nav-refresh').click(function(){
        location.reload(true);
		});
	$('.nav-tools').click(function(){
		var navFT ="<div class='card' id = 'navTool'><table width='100%' border='0' cellspacing='0'> <tbody> <tr> <td class='card-nav-i'><a href='result.html'>手动</a></td> <td class='card-nav-i'><a href='avg.html'>平均</a></td> <td class='card-nav-i'><a href='calTool.html'>计算</a></td> </tr> <tr> <td class='card-nav-i'><a href='intro.html'>公式</a></td><td class='card-nav-i'><a href='help.html'>帮助</a></td><td class='card-nav-i'><a href='about.html'>关于</a></td> </tr> </tbody> </table> </div>";
        if ( document.getElementById('navTool') === null ){
	$('.cards').prepend(navFT);
	} else {
	$('#navTool').remove();
	}
		});
	$('.nav-help').click(function(){
        window.location.href='http://cupl.ml/help.html';  
		});
	};
$(document).ready(navF);
  
$('body').prepend("<div class='nav-bar' id='nav-bar-id'> <table width='100%' border='0' cellpadding='0' cellspacing='0'> <tr class='nav-tr'> <td class='navTd' valign='middle'><img class='nav-title' alt='主页' src='http://7xs2vg.com1.z0.glb.clouddn.com/home.png' ></td> <td class='navTd' valign='middle'><img class='nav-tools' alt='功能' src='http://7xs2vg.com1.z0.glb.clouddn.com/tools.png' ></td> <td class='navTd' valign='middle'><img class='nav-help' alt='帮助' src='http://7xs2vg.com1.z0.glb.clouddn.com/info.png' ></td> </tr> </table> </div> <script language='javascript'>");
/* //程序调试=================================================
console.log(cN);
console.log(cE);
console.log(cW);
console.log(cP);
console.log(cR);
console.log(cY); */
