$('.card:eq(1)').before("<div class = 'card'><div class = 'card-title'>平均成绩：" + cAvg.toFixed(2) + "</div><div class='card-text' sytle='min-width:90%'><center/><ul class='calAvgUl'></ul></center></div></div>");

for (i = 0; i <= cN.length - 1; i = i + 1) {
    $(".calAvgUl").append("<li><input type='checkbox' name='checkbox'  data-labelauty='" + cN[i] + "'></li>");
}
$(".calAvgUl").append("<div class='clear'></div>");
//$('#calAvg').append("");

$('.card:eq(2)').fadeOut();
$('.card:eq(1)').fadeIn();
$(function() {
    $(':input').labelauty();
});

var newAvg = 0; //当前平均分
var newLength = 0;
 //当前选中数量
var reCalAvg = function() {
	$('input[type="checkbox"][name="checkbox"]:checked').each(
                function() {
                       console.log($(this).val());
                       newLength = newLength +1;
                       newAvg = newAvg + Number($(this).val());
                       //console.log(newAvg);

                }
            );
	newAvg = newAvg / newLength;
}
$("lable").click(reCalAvg());
console.log(newAvg);
/****
console.log($('input[type="checkbox"][name="checkbox"]:checked:eq(0)').val());
console.log($('input:eq(0)').is(":checked"));
console.log($('input:eq(0)').val());
*********/