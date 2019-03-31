var budgetController = (function() {
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
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
    };

    return {
        addItem: function(type, des, val) {

        }
    };

})(); 

var UIcontroller = (function() {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    }

    return {
        getInput: function() {
            return {
                    type: document.querySelector(DOMStrings.inputType).value,
                    description: document.querySelector(DOMStrings.inputDescription).value,
                    varlue: document.querySelector(DOMStrings.inputValue).value
            }
        },

        getDOMStrings: function() {
            return DOMStrings;
        },
    }

})();


// ()();  function in () will be treated as function expressions, not function declaration
// IIFE are function expressions that are invoked as soon as the function is declared.
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
var controller = (function(budgetCtrl, UICtrl) {

    //a function sets up all event listeners 
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    //a function gets called when we want add new item
    var ctrlAddItem = function() {
        
        //1. get the input data
        var input = UICtrl.getInput();
        console.log(input);

    };

    return {
        init: function() {
            setupEventListeners();
        }
    };

})(budgetController, UIcontroller);

controller.init();