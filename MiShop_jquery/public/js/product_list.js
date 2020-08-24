// top-商品导航
$(function () {
  $.ajax({
    url: "/ajax/list_title",
    type: "get",
    dataType: "json",
    success: (result)=>{
      var textHTML = "";
      for (var i = 0; i < result.length; i++) {
        textHTML += `<li><a href="${result[i].href}" target="_blank">${result[i].title}</a></li>`
      }
      $("#nav_list").html(textHTML + `<div class="clear"></div>`);
    }
  })
  // 商品详情
  $.ajax({
    url: "ajax/product_list",
    type: "get",
    dataType: "json",
    success: (result)=>{
      var textHTML = ""
      for (var i = 0; i < result.length; i++) {
        textHTML += `
          <div class="product fl mb20" style="border:2px solid #fff;width:230px;cursor:pointer;"
        onmouseout="this.style.border='2px solid #fff'" onmousemove="this.style.border='2px solid red'">
        <div class="sub_product"><a href="${result[i].href}" target="_blank"><img src="${result[i].pic}"
              alt=""></a></div>
        <div class="pinpai"><a href="" target="_blank">${result[i].title}</a></div>
        <div class="youhui">${result[i].l_title}</div>
        <div class="jiage">${result[i].price}元</div>
      </div>`
      }
      $("#pd_item").html(textHTML + `<div class="clear"></div>`)
    }
  })
})