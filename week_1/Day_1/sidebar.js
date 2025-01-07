const navButton = document.getElementById("sidebar");

const openOrCloseSidebarHandler = () => {
    if(navButton.classList.contains("show")) {
        navButton.classList.remove("show");
    }
    else {
        navButton.classList.add("show");
    }
}
navButton.addEventListener("click", openOrCloseSidebarHandler)