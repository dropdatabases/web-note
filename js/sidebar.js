$(function() {
    function surroundedByTag(source, tag) {
        if (tag === 'a') {
            return '<a href="./' + source + '.html">' + source + '</a><br>';
        } else {
            return '<' + tag + '>' + source + '</' + tag + '>';
        }
    }
    // 获得视窗大小
    function getViewport(target) {
        // 使用指定窗口，默认使用当前窗口
        target = target || window;
        // 以此检查 IE8及以前-> 标准模式 -> 怪异模式
        var width = window.innnerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        return {
            'width': width,
            'height': height
        };
    }
    var $sidebar = $('#sidebar'); // 导航条
    var $catalog = $('#catalog'); // 目录
    var $hideCatalog = $('#hideCatalog'); // 隐藏目录图片
    var $showCatalog = $('#showCatalog'); // 显示目录图片
    var $title = $('#title'); // 文章标题
    var $container = $('#container'); // 文章内容
    var category = ['HTML', 'CSS', 'Javascript', '移动Web', '调试', '协议', '安全', '后端', '其他']; // 目录分类
    var items = [
        ['meta标签', 'href和src', 'link', 'script', 'HTML语义化', 'HTML5'],
        ['选择器', '盒式模型', '元素种类', '元素定位', '元素居中', '伪类伪元素', '格式化上下文', 'CSS Hack', 'CSS3', 'CSS怪异现象', '颜色和长度'],
        ['作用域链', '原型链', '闭包', '事件', '同源策略', '字符编码', 'JSONP', 'this'],
        ['响应式布局', 'bootstrap'],
        ['抓包工具', 'chrome devtools'],
        ['HTTP'],
        ['CSRF', 'XSS'],
        ['Thinkphp5.1', 'htaccess'],
        ['浏览器渲染', '设计策略', 'cookie']
    ];
    for (var i = 0; i < category.length; i++) {
        $sidebar.append(surroundedByTag(category[i], 'h3'));
        for (var j = 0; j < items[i].length; j++) {
            $sidebar.append(surroundedByTag(surroundedByTag(items[i][j], 'a'), 'div'));
        }
    }
    // 具体条目
    var $itemLink = $('#sidebar>div>a');
    /*
    侧栏结构：
    <aside id="sidebar">
    	<section id="catalog">
    		<img id="hideCatalog">
    		目录
    		<h3>类别</h3>
    		<div><a>条目</a></div>
    	</section>
    </aside>
    */
    // 绘制直线
    var lineLength = getViewport().width / 3;
    $title.after('<svg style="display: block; margin: auto; width:' + lineLength + 'px" xmlns="http://www.w3.org/2000/svg" version="1.1" height="1px"><path id="line" d="M 0 0 L ' + lineLength + ' 0" style="stroke: #000; stroke-width: 1; stroke-dasharray: ' + lineLength + '; stroke-dashoffset: ' + lineLength + '; fill: none;"/></svg>');
    var $line = $('#line');
    // 文章标题事件
    $title.mouseover(function(event) {
        $title.animate({
                'padding-top': '1%',
                'padding-bottom': '1%'
            },
            'fast');
        $line.animate({
            'stroke-dashoffset': 0
        }, 'fast');
    });
    $title.mouseout(function(event) {
        $title.animate({
                'padding-top': '0',
                'padding-bottom': '0'
            },
            'fast');
        $line.animate({
            'stroke-dashoffset': lineLength
        }, 'fast');
    });

    function widthAndMargin(start, end, piece, time) {
        // width: start% -> end%
        // margin: 0 4% -> 0 5%
        // piece: 动画分段数量（关键帧数量）
        // time：动画时长（s，秒）
        var valInc = (end - start) / piece;
        var timeInc = time * 1000 / piece;
        var widthStart, widthInc;
        if (start < end) {
        	widthStart = 4;
        	widthInc = 1 / piece;
        } else {
        	widthStart = 5;
        	widthInc = - 1 / piece;
        }
        for (var i = start, delay = 0; i != end; i += valInc, widthStart +=  widthInc,delay += timeInc) {
            (function() {
                var percentage = i + '%';
                var margin = '0 ' + widthStart + '%';
                setTimeout(function() {
                    $container.css({
                        'width': percentage,
                        'margin': margin
                    });
                }, delay);
            })();
        }
        // 进行最后一次更新
        setTimeout(function() {
        	widthStart += widthInc;
            $container.css({
                'width': end + '%',
                'margin': '0 ' + widthStart + '%'
            });
        }, time * 1000);
    }
    // 折叠目录
    $hideCatalog.click(function(event) {
        $sidebar.animate({ // 侧栏隐藏
            'width': '0',
            'padding': '0'
        }, 'slow', function() {
            $sidebar.css('display', 'none');
            // 允许重新展开侧栏
            $showCatalog.css('display', 'block');
        });
        widthAndMargin(65, 90, 25, 1);
        // 阻止事件冒泡：
        event.stopPropagation(); // 非IE
        window.event.cancelBubble = true; // IE
    });

    // 展开目录
    $showCatalog.click(function(event) {
        var width = getViewport().width;
        var padding;
        // 如果视窗大小小于 400 px
        if (width < 400) {
            width = '100%';
            padding = '0';
        } else {
            width = '25%';
            padding = '1%';
        }
        $sidebar.css('display', 'inline-block');
        $showCatalog.css('display', 'none');
        $sidebar.animate({
                'width': width,
                'padding': padding
            },
            'slow');
		widthAndMargin(90, 65, 20, 0.5);
    });

    $('a').attr('target', '_blank'); // 所有链接默认新标签打开
    var $subTitle = $('#container>section>h2'); // 一级子标题
    // 点击后子标题置顶到窗口
    $subTitle.each(function() {
        var name = this.innerHTML.replace(/[\s@#]/g, '');
    	// $(this).html('<a height="50%" id="' + name + '" href="#' + name + '">' + name + '</a>');
        // 子标题包裹为超链接
        $(this).wrap('<a style="height: 50%; margin: 0; padding: 0; text-decoration: none; color: #000;" id="' + name + '" href="#' + name + '"></a>');
        // 点击后滑动窗口
        $(this).click(function(event) {
            $('html, body').animate({scrollTop: $('#' + name).offset().top}, 500);
        });
    });
    // 按照视窗大小定义 html 字体大小
    function getRootFontSize() {
        var width = window.innnerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width > 1200) {
            return 16;
        }
        if (width > 800) {
            return 14;
        }
        if (width > 400) {
            return 12;
        }
        return 10;
    }
    $('html').eq(0).css('font-size', getRootFontSize());
});
