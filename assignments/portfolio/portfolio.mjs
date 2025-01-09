import getComponent from "./javascript/getComponent.mjs";

//functions

    // Example Usage:
// getComponent("../components/header/header.html", "header", "../sidebar.js", "click", () => console.log("Header clicked"));
      

       getComponent("./components/header/header.html", "header", "./sidebar.js");
       getComponent("./components/footer/footer.html", "footer", "");
       getComponent("./components/sidebar/sidebar.html", "sidebar", ""); 


