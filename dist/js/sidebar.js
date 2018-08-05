hljs&&hljs.initHighlightingOnLoad(),$(function(){var viewport=document.createElement("meta");function wrapByA(e){return'<a href="'+("没有了"===e?"javascript:void(0)":"./"+e+".html")+'">'+e+"</a>"}function wrapByTag(e,t){return"a"===t?wrapByA(e):"<"+t+">"+e+"</"+t+">"}function getViewport(e){return e=e||window,{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}}function scrollTo(e,t){"返回顶部"!==e&&e?t?t.animate({scrollTop:$("#"+e).offset().top-100},500):$body.animate({scrollTop:$("#"+e).offset().top},500):$body.animate({scrollTop:0},500)}viewport.setAttribute("name","viewport"),viewport.setAttribute("content","width=device-width, initial-scale=1"),$("head")[0].appendChild(viewport);for(var url=window.location.href,currentTitle=decodeURI(url.substring(url.lastIndexOf("/")+1,url.lastIndexOf("."))),$sidebar=$("#sidebar"),$hideCatalog=$("#hideCatalog"),$showCatalog=$("#showCatalog"),$catalog=$("#catalog"),$title=$("#title"),$container=$("#container"),$body=$("html, body"),category=["HTML","CSS","Javascript","NodeJS","VueJS","移动Web","工具","协议","安全","后端","其他"],items=[["DOM","meta标签","href和src","link","script","HTML语义化","HTML5","canvas","svg"],["选择器","盒式模型","元素种类","元素定位","元素居中","伪类伪元素","格式化上下文","CSS Hack","CSS3","CSS怪异现象","颜色和长度","百分比"],["数据类型","数组字符串与对象","循环","作用域链","原型链","闭包","事件","同源策略","Class","JSONP","this","jquery","promise","Generator","Typescript"],["commonJS","package.json","path","file system","process","webpack","plugins","loader"],["安装","实例","模版","组件","mixins","router","vuex"],["响应式布局","bootstrap","viewport"],["抓包工具","chrome devtools","git","sublime 插件"],["HTTP"],["CSRF","XSS"],["Thinkphp5.1","htaccess"],["路径匹配","浏览器渲染","设计策略","cookie","头疼的兼容","命名规范","字符编码","bat"]],str="",i=0;i<category.length;i++){str+=wrapByTag('<img src="../images/slide_down.png">'+category[i],"h3");for(var j=0,tmp="",insertedId="";j<items[i].length;j++)insertedId=items[i][j]===currentTitle?' id="currentItem" ':"",tmp+="<div"+insertedId+">"+wrapByA(items[i][j])+"</div>";str+=wrapByTag(tmp,"section")}$sidebar.append(str),$catalog.append('<section id="searchContainer"><input id="searchInput" type="text" placeholder="搜索文章（支持正则）"/><section id="searchResult"></section></section>');var $searchInput=$("#searchInput"),$searchResult=$("#searchResult"),liIndex=0;$searchResult.css("display","none"),$searchInput.keyup(function(event){var value=$searchInput.val(),str="";if(value=value||" ",items.forEach(function(item){item.forEach(function(el){var reg=null;reg=/\/.+\/i?g?m?/.test(value)?eval(value):eval("/"+value+"/i"),reg.test(el)&&(str+=wrapByTag(el.replace(reg,"<span>"+el.match(reg)+"</span>"),"li"))})}),""===value.trim()||""===str.trim()?$searchResult.css("display","none"):(event.keyCode<37||40<event.keyCode)&&13!==event.keyCode&&($searchResult.css("display","block"),$searchResult.html(str),$("#searchResult li").each(function(){$(this).click(function(){window.open("./"+this.innerText+".html")})})),""!==str.trim()){var list=$("#searchResult li");switch(event.keyCode){case 13:var index=list.toArray().findIndex(function(e){return"rgb(239, 239, 239)"===e.style.backgroundColor});-1===index?list.eq(0).click():list.eq(index).click();break;case 37:break;case 38:0<liIndex&&liIndex--,liIndex<list.length&&list.eq(liIndex).css("background-color",""),0<liIndex&&list.eq(liIndex-1).css("background-color","#efefef");break;case 39:break;case 40:0<liIndex&&list.eq(liIndex-1).css("background-color",""),liIndex<list.length&&(list.eq(liIndex).css("background-color","#efefef"),liIndex++);break;default:liIndex=0}}}),$container.click(function(){$searchResult.css("display","none")});var isBright=!0,arrBrightDown="../images/slide_down.png",arrBrightUp="../images/slide_up.png",arrDarkDown="../images/slide_down_dark.png",arrDarkUp="../images/slide_up_dark.png",$itemHead=$("#sidebar h3");$itemHead.each(function(){var e=$(this),t=e.children();e.click(function(){t.attr("src")===arrBrightDown||t.attr("src")===arrDarkDown?t.attr("src",isBright?arrBrightUp:arrDarkUp):t.attr("src",isBright?arrBrightDown:arrDarkDown),e.next().slideToggle("slow")})});var lineLength=getViewport().width/3;$title.after('<svg title="点击切换样式" style="display: block; margin: auto; width:'+lineLength+'px" xmlns="http://www.w3.org/2000/svg" version="1.1" height="1px"><path id="line" d="M 0 0 L '+lineLength+' 0" style="stroke: #000; stroke-dasharray: '+lineLength+"; stroke-dashoffset: "+lineLength+'; fill: none;"/></svg>');var $line=$("#line");$title.mouseover(function(){$title.animate({"padding-top":"1%","padding-bottom":"1%"},"fast"),$line.animate({"stroke-dashoffset":0},"fast")}),$title.mouseout(function(){$title.animate({"padding-top":"0","padding-bottom":"0"},"fast"),$line.animate({"stroke-dashoffset":lineLength},"fast")});var $theme=$("link").eq(2),$codeStyle=$("link").eq(1),$itemBlockImg=$("#sidebar h3 img"),$hideSidebarImg=$("#hideCatalog");function widthAndMargin(e,t,i,n){var a,s,l=(t-e)/i,r=1e3*n/i;e<t?(a=4,s=1/i):(a=5,s=-1/i);for(var o=e,c=0;o!==t;o+=l,a+=s,c+=r)!function(){var e=o+"%",t="0 "+a+"%";setTimeout(function(){$container.css({width:e,margin:t})},c)}();setTimeout(function(){a+=s,$container.css({width:t+"%",margin:"0 "+a+"%"})},1e3*n)}function getName(e){return e.replace(/[\s$@#&;()/.]/g,"")}$title.click(function(){$theme.attr("href",isBright?"../css/dark.css":"../css/bright.css"),$codeStyle.attr("href",isBright?"../css/styles/agate.css":"../css/styles/default.css"),$line.css("stroke",isBright?"#fff":"#000"),$hideSidebarImg.attr("src",isBright?"../images/catalog_dark.png":"../images/catalog.png"),$itemBlockImg.each(function(e,t){var i=t.src;t.src=isBright?i.substring(0,i.lastIndexOf("."))+"_dark.png":i.substring(0,i.lastIndexOf("_"))+".png"}),$("a").each(function(e,t){t.href=isBright?t.href+"?theme=dark":t.href.replace("?theme=dark","")}),isBright=!isBright}),0<=url.indexOf("?theme=dark")&&$title.click(),$hideCatalog.attr("title","点击隐藏侧栏"),$hideCatalog.click(function(e){$sidebar.animate({width:"0",padding:"0"},"slow",function(){$sidebar.css("display","none"),$showCatalog.css("display","block")}),widthAndMargin(65,90,25,1),e.stopPropagation(),window.event.cancelBubble=!0}),$showCatalog.attr("title","点击显示侧栏"),$showCatalog.click(function(){var e,t=getViewport().width;t<400?(t="100%",e="0"):(t="25%",e="1%"),$sidebar.css("display","inline-block"),$showCatalog.css("display","none"),$sidebar.animate({width:t,padding:e},"slow"),widthAndMargin(90,65,20,.5)}),$("a").not(".self").attr("target","_blank");for(var $subTitle=$("#container>section>h2"),subTitleNav="",subTitleToggleString="",subTitleBlockNumber=4,i=1;i<=subTitleBlockNumber;i++)subTitleToggleString+='<div class="block'+i+'"></div>';subTitleToggleString='<div id="subTitleToggle">'+subTitleToggleString+"</div>";var currentH2=decodeURI(url.substring(url.indexOf("#")+1));currentH2=currentH2.replace(/\?theme=(dark)|(bright)/,""),$subTitle.each(function(){var e=getName(this.innerHTML);$(this).wrap('<a style="height: 50%; margin: 0; padding: 0; text-decoration: none; color: #000;" id="'+e+'" href="#'+e+'"></a>'),$(this).click(function(){scrollTo(e)}),this.innerHTML===currentH2&&$(this).click(),subTitleNav+='<div class="subTitleItem">'+this.innerHTML+"</div>"}),subTitleNav='<div id="subTitleNav">'+subTitleNav+'<div class="subTitleItem">返回顶部</div></div>',$("body").append(subTitleNav+subTitleToggleString);var $subTitleItem=$(".subTitleItem"),$subTitleToggle=$("#subTitleToggle"),$subTitleBlock=$("#subTitleToggle div");$subTitleItem.each(function(){var t=getName(this.innerHTML);$(this).click(function(e){scrollTo(t)})});var isLeave=!1,isShow=!1,itemInterval=50,blockInterval=100;function showBlock(e){var t=0;for(i=$subTitleBlock.length;0<=i;i--,t+=blockInterval)!function(){var e=i;setTimeout(function(){$subTitleBlock.eq(e).hide("fast")},t)}();for(i=$subTitleItem.length-1;0<=i;i--,t+=itemInterval)!function(){var e=i;setTimeout(function(){isLeave||$subTitleItem.eq(e).fadeIn(100)},t)}();isShow=!0,e.stopPropagation(),window.event.cancelBubble=!0}function hideBlock(){isLeave=!0;for(var t=0,i=0;i<$subTitleItem.length;i++,t+=itemInterval)!function(){var e=i;setTimeout(function(){$subTitleItem.eq(e).fadeOut(100)},t)}();for(i=0;i<$subTitleBlock.length;i++,t+=blockInterval)!function(){var e=i;setTimeout(function(){$subTitleBlock.eq(e).show("fast")},t)}();setTimeout(function(){isLeave=!1},$subTitleItem.length*itemInterval+$subTitleBlock.length*blockInterval),isShow=!1}$subTitleToggle.attr("title","点击显示子标题导航"),$subTitleToggle.click(showBlock),document.body.onclick=hideBlock;var showable=!0;$(window).scroll(function(){var e=$(this).scrollTop(),t=$(document).height();e+$(this).height()===t?($subTitleToggle.stop().hide("slow"),showable=!0):showable&&($subTitleToggle.stop().show("slow"),showable=!1),isShow&&hideBlock()});var preTitle="没有了",nextTitle="没有了",index=0;if("index"===currentTitle)nextTitle=items[0][0];else{var allItems=[];items.forEach(function(e){e.forEach(function(e){allItems.push(e)})}),index=allItems.indexOf(currentTitle),0!==index&&(preTitle=allItems[index-1]),index!==allItems.length-1&&(nextTitle=allItems[index+1])}preTitle=wrapByA(preTitle),nextTitle=wrapByA(nextTitle),$(".refer").after('<div id="footer" ><div class="prePage">上一篇：'+preTitle+'</div><div class="nextPage">下一篇：'+nextTitle+"</div></div>"),items.forEach(function(e,t){-1===e.indexOf(currentTitle)&&$itemHead.eq(t).click()}),"index"!==currentTitle&&setTimeout(function(){scrollTo("currentItem",$sidebar);var e=$("#currentItem > a");e.animate({"font-size":"1.25rem","font-weight":900},1e3,function(){e.animate({"font-size":"1rem","font-weight":"bold"},1e3)})},500);var mask=document.createElement("div"),imgContainer=document.createElement("div");imgContainer.style.position="relative",mask.style.position="fixed",imgContainer.style.top=mask.style.top="0",imgContainer.style.right=mask.style.right="0",imgContainer.style.bottom=mask.style.bottom="0",imgContainer.style.left=mask.style.left="0",mask.style.opacity=".8",mask.style.backgroundColor="#000",imgContainer.style.display=mask.style.display="none",imgContainer.style.overflow="auto",document.body.appendChild(mask),document.body.appendChild(imgContainer),$("#container figure>img").each(function(){var t=$(this);t.click(function(){var e=document.createElement("img");e.style.position="fixed",e.style.left="50%",e.style.top="50%",e.style.transform="translateX(-50%) translateY(-50%)",e.src=t.attr("src"),imgContainer.style.display=mask.style.display="block",e.onclick=function(){imgContainer.removeChild(e),imgContainer.style.display="none",mask.style.display="none"},imgContainer.appendChild(e)})});var dir=$("#catalogFrame img");dir.click(function(){var e=$(this).next().next();console.dir(e),void 0!==e&&"DIV"===e.prop("tagName")&&e.toggle(500)}),$("table").attr({border:1,cellpadding:1,cellspacing:0}),$("table").each(function(){$(this).parent().css("overflow","auto")})});