/*initializes pin screen 
Declares initPinScreen that takes in 
Selector which finds the #mainPinScreen html element
*/
const initPinScreen = (selector, onEnter) => {
/* Grabs the element id="mainpinscreen" */
    const container = document.querySelector(selector)
/* input finds the input field inside the container where the pin is typed/displayed
keys grabs teh button elelments inside the container*/
    const input = container.querySelector(".pin-value");
    const keys = container.querySelectorAll(".pin-keyboard-key");
/*Defines the helper fnuction clear */
    const clear = () => {
        input.value = "";

    };
/*loops through each of the button keys. 
Each button clicked it adds a click or something to happen*/
    for (const key of keys){
        key.addEventListener("click", () =>{
            const value = key.textContent.trim();
            if(key.classList.contains("pin-keyboard-key--clear")){
                clear();
            }else if (key.classList.contains("pin-keyboard-key--enter")){
                input.value && onEnter && onEnter(input.value, clear);
            }else {
            input.value += value;
            }
        });
    }
};



/* initialize the pin screen for this element when the user clicks enter
#means an id*/
/* initialize the pin screen for this element when the user clicks enter */
initPinScreen("#mainPinScreen", (pin, clear) => {
    if (pin === "0923") {
        // Redirect to mainPage.html
        window.location.href = "mainPage.html";
    } else {
        alert("Incorrect PIN. Try again.");
        clear(); // reset the input
    }
});

