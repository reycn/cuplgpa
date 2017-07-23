document.write((function (){/*



<div class="nav-bar" id="nav-bar-id">
  <table width="100%" border="0" cellpadding="0" cellspacing="0">
    <tr class="nav-tr">
      <td class="navTd" valign="middle"><img class="nav-title" alt="主页" src="https://cdn.icupl.cn/pic/ac/home.png" ></td>
      <td class="navTd" valign="middle"><img class="nav-tools" alt="功能" src="https://cdn.icupl.cn/pic/ac/tools.png" ></td>
      <td class="navTd" valign="middle"><img class="nav-help"  alt="帮助" src="https://cdn.icupl.cn/pic/ac/info.png" ></td>
    </tr>
  </table>
  </div>
  <script language="javascript">
var navF = function(){
	$('.nav-title').click(function(){
     	window.location.href='index.html';   
		});
	$('.nav-refresh').click(function(){
        location.reload(true);
		});
	$('.nav-tools').click(function(){
		var navFT ="<div class='card' id = 'navTool'><table width='100%' border='0' cellspacing='0'> <tbody> <tr> <td class='card-nav-i'><a href='result.html'>手动</a></td> <td class='card-nav-i'><a href='avg.html'>平均</a></td> <td class='card-nav-i'><a href='calTool.html'>计算</a></td> </tr> <tr> <td class='card-nav-i'><a href='intro.html'>公式</a></td><td class='card-nav-i'><a href='help.html'>帮助</a></td><td class='card-nav-i'><a href='help.html'>关于</a></td> </tr> </tbody> </table> </div>";
        if ( document.getElementById("navTool") === null ){
	$(".cards").prepend(navFT);
	} else {
	$("#navTool").remove();
	}
		});
	$('.nav-help').click(function(){
        window.location.href='help.html';  
		});
	};
$(document).ready(navF);

  </script>

 

 


*/}).toString().replace(/^.+?\*|\\(?=\/)|\*.+?$/gi, ""));


