$(function () {
  // top导航
  $.ajax({
    url: "/ajax/left_title",
    type: "get",
    success: function (result) {
      var textHTML = "";
      for (var i = 0; i < result.length - 1; i++) {
        textHTML += `<li><a href="${result[i].href}">${result[i].title}</a></li>
        <li>|</li>`
      }
      $("#left_title").html = textHTML + `<li><a href="">Select Region</a></li>`
    }
  })
  // 引入header
  $.ajax({
    url: "header.html",
    type: "get",
    success: function (result) {
      $(result).replaceAll("#header")
    }
  })
})