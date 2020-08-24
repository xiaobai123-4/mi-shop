$(function () {
  $.ajax({
    url: "/ajax/cart_item",
    type: "get",
    dataType: "json",
    success: (result) => {
      var htmlText = ""
      for (var i = 0; i < result.length; i++) {
        htmlText += `
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
            </div>`
      }
      $("#cart_items").html(htmlText)
      $("#jiesuan").html(`<div class="jiesuanjiage fl">合计（不含运费）：<span id="close_price">0元</span></div>
            <div class="jsanniu fr"><a href="404.html"><input class="jsan" type="submit" name="jiesuan" value="去结算" /></a></div>
            <div class="clear"></div>`)
    }
  })
})
$("#cart_items").on("click","button",function(){
  var $btns=$(this).parent()
  var $price_all=$btns.next()
  var $price=$btns.prev()
  var price=$price.text().replace(/元/ig, "")
  console.log($price_all.text().replace(/元/ig, ""))
  var n = parseInt($btns.children("span").text());
  if ($(this).html() == "+") {
    ++n;
    $btns.children("span").text(n)
  } else if (n > 1) {
    --n;
    $btns.children("span").text(n)
  }
  $price_all.text(price*n+"元")
})
// 删除
function del($oid) {
  $.ajax({
    url: "/ajax/del_cart_item/" + $oid,
    type: "delete",
    dataType: "json",
    success: (result) => {
      if (result == 1) {
        alert("删除成功")
        window.location.reload();
      }
    }
  })
}
$("#login")[0].text = document.cookie;
$("#login")[0].href = "user_info.html";