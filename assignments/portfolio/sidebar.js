const navButton = document.getElementById("navigationBtn");
const sidebar = document.getElementById("sidebar");

const openOrCloseSidebarHandler = () => {
    

    sidebar.classList.toggle("show")
    sidebar.classList.toggle("hide")

    }

navButton.addEventListener("click", openOrCloseSidebarHandler)
