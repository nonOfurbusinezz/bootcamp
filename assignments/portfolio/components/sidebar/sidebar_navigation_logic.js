const firstBtn = document.getElementById("firstBtn");

const handleSelect = function(e) {
    this.style.display = 'none'; // Hides the current button
}

firstBtn.addEventListener('click', handleSelect);
