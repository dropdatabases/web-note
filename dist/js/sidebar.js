$(function(){function t(t,n){return"a"===n?'<a href="./'+t+'.html">'+t+"</a><br>":"<"+n+">"+t+"</"+n+">"}for(var n=$("#sidebar"),o=($("#catalog"),$("#hideCatalog")),a=($("#showCatalog"),$("#container")),e=["HTML","CSS","Javascript","移动Web","调试","协议","安全","其他"],i=[["meta标签","href和src","link","script","HTML语义化","HTML5"],["选择器","盒式模型","元素种类","元素定位","元素居中","伪类伪元素","格式化上下文","CSS Hack","CSS3","CSS怪异现象","颜色和长度"],["作用域链","原型链","闭包","事件","插件","同源策略","字符编码","JSONP","this"],["响应式布局","bootstrap"],["抓包工具","chrome devtools"],["HTTP"],["XSS"],["浏览器渲染","设计策略","cookie"]],r=0;r<e.length;r++){n.append(t(e[r],"h3"));for(var c=0;c<i[r].length;c++)n.append(t(t(i[r][c],"a"),"div"))}var s=$("#sidebar>div>a");o.click(function(t){n.animate({width:"0",padding:"0",margin:"0"},"slow"),s.animate({"font-size":"0"},"slow");for(var o=0,e=0;o<=25;o+=.3,e+=10)!function(){var t=65+o+"%",n="0 "+(4+o/25)+"%";setTimeout(function(){a.css({width:t,margin:n})},e)}();t.stopPropagation(),window.event.cancelBubble=!0});var d,l=$("#sidebar div");l.mouseover(function(){this.style.backgroundColor="#ccc"}),l.mouseout(function(){this.style.backgroundColor="#f2f2f2"}),$("a").attr("target","_blank"),$("html").eq(0).css("font-size",(d=window.innnerWidth||document.documentElement.clientWidth||document.body.clientWidth)>1200?16:d>800?14:d>400?12:10)});