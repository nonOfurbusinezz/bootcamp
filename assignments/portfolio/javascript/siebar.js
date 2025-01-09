document.addEventListener('DOMContentLoaded', () => {
    const handleSideBarView = () => {

        console.log(document.querySelector(".sidebar"));
        console.log(document.getElementById('navigationBtn'));

      //adding a delay for the dom to load
        setTimeout(() => {
            document.getElementById("navigationBtn").addEventListener('click', () => {
             
                const sidebar = document.querySelector(".sidebar");
                if (sidebar) {

                    sidebar.classList.toggle("hide");
                } else {
                    console.error("No element with the class 'sidebar' found.");
                }
            });
        }, 100);
    };


    handleSideBarView();
});
