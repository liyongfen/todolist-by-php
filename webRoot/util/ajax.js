function getXMLHttpRequest() {  
  var xhr;  
  if(window.ActiveXObject) {  
    xhr = new ActiveXObject("Microsoft.XMLHTTP");  
  }else if (window.XMLHttpRequest) {  
    xhr = new XMLHttpRequest();  
  }else {  
    xhr = null;  
  }  
  return xhr;  
}    
/*
*data = 'id=1122&name="liyongfen"'
*/
function ajax(method,url,data,callback) {  
  var xhr = getXMLHttpRequest(); 
  if(method == 'post' || method == 'POST'){
    xhr.open(method,url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded'); 
    xhr.send(data);  
  }else if(method == 'get' || method == 'GET'){
     xhr.open(method,url + '?' + data,true);
     xhr.send(); 
  }  
  xhr.onreadystatechange = function() {  
    if(xhr.readyState == 4 && xhr.status == 200) {  
      //console.log(xhr.responseText);
      callback(xhr.responseText);  
    }  
  }
} 


