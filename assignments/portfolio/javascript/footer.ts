import { DOMElements } from "./DOMSelectors.js"

if(!DOMElements){
    console.log('Elements have not loaded')
}

const handleFooterUp = (event: MouseEvent) => {
    const target = (event.target as HTMLElement).getAttribute('value');
    console.log(target); 

    if (target === 'close') {
      DOMElements.buttonUp?.classList.add('rotate');
    }
  };

  
  DOMElements.buttonUp?.addEventListener('click', handleFooterUp);