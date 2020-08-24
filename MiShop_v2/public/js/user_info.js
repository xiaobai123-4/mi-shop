var getName = function () {
  if (document.cookie == "") {
    console.log("你还没有光顾我的Mishop")
  } else {
    login.href = "user_info.html"
    login.innerHTML = document.cookie
  }
}
var uname = document.cookie;

function userinfo() {
  getName()
  // 获取数据
  ajax("/ajax/user_info/" + uname, "get", result => {
    unames.innerHTML = result[0].uname
    phone.innerHTML = result[0].phone
    upwd.innerHTML = "*******"
    qianming.value = result[0].qianming || "什么都没说"
    hobby.value = result[0].hobby || "什么都没说"
    addres.value = result[0].addres || "什么都没说"
  });
}

// 修改信息
function setqm() {
  qianming.disabled = false;
}
function sethob() {
  hobby.disabled = false;
}
function setads() {
  addres.disabled = false;
}
function okqm() {
  var $qianming = qianming.value;
  var $uname = uname;
  ajax("/ajax/user_info/qm","put",result=>{
    if (result == 1) {
      alert = "修改成功"
      qianming.disabled = true;
    } else {
      alert = "修改失败"
    }
  },`qianming=${$qianming}&uname=${$uname}`)
}

function okhob() {
  var $hobby = hobby.value;
  var $uname = uname;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      if (result == 1) {
        alert = "修改成功"
        hobby.disabled = true;
      } else {
        alert = "修改失败"
      }
    }
  }
  xhr.open("put", "/ajax/user_info/ah", true)
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  var formdata = `hobby=${$hobby}&uname=${$uname}`
  xhr.send(formdata);
}

function okads() {
  var $addres = addres.value;
  var $uname = uname;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;
      if (result == 1) {
        alert = "修改成功"
        addres.disabled = true;
      } else {
        alert = "修改失败"
      }
    }
  }
  xhr.open("put", "/ajax/user_info/dz", true)
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  var formdata = `addres=${$addres}&uname=${$uname}`
  xhr.send(formdata);
}