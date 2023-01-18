(function () {
    let screen = document.querySelector(".screen");
    let clear = document.querySelector(".btn-clear");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector(".btn-equal");


    // push number to screen
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })
    // make operation
     equal.addEventListener("click",function(e) {
      
        if (screen.value === '') {
            screen.value = "please write your number";
        } else {
            let answer = eval (screen.value);
            screen.value = answer;
        }
    })
    // clear
    clear.addEventListener("click", function (e) {
        screen.value = '';
    })









})();
