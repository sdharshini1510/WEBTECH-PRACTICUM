// =========================================
// WELCOME BUTTON
// =========================================

const welcomeButton = document.getElementById("welcomeButton");

welcomeButton.addEventListener("click", function () {

    showNotification(
        "Welcome to XYZ Technologies Employee Management System!"
    );

});


// =========================================
// EMPLOYEE INFORMATION CARD
// =========================================

const employeeButton =
    document.getElementById("employeeButton");

const employeeCard =
    document.getElementById("employeeCard");

const closeEmployeeCard =
    document.getElementById("closeEmployeeCard");


// Open employee information card

employeeButton.addEventListener("click", function () {

    employeeCard.classList.remove("hidden");

    employeeCard.classList.add("card-open");

});


// Close employee information card

closeEmployeeCard.addEventListener("click", function () {

    employeeCard.classList.add("hidden");

    employeeCard.classList.remove("card-open");

});


// =========================================
// DEPARTMENT NOTICE
// =========================================

const departmentButton =
    document.getElementById("departmentButton");

const departmentNotice =
    document.getElementById("departmentNotice");


departmentButton.addEventListener("click", function () {

    departmentNotice.classList.toggle("hidden");

    if (departmentNotice.classList.contains("hidden")) {

        departmentButton.textContent =
            "Show Department Notice";

    }

    else {

        departmentButton.textContent =
            "Hide Department Notice";

    }

});


// =========================================
// APPLICATION FORM
// =========================================

const applicationForm =
    document.getElementById("applicationForm");


applicationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    showNotification(
        "Application submitted successfully!"
    );

    applicationForm.reset();

});


// =========================================
// HELP & SUPPORT
// =========================================

const helpButton =
    document.getElementById("helpButton");


helpButton.addEventListener("click", function () {

    showNotification(
        "Our support team is available to help you."
    );

});


// =========================================
// NOTIFICATION FUNCTION
// =========================================

function showNotification(message) {

    const notification =
        document.getElementById("notification");

    const notificationMessage =
        document.getElementById("notificationMessage");


    notificationMessage.textContent = message;

    notification.classList.add("show");


    setTimeout(function () {

        notification.classList.remove("show");

    }, 3000);

}


// =========================================
// GALLERY INTERACTION
// =========================================

const galleryItems =
    document.querySelectorAll(".gallery-item");


galleryItems.forEach(function (item) {

    item.addEventListener("click", function () {

        item.classList.toggle("selected");

    });

});


// =========================================
// HEADER CLICK ANIMATION
// =========================================

const header =
    document.getElementById("mainHeader");


header.addEventListener("click", function () {

    header.classList.add("header-active");


    setTimeout(function () {

        header.classList.remove("header-active");

    }, 800);

});


// =========================================
// DOM MANIPULATION
// ADD NEW EMPLOYEE
// =========================================

// Create an Add Employee button dynamically

const employeeSection =
    document.querySelector("#employees");

const addEmployeeButton =
    document.createElement("button");

addEmployeeButton.textContent = "Add New Employee";

addEmployeeButton.setAttribute(
    "id",
    "addEmployeeButton"
);

addEmployeeButton.setAttribute(
    "type",
    "button"
);

addEmployeeButton.style.backgroundColor = "#f59e0b";
addEmployeeButton.style.color = "white";
addEmployeeButton.style.marginTop = "15px";

employeeSection.appendChild(addEmployeeButton);


// =========================================
// ADD EMPLOYEE FORM DYNAMICALLY
// =========================================

