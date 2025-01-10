//DOM


import {DOMElements} from "./DOMSelectors.js";

document.addEventListener('DOMContentLoaded', () => {
    const handleSideBarView = () => {
      //adding a delay for the dom to load
        setTimeout(() => {
            if(DOMElements.navigationBtn && DOMElements.sidebar) {
                DOMElements.navigationBtn.addEventListener('click', () => {
                    if (DOMElements.sidebar) {
    
                        DOMElements.sidebar.classList.toggle("hide");
                    } else {
                        console.error("No element with the class 'sidebar' found.");
                    }
                });
            }else {
                console.error('The Navigation button or/and sidebar were not found in the DOM');
                return;
            }
          
        }, 100);
    };


    handleSideBarView();
});
