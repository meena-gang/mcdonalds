let odNo=0;
const getSelectedItems = () => {
   let checkboxes =document.querySelectorAll(".food")
   let items=[];
   checkboxes.forEach(function(checkbox){
    if(checkbox.checked)
      items.push(checkbox.value);
   })
   return items;
  }
// accepts selected items from the menu as an array
const orderFood = (items) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let orderedItems = document.getElementById("ordered-items");
      orderedItems.innerHTML = "";
      // console.log(orderedItems);

      let ul = document.createElement('ul');
      ul.innerHTML="";

      items.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML='';
        li.setAttribute("id", "food-item");
        li.textContent = item;
        ul.appendChild(li);
      });
      ++odNo;
      let orderId = `order: ${odNo}`;
      document.getElementById("order-id").textContent = orderId;
      let orderdItems = document.getElementById("ordered-items")
      orderdItems.innerHTML="";
      orderdItems.append(ul)
      resolve();
    }, (Math.random()) * 1000);
  });
};
window.onload = function () {
  //  get the buttons here and add click event
  let button = document.querySelector("button");
  button.addEventListener("click",function(){
    let items = getSelectedItems();
  orderFood(items).then(function(data){
   })
  })
};
// donot chnage the export statement
if (typeof exports !== "undefined") {
  module.exports = {
    orderFood
  };
}