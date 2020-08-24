var state = false
function checkname() {
  uname_msg.innerHTML = "输入6-12位字符或数字"
}
function showname() {
  var reg = /^[\w]{6,12}$/;
  if (!uname.value) {
    uname_msg.innerHTML = "用户名不能为空"
  } else if (!reg.test(uname.value)) {
    uname_msg.innerHTML = "用户名格式不正确"
    state = false
    return
  } else {
    uname_msg.innerHTML = "这个名字真不错"
    state = true
  }
}
function checkupwd() {
  upwd_msg.innerHTML = "输入6-12位字符或数字"
}
function showupwd() {
  var reg = /^[\w]{6,8}$/;
  if (!upwd.value) {
    upwd_msg.innerHTML = "密码不能为空"
  } else if (!reg.test(upwd.value)) {
    upwd_msg.innerHTML = "密码格式错误"
    state = false
    return
  } else {
    upwd_msg.innerHTML = "这个密码将无法被破解"
    state = true
  }
}
function showyzm() {
  var reg = /^[r][m][c][c]$/;
  if (!reg.test(yzm.value)) {
    yzm_msg.innerHTML = "验证码输入错误"
    state = false
    return
  } else {
    yzm_msg.innerHTML = "验证码正确"
    state = true
    return
  }
}
function login() {
  if (state) {
    document.cookie = uname.value
    alert("登陆成功")
  } else {
    alert("用户名不存在或者填写信息错误")
  }
}