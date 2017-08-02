//原创编写：中国政法大学光明新闻传播院学欧阳荣鑫
//数据判断部分===================================
try {
    var bdS = document.getElementsByTagName('body')[0].innerHTML; //body字符串
} catch (err_no_content) {
    alert("服务器无返回，是否填写了正确密码？");
}

//var bdS = document.getElementsByTagName('body')[0].innerHTML(); //body字符串
if (bdS == undefined) {
    //alert("服务器无返回，是否填写了正确密码？");
    window.location.href = 'http://icupl.cn/index.html';
} else if (bdS.indexOf("瀵杈ラ璇″ㄧ蹇锛璇风璇锛") >= 0) { //检测获取数据是否成功
    alert("学校拒绝了本次查询，查询的人过多或密码错误，请返回重试。");
    window.location.href = 'http://icupl.cn/index.html';
} else if (bdS.indexOf("502 Bad Gateway") >= 0) {
    alert("遇到了502错误，请稍后重试");
    window.location.href = 'http://icupl.cn/index.html';
} else {}


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
var cS = [];
var cY = [];
var cRSum = 0;
var cWSum = 0;
var cAvg = 0;
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
                str = 93;
            } else if (str.indexOf("良好") >= 0) {
                str = 82;
            } else if (str.indexOf("中等") >= 0) {
                str = 75;
            } else if ((str.indexOf("及格") >= 0) && (str.indexOf("不") < 0)) {
                str = 65;
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
};
//var t = "及格 ";
//console.log(clean(t,3));

//数据处理=======================================
if (bdS.indexOf("本学期成绩") >= 0) { //检测获取数据是否成功
    cnn = 2;
    for (i = 0; i <= tn - 1; i++) {
        cN.push(clean($('.odd,.even').eq(i).find('td').eq(2).text(), 1));
        cE.push($('.odd,.even').eq(i).find('td').eq(3).text());
        cW.push(clean($('.odd,.even').eq(i).find('td').eq(4).text(), 2));
        cP.push(clean($('.odd,.even').eq(i).find('td').eq(5).text(), 1));
        cR.push(clean($('.odd,.even').eq(i).find('td').eq(9).text(), 3));
        cS.push(clean($('.odd,.even').eq(i).find('td').eq(10).text(), 3));
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
document.getElementsByTagName('head')[0].innerHTML = ('<title>成绩</title><meta charset="utf-8"><link href="https://cdn.icupl.cn/css/main.css" rel="stylesheet"><meta name="viewport" content="width=device-width,initial-scale=1"/>');
$('table').remove();
$('head').prepend("<meta name='theme-color' content='#e74c3c'>");
$('body').append("<div class='cards'></div>");

$('.cards').prepend("<div class = 'card' id='summm'><div class = 'card-title' id='totals'>成绩列表</div><div class='card-text' id='container' sytle='min-width:90%'>");
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
            credits: {
                enabled: false // 禁用版权信息
            },
            chart: {
                backgroundColor: '#f9f9f9',
                plotBackgroundColor: '#f9f9f9',
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
                    }, {
                        name: '1-60',
                        y: cRG[1]
                    }, {
                        name: '60-69',
                        y: cRG[2]
                    }, {
                        name: '70-79',
                        y: cRG[3]
                    }, {
                        name: '80-89',
                        y: cRG[4]
                    }, {
                        name: '90-100',
                        y: cRG[5]
                    }

                ]

            }]
        });
    });
});

$('.cards').append('</div></div>');
//绘制表格结束
/*for (i = 0; i <= cN.length - 1; i = i + 1) {
    $('.cards').append("<div class='card'><div class='card-title'>" + cN[i] + " " + cP[i] + "<br/>" + cR[i] + "</div>" + "<div class='card-note'>" + cE[i] + " " + cW[i] + "</div>" + "<div class='card-text'>" + "学分 " + cW[i] + "</div></div>");
}*/
$(".cards").append('<div class="card" id = "cardScores"><div class="card-table"><table width="100%" border="0" cellpadding="0" cellspacing="0"><tbody><tr border="0"><th scope="col" style="text-align:left; padding-left:2em;">课程</th><th scope="col">分数</th></tr></tbody></table></div></div>');