addEmployeeButton.addEventListener("click", function () {

    // Check if form already exists

    if (document.getElementById("dynamicEmployeeForm")) {
        return;
    }


    // Create form

    const form =
        document.createElement("div");

    form.setAttribute(
        "id",
        "dynamicEmployeeForm"
    );

    form.style.backgroundColor = "#fff7ed";
    form.style.border = "2px solid #f59e0b";
    form.style.padding = "20px";
    form.style.marginTop = "20px";
    form.style.borderRadius = "10px";


    // Create heading

    const heading =
        document.createElement("h3");

    heading.textContent =
        "Add New Employee";

    form.appendChild(heading);


    // Create Name input

    const nameInput =
        document.createElement("input");

    nameInput.setAttribute(
        "type",
        "text"
    );

    nameInput.setAttribute(
        "id",
        "newEmployeeName"
    );

    nameInput.setAttribute(
        "placeholder",
        "Enter employee name"
    );

    nameInput.style.display = "block";
    nameInput.style.width = "100%";
    nameInput.style.maxWidth = "500px";
    nameInput.style.marginBottom = "10px";

    form.appendChild(nameInput);


    // Create Department input

    const departmentInput =
        document.createElement("input");

    departmentInput.setAttribute(
        "type",
        "text"
    );

    departmentInput.setAttribute(
        "id",
        "newEmployeeDepartment"
    );

    departmentInput.setAttribute(
        "placeholder",
        "Enter department"
    );

    departmentInput.style.display = "block";
    departmentInput.style.width = "100%";
    departmentInput.style.maxWidth = "500px";
    departmentInput.style.marginBottom = "10px";

    form.appendChild(departmentInput);


    // Create Designation input

    const designationInput =
        document.createElement("input");

    designationInput.setAttribute(
        "type",
        "text"
    );

    designationInput.setAttribute(
        "id",
        "newEmployeeDesignation"
    );

    designationInput.setAttribute(
        "placeholder",
        "Enter designation"
    );

    designationInput.style.display = "block";
    designationInput.style.width = "100%";
    designationInput.style.maxWidth = "500px";
    designationInput.style.marginBottom = "10px";

    form.appendChild(designationInput);


    // Create Email input

    const emailInput =
        document.createElement("input");

    emailInput.setAttribute(
        "type",
        "email"
    );

    emailInput.setAttribute(
        "id",
        "newEmployeeEmail"
    );

    emailInput.setAttribute(
        "placeholder",
        "Enter email"
    );

    emailInput.style.display = "block";
    emailInput.style.width = "100%";
    emailInput.style.maxWidth = "500px";
    emailInput.style.marginBottom = "10px";

    form.appendChild(emailInput);


    // Create Add button

    const saveButton =
        document.createElement("button");

    saveButton.textContent =
        "Add Employee";

    saveButton.setAttribute(
        "type",
        "button"
    );

    saveButton.style.backgroundColor = "#16a34a";
    saveButton.style.color = "white";
    saveButton.style.marginRight = "10px";

    form.appendChild(saveButton);


    // Create Cancel button

    const cancelButton =
        document.createElement("button");

    cancelButton.textContent =
        "Cancel";

    cancelButton.setAttribute(
        "type",
        "button"
    );

    cancelButton.style.backgroundColor = "#dc3545";
    cancelButton.style.color = "white";

    form.appendChild(cancelButton);


    // Add form to employee section

    employeeSection.appendChild(form);


    // =====================================
    // CANCEL BUTTON
    // =====================================

    cancelButton.addEventListener("click", function () {

        form.remove();

    });


    // =====================================
    // SAVE EMPLOYEE
    // =====================================

    saveButton.addEventListener("click", function () {

        const name =
            nameInput.value.trim();

        const department =
            departmentInput.value.trim();

        const designation =
            designationInput.value.trim();

        const email =
            emailInput.value.trim();


        // Validation

        if (
            name === "" ||
            department === "" ||
            designation === "" ||
            email === ""
        ) {

            showNotification(
                "Please fill all employee details."
            );

            return;

        }


        // Get existing table

        const table =
            document.querySelector("#employees table");


        // Create new table row

        const newRow =
            document.createElement("tr");


        // Create Employee ID

        const idCell =
            document.createElement("td");

        idCell.textContent =
            "EMP005";

        newRow.appendChild(idCell);


        // Create Name cell

        const nameCell =
            document.createElement("td");

        nameCell.textContent = name;

        newRow.appendChild(nameCell);


        // Create Department cell

        const departmentCell =
            document.createElement("td");

        departmentCell.textContent =
            department;

        newRow.appendChild(departmentCell);


        // Create Designation cell

        const designationCell =
            document.createElement("td");

        designationCell.textContent =
            designation;

        newRow.appendChild(designationCell);


        // Create Email cell

        const emailCell =
            document.createElement("td");

        emailCell.textContent =
            email;

        newRow.appendChild(emailCell);


        // Add row to table

        table.appendChild(newRow);


        // =====================================
        // UPDATE EMPLOYEE STATUS
        // =====================================

        const status =
            document.querySelector(".employee-status");

        status.textContent =
            "Active Employees: Updated";


        // Remove dynamic form

        form.remove();


        // Show success message

        showNotification(
            "New employee added successfully!"
        );

    });

});


