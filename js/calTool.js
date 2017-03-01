var operateExp={ 
'+':function(num1,num2){return num1+num2;}, 
'-':function(num1,num2){return num1-num2;}, 
'*':function(num1,num2){return num1*num2;}, 
'/':function(num1,num2){return num2===0?0:num1/num2;} 
} 
//计算函数 
var operateNum=function(num1,num2,op){ 
if(!(num1&&num2))return; 
//保证num1,num2都为数字 
num1=Number(num1); 
num2=Number(num2); 
//不存在操作符,返回num1; 
if(!op)return num1; 
//匹配运算公式 
if(!operateExp[op])return 0; 
return operateExp[op](num1,num2); 
} 
//显示面板 
var calculate_outPut=document.getElementById("calculate_outPut"); 
//操作面板 
var calculate_num=document.getElementById("calculate_num"); 
var result=0;//计算结果 
var isReset=false;//是否重新设置 
var operation;//操作符 
//设置显示屏的值 
function setScreen(num){ 
calculate_outPut.value=num; 
} 
//获取显示屏的值 
function getScreen(){ 
return calculate_outPut.value; 
} 
//添加点击事件 
calculate_num.onclick=function(e){ 
var ev = e || window.event; 
var target = ev.target || ev.srcElement; 
if(target.type=="button"){ 
var mark=target.getAttribute("_type");//获取当前点击button的自定义的属性。 
var value=target.value;//获取当前的值 
var num=getScreen();//获取当前框的值 
if(mark==='bs'){//退格键 
if(num==0)return; 
var snum=Math.abs(num).toString(); 
if(snum.length<2) 
setScreen(0); 
else 
setScreen(num.toString().slice(0,-1)); 
} 
if(mark==='num'){//数字键 
if(num==='0'||isReset){//有操作符或显示屏为0 
setScreen(value); 
isReset=false; 
return; 
} 
setScreen(num.toString().concat(value)); 
} 
if(mark==="."){//小数点 
var hasPoint=num.toString().indexOf(".")>-1; 
if(hasPoint){ 
if(isReset){ 
setScreen("0"+value); 
isReset=false; 
return; 
} 
return; 
} 
setScreen(num.toString().concat(value)); 
} 
if(mark==="+/-"){//正负号 
setScreen(-num); 
} 
if(mark==="op"){//如果点击的是操作符则设计第一个操作数 
if(isReset)return; 
isReset=true; 
if(!operation){ 
result=+num; 
operation=value; 
return; 
} 
result=operateNum(result,num,operation); 
setScreen(result); 
operation=value; 
} 
if(mark==="cls"){//清零 
result=0; 
setScreen(result); 
isReset=false; 
} 
if(mark==="eval"){//计算 
if(!operation)return; 
result=operateNum(result,num,operation); 
setScreen(result); 
operation=null; 
isReset=false; 
} 
} 
} 