if (bdS.indexOf("本学期成绩") >= 0) {
    for (i = 0; i <= cN.length - 1; i = i + 1) {
        if (i % 2 !== 0) {
            $(".card-table tbody").append('<tr class="a" ><td class="d" width="80%"><strong>' + cN[i] + '</strong>' + cP[i] + ' ' + cW[i] + '学分' + ' 第' + cS[i] + '名' + '</td><td class="c" rowspan="2">' + cR[i] + '</td></tr><tr class="a" ><td class="e" >' + cE[i] + '</td></tr>');
        } else {
            $(".card-table tbody").append('<tr class="b" ><td class="d" width="80%"><strong>' + cN[i] + '</strong>' + cP[i] + ' ' + cW[i] + '学分' + ' 第' + cS[i] + '名' + '</td><td class="c" rowspan="2">' + cR[i] + '</td></tr><tr class="b" ><td class="e" >' + cE[i] + '</td></tr>');
        }
    }
} else {
    for (i = 0; i <= cN.length - 1; i = i + 1) {
        if (i % 2 !== 0) {
            $(".card-table tbody").append('<tr class="a" ><td class="d" width="80%"><strong>' + cN[i] + '</strong>' + cP[i] + ' ' + cW[i] + '学分' + '</td><td class="c" rowspan="2">' + cR[i] + '</td></tr><tr class="a" ><td class="e" >' + cE[i] + '</td></tr>');
        } else {
            $(".card-table tbody").append('<tr class="b" ><td class="d" width="80%"><strong>' + cN[i] + '</strong>' + cP[i] + ' ' + cW[i] + '学分' + '</td><td class="c" rowspan="2">' + cR[i] + '</td></tr><tr class="b" ><td class="e">' + cE[i] + '</td></tr>');
        }
    }
}

var cAvgW = 0;
for (i = 0; i <= cR.length - 1; i++) {
    if (cR[i] == 0) {
        cAvg = cAvg;
        cAvgW = cAvgW;
    } else {
        cAvg = cAvg + cR[i];
        cAvgW = cAvgW + 1;
    }
}
cAvg = cAvg / cAvgW;
var newAvg = 0; //当前平均分

var newLength = 0;
//console.log(cR);
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




var gpa = [];
for (i = 0; i <= cR.length - 1; i = i + 1) {
    gpa[i] = cR[i];
    //console.log(gpa[i]);
}

for (i = 0; i <= gpa.length - 1; i = i + 1) {
    gpapoint = parseFloat(calResult(parseFloat(gpa[i])) * parseFloat(cW[i]));
    gpa[i] = gpapoint;
}
//console.log(gpa);

for (i = 0; i <= gpa.length - 1; i++) {
    if (gpa[i] == 0) {
        //    cRSum = parseFloat(cRSum);
        //    cWSum = Number(cWSum);
        cRSum = cRSum;
        cWSum = cWSum;
    } else {
        //    cRSum = parseFloat(cRSum) + parseFloat(gpa[i]);
        //    cRSum = parseFloat(cRSum);
        //    cWSum = Number(cWSum) + Number(cW[i]);
        //    cWSum = Number(cWSum);
        cRSum = cRSum + gpa[i];
        cWSum = cWSum + cW[i];
    }


}
gpapoint = Number(cRSum / cWSum);

var sumString = "<div class='card-text' id='Summary''>一共查询到" + cN.length + "门成绩，您的绩点约为" + gpapoint.toFixed(2) + "，平均分约为" + cAvg.toFixed(2) + "(均保留两位小数)。<br>点击 <strong>成绩列表</strong> 可切换计算特定科目平均分。</div>";
var statString = "<div align='center'></center><script src='https://s13.cnzz.com/z_stat.php?id=1261985373&web_id=1261985373' language='JavaScript'></script></div>"
$('#container').before(sumString);
$('#container').after(statString);

