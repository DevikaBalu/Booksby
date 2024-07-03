var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")
var plusbtn=document.getElementById("plusbtn")
plusbtn.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
})

var cancel=document.getElementById("cancel")

function can(event){
    event.preventDefault()
    overlay.style.display="none"
    popup.style.display="none"

}
var container=document.querySelector(".container")
var title=document.getElementById("title")
var author=document.getElementById("author")
var desc=document.getElementById("desc")
var add=document.getElementById("add")
function addbtn(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","box-container")
    div.innerHTML=`<h2>${title.value}</h2>
    <h4>${author.value}</h4>
    <p>${desc.value}</p>
    <button id="del" onclick="delet(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popup.style.display="none"
}

var del=document.getElementById("del")
function delet(event)
{
   event.target.parentElement.remove()
}
