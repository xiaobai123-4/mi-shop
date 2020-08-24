// top导航
var left_get = function () {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      var arr = JSON.parse(result)
      var textHTML = "";
      for (var i = 0; i < arr.length - 1; i++) {
        textHTML += `<li><a href="${arr[i].href}">${arr[i].title}</a></li>
						<li>|</li>`
      }
      left_title.innerHTML = textHTML + `<li><a href="">Select Region</a></li>`
    }
  }
  xhr.open("get", "/ajax/left_title", true);
  xhr.send();
}
// top-商品导航
var lt_get = function () {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      var arr = JSON.parse(result)
      var textHTML = "";
      for (var i = 0; i < arr.length; i++) {
        textHTML += `<li><a href="${arr[i].href}" target="_blank">${arr[i].title}</a></li>`
      }
    }
    nav_list.innerHTML = textHTML + `<div class="clear"></div>`
  }
  xhr.open("get", "/ajax/list_title", true);
  xhr.send();
};


var prouct = function () {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      var arr = JSON.parse(result);
      var textHTML = ""
      for (var i = 0; i < arr.length; i++) {
        textHTML += `
						<div class="product fl mb20" style="border:2px solid #fff;width:230px;cursor:pointer;"
					onmouseout="this.style.border='2px solid #fff'" onmousemove="this.style.border='2px solid red'">
					<div class="sub_product"><a href="${arr[i].href}" target="_blank"><img src="${arr[i].pic}"
								alt=""></a></div>
					<div class="pinpai"><a href="" target="_blank">${arr[i].title}</a></div>
					<div class="youhui">${arr[i].l_title}</div>
					<div class="jiage">${arr[i].price}元</div>
				</div>`
      }
      pd_item.innerHTML = textHTML + `<div class="clear"></div>`
    }
  }
  xhr.open("get", "ajax/product_list", true);
  xhr.send();
}
var getName = function () {
  if (document.cookie == "") {
    console.log("你还没有光顾我的Mishop")
  } else {
    login.href = "user_info.html"
    login.innerHTML = document.cookie
  }
}

function product_list() {
  left_get()
  lt_get()
  prouct()
  getName()
}