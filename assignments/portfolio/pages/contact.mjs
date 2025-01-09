import getComponent from "../javascript/getComponent.mjs";


       getComponent("../components/header/header.html", "header", "../sidebar.js");
       getComponent("../components/footer/footer.html", "footer", "");
       getComponent("../components/sidebar/sidebar.html", "sidebar", "../javascript/sidebar_navigation_logic.js"); 
       getComponent("../components/contact/contact_form.html","contact","../javascript/submitForm.js");
       
