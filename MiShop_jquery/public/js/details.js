// top-商品导航
$(function () {
  $.ajax({
    url: "/ajax/list_title",
    type: "get",
    dataType: "json",
    success: result => {
      var textHTML = "";
      for (var i = 0; i < result.length; i++) {
        textHTML += `<li><a href="${result[i].href}" target="_blank">${result[i].title}</a></li>`
      }
      nav_list.innerHTML = textHTML + `<div class="clear"></div>`
    }
  })
  $.ajax({
    url: "/ajax/product_details",
    type: "get",
    dataType: "json",
    success: result => {
      $("#jieshao").html(`
          <div class="left fl"><img id="p1_pic" src="${result[0].pic}"></div>
        <div class="right fr">
          <div class="h3 ml20 mt20">${result[0].dname}</div>
          <div class="jianjie mr40 ml20 mt10">${result[0].d_info}</div>
          <div class="jiage ml20 mt10">${result[0].price}元</div>
          <div class="ft20 ml20 mt20">选择版本</div>
          <div class="xzbb ml20 mt10">
            <div class="banben fl">
              <a onclick="checkad1()">
                <span>${result[0].versions}</span>
                <span>${result[0].price}元</span>
              </a>
            </div>
            <div class="banben fr">
              <a onclick="checkad2()">
                <span>${result[1].versions}</span>
                <span>${result[1].price}元</span>
              </a>
            </div>
            <div class="clear"></div>
          </div>
          <div class="ft20 ml20 mt20">选择颜色</div>
          <div class="xzbb ml20 mt10">
            <div class="banben">
              <a>
                <span class="yuandian"></span>
                <span class="yanse">${result[0].color}</span>
              </a>
            </div>
          </div>
          <div class="xqxq mt20 ml20">
            <div class="top1 mt10">
              <div class="left1 fl" id="p1_title">${result[0].versions}</div>
              <div class="right1 fr" id="p1_price">${result[0].price}元</div>
              <div class="clear"></div>
            </div>
            <div class="bot mt20 ft20 ftbc">总计：${result[0].price}元</div>
          </div>
          <div class="xiadan ml20 mt20">
            <input class="jrgwc" type="button" name="jrgwc" value="立即选购" />
            <input class="jrgwc" type="button" onclick="addproduct()" name="jrgwc" value="加入购物车" />
          </div>
        </div>
        <div class="clear"></div>
          `)
    }
  })
})
function checkad1() {
  $xq = $(".xqxq")
  $xq.html(`
      <div class="top1 mt10">
        <div class="left1 fl" id="p1_title">全网通版 6GB+64GB</div>
        <div class="right1 fr" id="p1_price">2499元</div>
        <div class="clear"></div>
        </div>
        <div class="bot mt20 ft20 ftbc">总计：2499元</div>`)
}

function checkad2() {
  $xq = $(".xqxq")
  $xq.html(`
        <div class="top1 mt10">
          <div class="left1 fl" id="p1_title">全网通版 6GB+128GB</div>
          <div class="right1 fr" id="p1_price">2899元</div>
          <div class="clear"></div>
          </div>
          <div class="bot mt20 ft20 ftbc">总计：2899元</div>`
  )
}

function addproduct() {
  var $pic = p1_pic.src;
  var $title = p1_title.innerHTML;
  var $price = p1_price.innerHTML;
  var $order_time = new Date().toLocaleDateString()
  $.ajax({
    url: "/ajax/cart",
    type: "post",
    data:{
      pic:$pic,
      title:$title,
      price:$price,
      order_time:$order_time
    },
    dataType: "json",
    success: (result) => {
      if (result) {
        alert("添加成功")
      } else {
        alert("添加失败")
      }
    }
  })
}