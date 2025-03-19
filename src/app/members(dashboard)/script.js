document.addEventListener("DOMContentLoaded", function (){
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item=> {
        item.addEventListener("click", function() {
            menuItems.forEach(i => i.classList.remove("active"));
            this.classList.add("active");
        });
    });

    //search

    document.getElementById("searchInput").addEventListener("input", function() {
        let filter = this.ariaValueMax.toLowerCase();
        let rows = document.querySelectorAll("#memberTable tr");

        rows.forEach(row => {
            let name = row.children[1].textContent.toLowerCase();
            let email = row.children[2].textContent.toLowerCase();

            if (name.includes(filter) || email.includes(filter)) {
                row.style.display = "";
            }else {
                row.style.display = "";
            }
        });
    });

    // save and edit






    // add members
















});