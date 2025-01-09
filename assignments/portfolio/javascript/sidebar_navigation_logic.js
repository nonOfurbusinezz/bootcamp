const setEventListener = () => {

    setTimeout(() => {
        console.log("fired");

        const firstBtn = document.getElementById("firstBtn");
        if (firstBtn) {
            firstBtn.addEventListener("click", function() {
              
                let sidebarState = localStorage.getItem("sidebarstate");
                if(sidebarState === "undefined") {
                localStorage.setItem("sidebarState", "false");
                }else {
                localStorage.setItem("sidebarState", "true")
                }

                sidebarState ? this.style.display = "none" : this.style.display = "none"
                this.style.display = 'none'; 
                alert('hiding');
            });
        }else {
            console.log("error")
        }
    }, 100);
};

document.addEventListener("DOMContentLoaded", setEventListener);
