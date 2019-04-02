
//阻止事件冒泡
event.cancelBubble = true;
event.stopPropagation();//只阻止事件冒泡，若捕获和冒泡均绑定，则捕获时候执行的事件，冒泡时不再执行
return false;//不仅阻止事件冒泡，也阻止事件本身


//哪些事件不支持冒泡
/*
  scroll
  blur
  mouseleave

*/

/*
<script>
	window.onload = function(){
		var outA = document.getElementById("outA");  
		var outB = document.getElementById("outB");  
		var outC = document.getElementById("outC");  
		
		// 目标
		outC.addEventListener('click',function(event){alert("target");},false);
 
		// 事件冒泡
		outA.addEventListener('click',function(){alert("bubble");},false);
 
		// 事件捕获
		outA.addEventListener('click',function(){alert("capture");event.stopPropagation();},true);		
		
	};
 
</script>
 
<body>
	<div id="outA" style="width:400px; height:400px; background:#CDC9C9;position:relative;">
		<div id="outB" style="height:200; background:#0000ff;top:100px;position:relative;">
			<div id="outC" style="height:100px; background:#FFB90F;top:50px;position:relative;"></div> 
		</div>
	</div>
</body>

*/

//只会执行 capture