var navF = function() {

    $('.nav-title').click(function() {
        window.location.href = 'http://icupl.cn/index.html';
    });
    $('.nav-refresh').click(function() {
        location.reload(true);
    });
    $('#totals').click(function() {

        /*** 测试 选项中
        var navFT = "<div class='card' id = 'navTool'><table width='100%' border='0' cellspacing='0'> <tbody> <tr> <td class='card-nav-i'><a href='result.html'>手动</a></td> <td class='card-nav-i'><a href='avg.html'>平均</a></td> <td class='card-nav-i'><a href='calTool.html'>计算</a></td> </tr> <tr> <td class='card-nav-i'><a href='intro.html'>公式</a></td><td class='card-nav-i'><a href='help.html'>帮助</a></td><td class='card-nav-i'><a href='help.html'>关于</a></td> </tr> </tbody> </table> </div>";
        ***/
        if (document.getElementById('avgCard') === null) {
            $('#totals').fadeOut().text('平均分').fadeIn();


            $('#cardScores').before("<div class = 'card' id = 'avgCard'><div class = 'card-title' >平均：<font id='1000'>" + "未计算" + "<font></div><div class='card-text' sytle='min-width:90%'><center/><ul class='calAvgUl'></ul></center></div></div>").fadeIn();
            for (i = 0; i <= cN.length - 1; i = i + 1) {
                //属性排序
                if (cP[i].indexOf("必修") >= 0) {
                    $(".calAvgUl").append("<li><input type='checkbox' name='checkbox' checked='true' value='" + cR[i] + "' data-labelauty='" + cN[i] + "'></li>");

                } else {
                    $(".calAvgUl").append("<li><input type='checkbox' name='checkbox' value='" + cR[i] + "' data-labelauty='" + cN[i] + "'></li>");
                }
            }
            $(".calAvgUl").append("<div class='clear'></div>");
            //$('#calAvg').append("");
            $('#avgCard').fadeIn();
            $(function() {
                $(':input').labelauty();
            });
            $('input').click(function() {
                newAvg = 0;
                newLength = 0;
                //当前选中数量
                $('input[type="checkbox"][name="checkbox"]:checked').each(
                    function() {
                        console.log($(this).val());
                        newLength = newLength + 1;
                        newAvg = newAvg + Number($(this).val());
                        //console.log(newAvg);
                    }
                );
                newAvg = newAvg / newLength;
                $('#1000').text(newAvg.toFixed(2));
                console.log(newAvg);

            });
            $('#cardScores').fadeOut();
            $('#newNot').fadeOut();
        } else {
            $('#totals').fadeOut().text('成绩列表').fadeIn();
            $('#avgCard').fadeOut().remove();
            $('#cardScores').fadeIn();
        }


    });

    $('.nav-help').click(function() {
        window.location.href = 'http://icupl.cn/help.html';
    });


};
$(document).ready(navF);
/*$('body').prepend("<div class='nav-bar' id='nav-bar-id'> <table width='100%' border='0' cellpadding='0' cellspacing='0'> <tr class='nav-tr'> <td class='navTd' valign='middle'><img class='nav-title' alt='主页' src='https://cdn.icupl.cn/pic/ac/home.png' ></td> <td class='navTd' valign='middle'><img class='nav-tools' alt='功能' src='https://cdn.icupl.cn/pic/ac/tools.png' ></td> <td class='navTd' valign='middle'><img class='nav-help' alt='帮助' src='https://cdn.icupl.cn/pic/ac/info.png' ></td> </tr> </table> </div> <script language='javascript'>");
$('body').append("<div style = 'font-size:0.1em; color:#999; text-align:center; '><a href='http://coly.me/'>欧阳荣鑫</a> 原创 &copy; 2015 - 16</div>");*/
/* //程序调试=================================================
console.log(cN);
console.log(cE);
console.log(cW);
console.log(cP);
console.log(cR);
console.log(cY); */
