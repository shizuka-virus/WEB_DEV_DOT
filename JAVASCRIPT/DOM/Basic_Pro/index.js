document.body.onload=addElement;
function addElement(){
    let newdiv = document.createElement("div");
    let content = document.createTextNode("Hello, I am Virus");
    newdiv.appendChild(content);
    let cm = document.getElementById("div1");
    document.body.insertBefore(newdiv,cm) 
}