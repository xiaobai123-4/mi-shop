var uname = document.cookie;
$(function(){
  $.ajax({
    url:"/ajax/user_info/" + uname,
    type:"get",
    dataType:"json",
    success:(result)=>{
      unames.innerHTML = result[0].uname
      phone.innerHTML = result[0].phone
      upwd.innerHTML = "*******"
      qianming.value = result[0].qianming || "什么都没说"
      hobby.value = result[0].hobby || "什么都没说"
      addres.value = result[0].addres || "什么都没说"
    }
  })
})

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

  $.ajax({
    url:"/ajax/user_info/qm",
    type:"put",
    data:{
      qianming:$qianming,
      uname:$uname
    },
    dataType:"json",
    success:function(result){
      console.log(result)
      if (result == 1) {
        alert = "修改成功"
        qianming.disabled = true;
      } else {
        alert = "修改失败"
      }
    }
  })
}

function okhob() {
  var $hobby = hobby.value;
  var $uname = uname;
  $.ajax({
    url:"/ajax/user_info/ah",
    type:"put",
    data:{
      hobby:$hobby,
      uname:$uname
    },
    dataType:"json",
    success:function(result){
      console.log(result)
      if (result == 1) {
        alert = "修改成功"
        hobby.disabled = true;
      } else {
        alert = "修改失败"
      }
    }
  })
}

function okads() {
  var $addres = addres.value;
  var $uname = uname;
  $.ajax({
    url:"/ajax/user_info/dz",
    type:"put",
    data:{
      addres:$addres,
      uname:$uname
    },
    dataType:"json",
    success:function(result){
      console.log(result)
      if (result == 1) {
        alert = "修改成功"
        hobby.disabled = true;
      } else {
        alert = "修改失败"
      }
    }
  })
}