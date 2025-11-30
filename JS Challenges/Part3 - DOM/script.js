const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.addEventListener("click", function(){
    msg.textContent = "New Text";
});