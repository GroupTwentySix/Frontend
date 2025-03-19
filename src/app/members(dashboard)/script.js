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
        let filter = this.value.toLowerCase();
        let rows = document.querySelectorAll("#memberTable tr");

        rows.forEach(row => {
            let name = row.children[1].textContent.toLowerCase();
            let email = row.children[2].textContent.toLowerCase();

            if (name.includes(filter) || email.includes(filter)) {
                row.style.display = "";
            }else {
                row.style.display = "none";
            }
        });
    });

    // save and edit
    function addEditSaveFunctionality(row) {
        row.querySelector(".edit").addEventListener("click", function () {
            let editables = row.querySelectorAll(".editable");

            editables.forEach(cell => {
                let input = document.createElement("input");
                input.value = cell.textContent;
                cell.textContent = "";
                cell.appendChild(input);
            });
            this.style.display= "none";
            row.querySelector(".save").style.display = "inline";
        });

        row.querySelector(".save").addEventListener("click", function () {
            let editables = row.querySelectorAll(".editable");

            editables.forEach(cell => {
                let input = cell.querySelector("input");
                cell.textContent = input.value;
            });

            this.style.display = "none";
            row.querySelector(".edit").style.display = "inline";
        });

        row.querySelector(".delete").addEventListener("click", function () {
            let confirmDelete = confirm("Are you sure that you want to permenantly delete this member?");
            if (confirmDelete) {
                row.remove();
            }
        });

    }

    document.querySelectorAll(".edit").forEach(button => {
        let row = button.closest("tr");
        addEditSaveFunctionality(row);
    });





    // add members

    document.getElementById("addMemberBtn").addEventListener("click", function () {
        let name = prompt("Please enter member Name:");
        let email = prompt("Please enter Email:");
        let password = prompt("Please enter Password:");
        let dateJoined = new Date().toLocaleDateString("en-Gb");

        if (name && email && password) {
            let table = document.getElementById("memberTable");

            let newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td><input type="radio" name="select"></td>
                <td class="editable">${name}</td>
                <td class="editable">${email}</td>
                <td class="editable">##########</td>
                <td>${dateJoined}</td>
                <td>
                    <button class="edit">Edit</button>
                    <button class="save" style="display: none;">Save</button>
                    <button class="delete">Delete</button>
                </td>
            `;

           table.appendChild(newRow);
           addEditSaveFunctionality(newRow);

        } else {
            alert("All fields are required");
        }
    });
});