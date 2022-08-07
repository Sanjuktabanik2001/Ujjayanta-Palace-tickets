let adults;
let children;
let price;
price=adults*20 + children*10;
if(adults < 0) {
  adults = 0;
} 
if(children < 0) {
  children = 0;
} 
for(let i=1;i<=adults;i++){
  console.log("Tickets#" + i)
}
function calc(adults,children){
  price=calc(adults,children);
  return price;
}
console.log(adults,children);
window.onload = function() {
  let btn = document.getElementById("buyBtn");
  btn.onclick = function() {
    let adults = document.getElementById("adults").value;
    let children = document.getElementById("children").value;
    let price = calc(adults, children);
    alert(price);
  }
}
