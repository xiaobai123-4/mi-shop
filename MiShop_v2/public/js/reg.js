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
  } else {
    uname_msg.innerHTML = "这个名字真不错"
    state = true
  }
}
function checkphone() {
  phone_msg.innerHTML = "留下您的电话吧"
}

function showphone() {
  var reg = /^1[3456789]\d{9}$/;
  if (!phone.value) {
    phone_msg.innerHTML = "用户名不能为空"
  } else if (!reg.test(phone.value)) {
    phone_msg.innerHTML = "电话是11位哦"
  } else {
    phone_msg.innerHTML = "电话记下咯"
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
  } else {
    upwd_msg.innerHTML = "这个密码将无法被破解"
    state = true
  }
}

function checkreupwd() {
  reupwd_msg.innerHTML = "两次密码要输入一致哦"
}

function showreupwd() {
  if (reupwd.value === upwd.value) {
    reupwd_msg.innerHTML = "这个密码将无法被破解"
    state = true
  } else {
    reupwd_msg.innerHTML = "密码输入不一致"
  }
}

function showyzm() {
  var reg = /^[r][m][c][c]$/;
  if (!reg.test(yzm.value)) {
    yzm_msg.innerHTML = "验证码输入错误"
  } else {
    yzm_msg.innerHTML = "验证码正确"
    state = true
  }
}

function reg() {
  if (state) {
    document.cookie = uname.value
    alert("注册成功")
  } else {
    alert("注册失败")
  }
}