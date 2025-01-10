

// DOM
import {DOMElements} from "./DOMSelectors.js";


// Main content where we render our fetched pages


const buttonsArray = [
  { button: DOMElements.sidebarBTN_home, target: 'Home' },
  { button: DOMElements.sidebarBTN_about, target: 'About' },
  { button: DOMElements.sidebarBTN_contact, target: 'Contact' }
];

 

const fetchData = async(fileDir : string) => {
    fetch(fileDir)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.text();
          })
          .then((html) => {
            const mainContent = document.getElementById('main_content');
            if (mainContent) {
              mainContent.innerHTML = html;
            }
          })
          .catch((error) => {
            console.error('Error fetching the HTML:', error);
          });
}

// Function to handle fetch based on target
const handleFetch = async (target: string) => {
  switch (target) {
    case 'Home':
       //fetch data for home
       fetchData('./components/home.html');
      

      break;
    case 'About':
      console.log('About');
      fetchData('./components/about.html');
      break;
      case 'Contact':
        fetchData('./components/contact/contact_form.html');
       
        break;
      
    default:
      console.error('Not a valid selection');
  }
};

// adds the event listeners
if (DOMElements.sidebarBTN_home && DOMElements.sidebarBTN_about && DOMElements.sidebarBTN_contact && buttonsArray) {
  buttonsArray.forEach(({ button, target }) => {
    button?.addEventListener('click', () => handleFetch(target));
  });
}
