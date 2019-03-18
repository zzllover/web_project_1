
# button禁用

document.getElementById(“button1”).setAttribute(“disabled”,”true”);
document.getElementById(“button1”).disabled=true;

Readonly只针对input(text/password)和textarea有效，而disabled对于所有的表单元素有效，包括select,radio,checkbox,button等。