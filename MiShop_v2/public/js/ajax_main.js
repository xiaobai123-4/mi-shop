// url:要请求的URL地址
// type:不同的请求类型
// callback:自定义函数，等响应回来之后执行
// data:要发送的参数，要求必须是：
// "变量1=值&变量2=值"，不能带问号，必须是字符串
function ajax(url, type,callback, data) {
  var xhr = new XMLHttpRequest();
  xhr.open(type, url, true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = JSON.parse(xhr.responseText)
      // 自定义代码
      callback(result)
    }
  }
  // get请求带参数
  if (type == "get" && data !== undefined) {
    url += "?" + data;
  }
  // post、put请求
  if (type == "post" || type=="put") {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  }
  if (type == "post" || type=="put") {
    xhr.send(data)
  } else {
    xhr.send();
  }
}