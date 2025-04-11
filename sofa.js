let btn = document.querySelector('.nav_smart');
let change = document.querySelector('.nav_rht ');

btn.addEventListener("click", function() {
    if (change.style.display === "flex" ) {
        change.style.display = "none"; // Show
    } else {
        change.style.display = "flex"; // Hide
    }
});