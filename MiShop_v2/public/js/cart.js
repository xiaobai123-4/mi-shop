function cart() {
  ajax("/ajax/cart_item", "get", result => {
    for (var i = 0; i < result.length; i++) {
      cart_items.innerHTML += `
					<div class="content2 center">
						<div class="sub_content fl ">
							<input type="checkbox" class="check" />
						</div>
						<div class="sub_content fl"><img src="./image/gwc_xiaomi6.jpg"></div>
						<div class="sub_content fl ft20">${result[i].title}</div>
						<div class="sub_content fl">${result[i].price}元</div>
						<div class="sub_content number fl">
								<button class="btn">-</button>
								<span>1</span>
								<button class="btn">+</button>
						</div>
						<div class="sub_content fl price_all">${result[i].price}元</div>
						<div class="sub_content fl"><a href="javascript:del(${result[i].oid})">×</a></div>
						<div class="clear"></div>
					</div>`;
    }
    jiesuan.innerHTML = `<div class="jiesuanjiage fl">合计（不含运费）：<span id="close_price">0元</span></div>
					<div class="jsanniu fr"><a href="404.html"><input class="jsan" type="submit" name="jiesuan" value="去结算" /></a></div>
					<div class="clear"></div>`;
    var get_price = function () {
      var item = document.getElementById("cart_items");
      var btns = item.getElementsByTagName("button");
      for (var btn of btns) {
        btn.onclick = function () {
          var span = this.parentNode.children[1];
          var n = parseInt(span.innerHTML);
          if (this.innerHTML == "+") {
            n++;
          } else if (n > 1) {
            n--;
          }
          span.innerHTML = n
          var price_all = this.parentNode.nextElementSibling
          var price = this.parentNode.previousElementSibling.innerHTML.replace(/元/ig, "")
          price_all.innerHTML = price * n + "元"
          var ps = document.querySelectorAll(".price_all");
          var total = 0
          for (var p of ps) {
            total += parseInt(p.innerHTML.replace(/元/ig, ""))
          }
          document.getElementById("close_price").innerHTML = total + "元"
        }
      }
    }()
    var chbAll = document.querySelector(".allchecked")
    var chbs = document.querySelectorAll(".check")
    chbAll.onclick = function () {
      for (var chb of chbs) {
        chb.checked = this.checked
      }
    }
    var getName = function () {
      if (document.cookie == "") {
        console.log("你还没有光顾我的Mishop")
      } else {
        login.href = "user_info.html"
        login.innerHTML = document.cookie
      }
    }()
  })
}
// 删除
function del($oid) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      if (result == 1) {
        alert("删除成功")
        window.location.reload();
      }
    }
  }
  xhr.open("delete", "/ajax/del_cart_item/" + $oid, true)
  xhr.send()
}