// =========================================
// REMOVE EMPLOYEE FROM TABLE
// =========================================

const employeeTable =
    document.querySelector("#employees table");


employeeTable.addEventListener("dblclick", function (event) {

    const clickedRow =
        event.target.closest("tr");


    // Do not remove table header

    if (
        clickedRow &&
        clickedRow.querySelector("td")
    ) {

        const employeeName =
            clickedRow.querySelector("td:nth-child(2)")
                .textContent;


        clickedRow.remove();


        showNotification(
            employeeName +
            " has been removed from the employee list."
        );

    }

});


// =========================================
// DYNAMIC DEPARTMENT INFORMATION
// =========================================

const departmentList =
    document.querySelector("#departments ul");


const addDepartmentButton =
    document.createElement("button");


addDepartmentButton.textContent =
    "Add Department";

addDepartmentButton.setAttribute(
    "id",
    "addDepartmentButton"
);

addDepartmentButton.setAttribute(
    "type",
    "button"
);

addDepartmentButton.style.backgroundColor =
    "#0891b2";

addDepartmentButton.style.color =
    "white";

addDepartmentButton.style.marginTop =
    "10px";


departmentList.parentElement.appendChild(
    addDepartmentButton
);


// =========================================
// ADD DEPARTMENT
// =========================================

addDepartmentButton.addEventListener(
    "click",
    function () {

        const departmentName =
            prompt("Enter new department name:");

        if (
            departmentName === null ||
            departmentName.trim() === ""
        ) {

            return;

        }


        const newDepartment =
            document.createElement("li");


        newDepartment.textContent =
            departmentName;


        departmentList.appendChild(
            newDepartment
        );


        showNotification(
            "New department added successfully!"
        );

    }
);


// =========================================
// DYNAMIC GALLERY INFORMATION
// =========================================

const gallery =
    document.querySelector(".gallery");


galleryItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const title =
            item.querySelector("h3");

        if (title) {

            showNotification(
                "Selected: " +
                title.textContent
            );

        }

    });

});


// =========================================
// CHANGE HEADER USING innerHTML
// =========================================

header.addEventListener(
    "dblclick",
    function () {

        header.innerHTML = `
            <h1>XYZ Technologies</h1>
            <p>Employee Management System</p>
            <span>
                Clicked twice - Header updated dynamically!
            </span>
        `;

        showNotification(
            "Header content updated using DOM manipulation."
        );

    }
);


// =========================================
// CHANGE CONTACT INFORMATION
// =========================================

const contactSection =
    document.querySelector("#contact");


const contactButton =
    document.createElement("button");


contactButton.textContent =
    "Show HR Contact";

contactButton.setAttribute(
    "type",
    "button"
);

contactButton.style.backgroundColor =
    "#9333ea";

contactButton.style.color =
    "white";

contactButton.style.marginTop =
    "10px";


contactSection.appendChild(
    contactButton
);


// =========================================
// CONTACT BUTTON EVENT
// =========================================

contactButton.addEventListener(
    "click",
    function () {

        const contactMessage =
            document.createElement("p");


        contactMessage.setAttribute(
            "id",
            "dynamicContact"
        );


        contactMessage.innerHTML =
            "<strong>HR Support:</strong> hr@xyztechnologies.com";


        contactSection.appendChild(
            contactMessage
        );


        contactButton.textContent =
            "HR Contact Displayed";


        showNotification(
            "HR contact information displayed."
        );

    }
);


// =========================================
// REMOVE CONTACT INFORMATION
// =========================================

contactSection.addEventListener(
    "dblclick",
    function (event) {

        if (
            event.target.id ===
            "dynamicContact"
        ) {

            event.target.remove();

            showNotification(
                "HR contact information removed."
            );

        }

    }
);