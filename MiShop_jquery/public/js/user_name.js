if (document.cookie == "") {
  $("#gwc").click(function () {
    alert("您还未登录")
  })
  $("#grzx").click(function () {
    alert("您还未登录")
  })
} else {
  $("#login")[0].text = document.cookie;
  $("#login")[0].href = "user_info.html";
  $("#grzx")[0].href = "user_info.html";
  $("#gwc")[0].href = "cart.html";
}