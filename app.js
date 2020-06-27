//BUDGET CONTROLLER
var budgetController = (function () {

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  }

  return {
    addItem: function (type, des, val) {
      var newItem, ID;



      //created new id
      if(data.allItems[type].length>0)
      {
        ID = data.allItems[type][data.allItems[type].length-1].id+1;
      }
else{
  ID=0;
}     

      //create new item base don ic or exp type
      if (type === "exp") {
        newItem = new Expense(ID, des, val)
      }
      else if (type === "inc") {
        newItem = new Income(ID, des, val)
      }


      //push item to data structure
      data.allItems[type].push(newItem);
 
//return new item 
      return newItem;
    },

    testing:function(){
      console.log(data)
    }



  }



}
)();





//UI CONTROLLER
var UIController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDesc: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
  };

  return {
    getinput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
        description: document.querySelector(DOMstrings.inputDesc).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
  //some code
})();








//MAIN CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function () {
   var input,newItem;
   
    //1.get field input data
   input = UICtrl.getinput();

    //2.add itm to budget controller
newItem=budgetCtrl.addItem(input.type,input.description,input.value)

    //3.add item to user interface

    //4. calculate budget

    //5. display budget
  };

  return {
    init: function () {
      console.log("Application has started");
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
