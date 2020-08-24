function index() {
  // top导航
  ajax(
    "/ajax/left_title", "get",
    result => {
      var textHTML = "";
      for (var i = 0; i < result.length - 1; i++) {
        textHTML += `<li><a href="${result[i].href}">${result[i].title}</a></li>
      <li>|</li>`
      }
      left_title.innerHTML = textHTML + `<li><a href="">Select Region</a></li>`
    }
  );
  // top-商品导航
  ajax(
    "/ajax/list_title", "get",
    result => {
      var textHTML = "";
      for (var i = 0; i < result.length; i++) {
        textHTML += `<li><a href="${result[i].href}" target="_blank">${result[i].title}</a></li>`
      }
      nav_list.innerHTML = textHTML + `<div class="clear"></div>`
    }
  )
  // left-class
  ajax(
    "/ajax/class_title", "get",
    result => {
      var textHTML = "";
      for (var i = 0; i < 20;) {
        textHTML +=
          `
      <li id="class_title">
      <div>
        <a href="">${result[0].title}</a>
        <a href="">${result[i + 1].title}</a>
      </div>
      <div class="pop"></div>
    </li>
      `
        i += 2;
      }
      class_title.innerHTML += textHTML
    }
  )
  // left-导航
  ajax(
    "/ajax/mclass", "get",
    result => {
      var pops = document.querySelectorAll(".pop")
      var left = "";
      var center = "";
      var right = "";
      for (var i = 0; i < result.length; i++) {
        if (i <= 5) {
          left += `					
        <div>
          <div class="xuangou_left fl">
            <a href="${result[i].href}">
              <div class="img fl"><img src="${result[i].pic}" alt=""></div>
              <span class="fl">${result[i].dname}</span>
              <div class="clear"></div>
            </a>
          </div>
          <div class="xuangou_right fr"><a href="${result[i].href}" target="_blank">选购</a></div>
          <div class="clear"></div>
        </div>
      `
        } else {
          center += `					
        <div>
          <div class="xuangou_left fl">
            <a href="">
              <div class="img fl"><img src="${result[i].pic}" alt=""></div>
              <span class="fl">${result[i].dname}</span>
              <div class="clear"></div>
            </a>
          </div>
          <div class="xuangou_right fr"><a href="${result[i].href}" target="_blank">选购</a></div>
          <div class="clear"></div>
        </div>
      `
        }
      }
      right += `
    <div>
      <div class="xuangou_left fl">
        <a href="">
          <div class="img fl"><img src="./image/compare.jpg" alt=""></div>
          <span class="fl">对比手机</span>
          <div class="clear"></div>
        </a>
      </div>
      <!-- <div class="xuangou_right fr"><a href="">选购</a></div> -->
      <div class="clear"></div>
    </div>
    <div>
      <div class="xuangou_left fl">
        <a href="">
          <div class="img fl"><img src="./image/mimobile.jpg" alt=""></div>
          <span class="fl">小米移动&nbsp;电话卡</span>
          <div class="clear"></div>
        </a>
      </div>
      <!-- <div class="xuangou_right fr"><a href="">选购</a></div> -->
      <div class="clear"></div>
    </div>
  `;
      for (var i = 0; i < pops.length; i++) {
        pops[i].innerHTML +=
          `<div class="left fl">` + left + `</div><div class="ctn fl">` + center + `</div><div class="right fl">` +
          right +
          `</div><div class="clear"></div>`
      }
    }
  )
  // 明星单品
  ajax(
    "/ajax/star", "get",
    result => {
      var textHTML = "";
      for (var i = 0; i < result.length; i++) {
        textHTML += `<div class="mingxing fl">
    <div class="sub_mingxing"><a href="${result[i].href}"><img src="${result[i].pic}" alt=""></a></div>
    <div class="pinpai"><a href="">${result[i].dname}</a></div>
    <div class="youhui">${result[i].title}</div>
    <div class="jiage">${result[i].price}元</div>
  </div>`
      }
      star_list.innerHTML = textHTML + `<div class="clear"></div>`
    }
  )
  // 配件
  ajax(
    "/ajax/class", "get",
    result => {
      var textHTML1 = "";
      var textHTML2 = "";
      peijian_class.innerHTML = result[0].p_class
      floor1.innerHTML = `<div class="remen fl"><a href=""><img src="./image/peijian1.jpg"></a></div>`
      floor2.innerHTML = `<div class="remen fl"><a href=""><img src="./image/peijian6.jpg"></a></div>`
      for (var i = 0; i < result.length; i++) {
        if (i <= 3) {
          textHTML1 += `<div class="remen fl">
      <div class="xinpin"><span>新品</span></div>
      <div class="tu"><a href=""><img src="${result[i].pic}"></a></div>
      <div class="miaoshu"><a href="">${result[i].title}</a></div>
      <div class="jiage">${result[i].price}元</div>
      <div class="pingjia">${result[i].pj}人评价</div>
      <div class="piao">
        <a href="">
          <span>发货速度很快！很配小米6！</span>
          <span>来至于mi狼牙的评价</span>
        </a>
      </div>
    </div>`
        } else {
          textHTML2 += `<div class="remen fl">
      <div class="xinpin"><span>新品</span></div>
      <div class="tu"><a href=""><img src="${result[i].pic}"></a></div>
      <div class="miaoshu"><a href="">${result[i].title}</a></div>
      <div class="jiage">${result[i].price}元</div>
      <div class="pingjia">${result[i].pj}人评价</div>
      <div class="piao">
        <a href="">
          <span>发货速度很快！很配小米6！</span>
          <span>来至于mi狼牙的评价</span>
        </a>
      </div>
    </div>`
        }
      }
      textHTML1 += `<div class="clear"></div>`;
      textHTML2 += `<div class="remenlast fr">
      <div class="hongmi"><a href=""><img src="./image/hongmin4.png" alt=""></a></div>
      <div class="liulangengduo"><a href=""><img src="./image/liulangengduo.png" alt=""></a></div>
    </div>
    <div class="clear"></div>`;
      floor1.innerHTML += textHTML1
      floor2.innerHTML += textHTML2
    }
  );
}
var getName = function () {
  if (document.cookie == "") {
    console.log("你还没有光顾我的Mishop")
  } else {
    login.href = "user_info.html"
    login.innerHTML = document.cookie
  }
}()