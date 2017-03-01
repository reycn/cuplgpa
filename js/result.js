var cNumber; //cNumber means "the number of class"
var i;
var cResult = 0;
var cResults = [];
var cResultsSum = 0;
var cIptc = 0;
var cIptcs = [];
var cIptcsSum = 0;
var result; //the result of calculation

cNumber = prompt("您需要计算绩点的课程总数是：", undefined);
cNumber = Number(cNumber);
if (cNumber === 0) {
	alert("你在逗我吗？你一门课都没学？");
	alert("这位一门没上课的同学绩点为 0 ，鉴定完毕。回头是岸，重新计算请点确认：");
	//添加继续计算命令
} else {
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
	alert("接下来您需要分别输入每门课程的成绩和对应的学分权重，请注意提示。开始计算请点击确定：");
	for (i = 0; i <= cNumber - 1; i++) {
		cResult = prompt("第" + (i + 1) + "门课的成绩：", undefined);
		cResult = Number(cResult);
		cIptc = prompt("第" + (i + 1) + "门课的学分权重：", undefined);
		cIptc = Number(cIptc);
		cIptcs.push(cIptc);
		cResult = calResult(cResult) * cIptc;
		cResults.push(cResult);
	}
	for (i = 0; i <= cNumber - 1; i++) {
		cResultsSum = cResultsSum + cResults[i];
		cResultsSum = Number(cResultsSum);
		cIptcsSum = cIptcsSum + cIptcs[i];
		cIptcsSum = Number(cIptcsSum);
	}
	result = cResultsSum / cIptcsSum;
	alert("您的绩点是" + result);
}