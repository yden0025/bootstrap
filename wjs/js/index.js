// 触屏轮播图
touchBanner();

// 给ul设置宽度
setWidth();

//实现触屏轮播图
// 1-触屏开始 记录起始位置 ，停止定时器
// 2-触屏移动 记录移动后位置， 计算距离差值
// 3-触屏结束 判断用户滑动方向 ,切换轮播图
function touchBanner() {
  var startX = 0;
  var moveX = 0;
  var distanceX = 0;
  var banner = $(".wjs-banner");

  banner.on("touchstart", function (e) {
    // console.log(e.originalEvent);  获取元素dom事件对象
    // 停止定时器
    $(".carousel").carousel("pause");
    // 记录其实位置 ，
    startX = e.originalEvent.targetTouches[0].clientX;
    console.log(startX);
  });
  banner.on("touchmove", function (e) {
    // 记录移动后位置， 计算距离差值
    moveX = e.originalEvent.targetTouches[0].clientX;
    distanceX = moveX - startX;
    console.log(distanceX);
  });

  banner.on("touchend", function (e) {
    // 判断用户滑动方向 ,切换轮播图
    if (distanceX > 0) {
      //右滑 上一张
      $(".carousel").carousel("prev");
    }

    if (distanceX < 0) {
      //左滑 下一张
      $(".carousel").carousel("next");
    }

    //数据重置
    startX = 0;
    moveX = 0;
    distanceX = 0;

    //定时器继续执行
    $(".carousel").carousel("cycle");
  });
}

// 累加所有产品模块导航 li长度，赋值给ul
// jq获取各种宽度
// width();             content
// innerWidth();        content+padding
// outerWidth();        conent+padding+border
// outerWidth(true);    content+padding+border+margin
function setWidth() {
  var w = 0; // 存储累加长度
  $(".wjs-tabs li").each(function (index, ele) {
    w += $(ele).outerWidth(true);
  });
  console.log(w);
  // 设置
  $(".wjs-tabs").width(w);
}
