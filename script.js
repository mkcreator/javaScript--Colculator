
(function () {

    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector("#equal");
    let clear = document.querySelector("#clear");
    console.log(buttons)
    console.log(screen)
    console.log(equal)
    console.log(clear)

    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            let value = e.target.dataset.num;
            screen.value +=value;
        })

        equal.addEventListener("click", function () {
            if (screen.value == "") {
                screen.value = "";
            } else {
                let answer = eval(screen.value)
                screen.value = answer;
                console.log(answer)
            }
        })

        clear.addEventListener("click", function () {
            screen.value = "";
        })

    });
})();