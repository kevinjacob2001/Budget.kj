//BUDGET CONTROLLER
var budgetController = (function () {

  //some code
})();



//UI CONTROLLER
var UIController = (function () {

return{

  getinput:function(){
    var type=document.querySelector(".add__type").value; //will be either inc or exp
   var description=document.querySelector(".add__description").value;
   var value=document.querySelector(".add__value").value;
  
   }
}

  //some code
})();


//MAIN CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  
  var ctrlAddItem=function(){
   
 //1.get field input data
   
 //2.add itm to budget controller
 
 //3.add item to user interface
 
 //4. calculate budget
 
 //5. display budget
 
}
  
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem)
 
  document.addEventListener("keypress", function (e) {

    if (e.keyCode === 13 || e.which===13) { 

      ctrlAddItem();

    }
  })




})(budgetController, UIController);


