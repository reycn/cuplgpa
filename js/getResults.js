var cResult = 0;
var cResults = [];
var cResultsSum = 0;
var cIptc = 0;
var cIptcs = [];
var cIptcsSum = 0;

var p = 0;
var q = 0;
var i = 0;
var j = 0;

var td = document.getElementsByTagName("td");

for (i = 0; i <= ((td.length - 18 )/ 12); i = i + 1) {
    j = 18 + 12 * i;
    cResult = td[j].innerHTML;
    cResult = Number(cResult);
	cIptc = td[j-5].innerHTML;
	cIptc = Number(cIptc);
	
    if (cResult === 0) {
        q = q + 1;
    } else if (isNaN(cResult) === true) {
        if (td[j].innerHTML.indexOf("优秀") > 0) {
            cResult = 85;
        } else if (td[j].innerHTML.indexOf("良好") > 0) {
            cResult = 80;
        } else if ((td[j].innerHTML.indexOf("及格") > 0) && (td[j].innerHTML.indexOf("不") < 0)) {
            cResult = 70;
        } else {
            cResult = 60;
        }
        cResults.push(cResult);
		cIptcs.push(cIptc);
        p = p + 1;
    } else {
        cResults.push(cResult);
		cIptcs.push(cIptc);
        p = p + 1;
    }
}

if ( (p === 0) && (q === 0) ) {
	alert ("没有查询到课程，可能是账号密码错误或服务器繁忙。如存在问题请联系站主：oyrx@vip.qq.com");
}else{
alert("一共查询到" + (p+q) + "门课程，其中暂无成绩有" + q + "门，有成绩课程有" + p + "门。查到的成绩分别是：" + cResults + "。他们的学分分别是：" + cIptcs);

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

for ( i = 0; i <= cResults.length - 1; i = i + 1 ){
	cResult = calResult(cResults[i])*cIptcs[i];
	cResults[i] = cResult;
}

	for (i = 0; i<= cResults.length - 1 ; i++ ){
		cResultsSum = cResultsSum + cResults[i];
		cResultsSum = Number(cResultsSum);
		cIptcsSum = cIptcsSum + cIptcs[i];
		cIptcsSum = Number(cIptcsSum);
		}
		
cResult = cResultsSum / cIptcsSum;
alert("您的绩点是" + cResult);
}