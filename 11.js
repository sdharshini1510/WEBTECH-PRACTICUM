// =========================================
// WELCOME BUTTON
// =========================================

const welcomeButton =
    document.getElementById("welcomeButton");

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
// NEW VALIDATION + OLD SUBMISSION
// =========================================

const applicationForm =
    document.getElementById("applicationForm");


// =========================================
// GET FORM ELEMENTS
// =========================================

const fullname =
    document.getElementById("fullname");

const dob =
    document.getElementById("dob");

const email =
    document.getElementById("email");

const phone =
    document.getElementById("phone");

const address =
    document.getElementById("address");

const department =
    document.getElementById("department");

const designation =
    document.getElementById("designation");

const experience =
    document.getElementById("experience");

const salary =
    document.getElementById("salary");

const joiningdate =
    document.getElementById("joiningdate");

const resume =
    document.getElementById("resume");

const skills =
    document.getElementById("skills");

const message =
    document.getElementById("message");

const declaration =
    document.getElementById("declaration");

const formSuccess =
    document.getElementById("formSuccess");


// =========================================
// SHOW ERROR
// =========================================

function showError(field, errorId, errorMessage) {

    const errorElement =
        document.getElementById(errorId);

    errorElement.textContent =
        errorMessage;

    field.classList.add(
        "validation-error"
    );

    field.classList.remove(
        "validation-success"
    );

}


// =========================================
// CLEAR ERROR
// =========================================

function clearError(field, errorId) {

    const errorElement =
        document.getElementById(errorId);

    errorElement.textContent = "";

    field.classList.remove(
        "validation-error"
    );

    field.classList.add(
        "validation-success"
    );

}


// =========================================
// SET CUSTOM VALIDITY
// =========================================

function setFieldError(
    field,
    errorId,
    errorMessage
) {

    field.setCustomValidity(
        errorMessage
    );

    showError(
        field,
        errorId,
        errorMessage
    );

}


// =========================================
// CLEAR CUSTOM VALIDITY
// =========================================

function clearFieldError(
    field,
    errorId
) {

    field.setCustomValidity("");

    clearError(
        field,
        errorId
    );

}


// =========================================
// FULL NAME VALIDATION
// =========================================

fullname.addEventListener(
    "input",
    function () {

        if (fullname.value.trim() === "") {

            setFieldError(
                fullname,
                "fullnameError",
                "Full name is required."
            );

        }

        else if (fullname.value.length < 3) {

            setFieldError(
                fullname,
                "fullnameError",
                "Name must contain at least 3 characters."
            );

        }

        else if (
            !/^[A-Za-z ]+$/.test(
                fullname.value
            )
        ) {

            setFieldError(
                fullname,
                "fullnameError",
                "Name can contain only letters and spaces."
            );

        }

        else {

            clearFieldError(
                fullname,
                "fullnameError"
            );

        }

    }
);


// =========================================
// DATE OF BIRTH VALIDATION
// =========================================

dob.addEventListener(
    "input",
    function () {

        if (dob.value === "") {

            setFieldError(
                dob,
                "dobError",
                "Date of birth is required."
            );

        }

        else {

            clearFieldError(
                dob,
                "dobError"
            );

        }

    }
);


// =========================================
// EMAIL VALIDATION
// =========================================

email.addEventListener(
    "input",
    function () {

        if (email.value.trim() === "") {

            setFieldError(
                email,
                "emailError",
                "Email address is required."
            );

        }

        else if (!email.checkValidity()) {

            setFieldError(
                email,
                "emailError",
                "Please enter a valid email address."
            );

        }

        else {

            clearFieldError(
                email,
                "emailError"
            );

        }

    }
);


// =========================================
// PHONE VALIDATION
// =========================================

phone.addEventListener(
    "input",
    function () {

        if (phone.value.trim() === "") {

            setFieldError(
                phone,
                "phoneError",
                "Phone number is required."
            );

        }

        else if (
            !/^[0-9]{10}$/.test(
                phone.value
            )
        ) {

            setFieldError(
                phone,
                "phoneError",
                "Phone number must contain exactly 10 digits."
            );

        }

        else {

            clearFieldError(
                phone,
                "phoneError"
            );

        }

    }
);


// =========================================
// ADDRESS VALIDATION
// =========================================

address.addEventListener(
    "input",
    function () {

        if (address.value.trim() === "") {

            setFieldError(
                address,
                "addressError",
                "Address is required."
            );

        }

        else if (
            address.value.length < 10
        ) {

            setFieldError(
                address,
                "addressError",
                "Address must contain at least 10 characters."
            );

        }

        else {

            clearFieldError(
                address,
                "addressError"
            );

        }

    }
);


// =========================================
// DEPARTMENT VALIDATION
// =========================================

department.addEventListener(
    "change",
    function () {

        if (department.value === "") {

            setFieldError(
                department,
                "departmentError",
                "Please select a department."
            );

        }

        else {

            clearFieldError(
                department,
                "departmentError"
            );

        }

    }
);


// =========================================
// DESIGNATION VALIDATION
// =========================================

designation.addEventListener(
    "input",
    function () {

        if (
            designation.value.trim() === ""
        ) {

            setFieldError(
                designation,
                "designationError",
                "Designation is required."
            );

        }

        else if (
            designation.value.length < 3
        ) {

            setFieldError(
                designation,
                "designationError",
                "Designation must contain at least 3 characters."
            );

        }

        else if (
            !/^[A-Za-z ]+$/.test(
                designation.value
            )
        ) {

            setFieldError(
                designation,
                "designationError",
                "Designation can contain only letters and spaces."
            );

        }

        else {

            clearFieldError(
                designation,
                "designationError"
            );

        }

    }
);


// =========================================
// EXPERIENCE VALIDATION
// =========================================

experience.addEventListener(
    "input",
    function () {

        const value =
            Number(experience.value);

        if (experience.value === "") {

            setFieldError(
                experience,
                "experienceError",
                "Experience is required."
            );

        }

        else if (
            value < 0 ||
            value > 50
        ) {

            setFieldError(
                experience,
                "experienceError",
                "Experience must be between 0 and 50 years."
            );

        }

        else {

            clearFieldError(
                experience,
                "experienceError"
            );

        }

    }
);


// =========================================
// SALARY VALIDATION
// =========================================

salary.addEventListener(
    "input",
    function () {

        const value =
            Number(salary.value);

        if (salary.value === "") {

            setFieldError(
                salary,
                "salaryError",
                "Expected salary is required."
            );

        }

        else if (
            value < 10000 ||
            value > 1000000
        ) {

            setFieldError(
                salary,
                "salaryError",
                "Salary must be between 10000 and 1000000."
            );

        }

        else {

            clearFieldError(
                salary,
                "salaryError"
            );

        }

    }
);


// =========================================
// JOINING DATE VALIDATION
// =========================================

joiningdate.addEventListener(
    "input",
    function () {

        if (joiningdate.value === "") {

            setFieldError(
                joiningdate,
                "joiningdateError",
                "Joining date is required."
            );

        }

        else {

            clearFieldError(
                joiningdate,
                "joiningdateError"
            );

        }

    }
);


// =========================================
// RESUME VALIDATION
// =========================================

resume.addEventListener(
    "change",
    function () {

        if (
            resume.files.length === 0
        ) {

            setFieldError(
                resume,
                "resumeError",
                "Please upload your resume."
            );

        }

        else {

            clearFieldError(
                resume,
                "resumeError"
            );

        }

    }
);


// =========================================
// TECHNICAL SKILLS VALIDATION
// =========================================

skills.addEventListener(
    "input",
    function () {

        if (
            skills.value.trim() === ""
        ) {

            setFieldError(
                skills,
                "skillsError",
                "Technical skills are required."
            );

        }

        else if (
            skills.value.length < 2
        ) {

            setFieldError(
                skills,
                "skillsError",
                "Please enter your technical skills."
            );

        }

        else {

            clearFieldError(
                skills,
                "skillsError"
            );

        }

    }
);


// =========================================
// MESSAGE VALIDATION
// =========================================

message.addEventListener(
    "input",
    function () {

        if (
            message.value.trim() === ""
        ) {

            setFieldError(
                message,
                "messageError",
                "Please explain why we should hire you."
            );

        }

        else if (
            message.value.length < 30
        ) {

            setFieldError(
                message,
                "messageError",
                "Message must contain at least 30 characters."
            );

        }

        else {

            clearFieldError(
                message,
                "messageError"
            );

        }

    }
);


// =========================================
// DECLARATION VALIDATION
// =========================================

declaration.addEventListener(
    "change",
    function () {

        if (!declaration.checked) {

            setFieldError(
                declaration,
                "declarationError",
                "You must confirm the declaration."
            );

        }

        else {

            clearFieldError(
                declaration,
                "declarationError"
            );

        }

    }
);


// =========================================
// FORM SUBMIT
// =========================================

applicationForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        // HTML5 validation

        if (
            !applicationForm.checkValidity()
        ) {

            applicationForm.reportValidity();

            showNotification(
                "Please correct the invalid fields."
            );

            return;

        }


        // Additional validation

        if (
            fullname.value.trim() === "" ||
            email.value.trim() === "" ||
            phone.value.trim() === "" ||
            address.value.trim() === "" ||
            department.value === "" ||
            designation.value.trim() === "" ||
            experience.value === "" ||
            salary.value === "" ||
            joiningdate.value === "" ||
            resume.files.length === 0 ||
            skills.value.trim() === "" ||
            message.value.trim() === "" ||
            !declaration.checked
        ) {

            applicationForm.reportValidity();

            showNotification(
                "Please complete all required fields."
            );

            return;

        }


        // =====================================
        // SUCCESS
        // =====================================

        formSuccess.classList.add(
            "show"
        );

        showNotification(
            "Application submitted successfully!"
        );


        // Reset form

        applicationForm.reset();


        // Clear validation styles

        const fields =
            applicationForm.querySelectorAll(
                "input, select, textarea"
            );


        fields.forEach(
            function (field) {

                field.classList.remove(
                    "validation-error",
                    "validation-success"
                );

                field.setCustomValidity("");

            }
        );


        // Clear error messages

        const errors =
            applicationForm.querySelectorAll(
                ".error"
            );


        errors.forEach(
            function (error) {

                error.textContent = "";

            }
        );


        // Hide success message

        setTimeout(
            function () {

                formSuccess.classList.remove(
                    "show"
                );

            },
            5000
        );

    }
);


// =========================================
// FORM RESET
// =========================================

applicationForm.addEventListener(
    "reset",
    function () {

        setTimeout(
            function () {

                formSuccess.classList.remove(
                    "show"
                );


                const errors =
                    applicationForm.querySelectorAll(
                        ".error"
                    );


                errors.forEach(
                    function (error) {

                        error.textContent = "";

                    }
                );


                const fields =
                    applicationForm.querySelectorAll(
                        "input, select, textarea"
                    );


                fields.forEach(
                    function (field) {

                        field.classList.remove(
                            "validation-error",
                            "validation-success"
                        );

                        field.setCustomValidity("");

                    }
                );

            },
            0
        );

    }
);



// =========================================
// HELP & SUPPORT
// =========================================

const helpButton =
    document.getElementById("helpButton");


helpButton.addEventListener(
    "click",
    function () {

        showNotification(
            "Our support team is available to help you."
        );

    }
);


// =========================================
// NOTIFICATION FUNCTION
// =========================================

function showNotification(message) {

    const notification =
        document.getElementById("notification");

    const notificationMessage =
        document.getElementById(
            "notificationMessage"
        );


    notificationMessage.textContent =
        message;

    notification.classList.add("show");


    setTimeout(
        function () {

            notification.classList.remove(
                "show"
            );

        },
        3000
    );

}


// =========================================
// GALLERY INTERACTION
// =========================================

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


galleryItems.forEach(
    function (item) {

        item.addEventListener(
            "click",
            function () {

                item.classList.toggle(
                    "selected"
                );

            }
        );

    }
);


// =========================================
// HEADER CLICK ANIMATION
// =========================================

const header =
    document.getElementById(
        "mainHeader"
    );


header.addEventListener(
    "click",
    function () {

        header.classList.add(
            "header-active"
        );


        setTimeout(
            function () {

                header.classList.remove(
                    "header-active"
                );

            },
            800
        );

    }
);


// =========================================
// DOM MANIPULATION
// ADD NEW EMPLOYEE
// =========================================

const employeeSection =
    document.querySelector(
        "#employees"
    );


const addEmployeeButton =
    document.createElement(
        "button"
    );


addEmployeeButton.textContent =
    "Add New Employee";


addEmployeeButton.setAttribute(
    "id",
    "addEmployeeButton"
);


addEmployeeButton.setAttribute(
    "type",
    "button"
);


addEmployeeButton.style.backgroundColor =
    "#f59e0b";


addEmployeeButton.style.color =
    "white";


addEmployeeButton.style.marginTop =
    "15px";


employeeSection.appendChild(
    addEmployeeButton
);


// =========================================
// ADD EMPLOYEE FORM DYNAMICALLY
// =========================================

addEmployeeButton.addEventListener(
    "click",
    function () {

        if (
            document.getElementById(
                "dynamicEmployeeForm"
            )
        ) {

            return;

        }


        const form =
            document.createElement(
                "div"
            );


        form.setAttribute(
            "id",
            "dynamicEmployeeForm"
        );


        form.style.backgroundColor =
            "#fff7ed";


        form.style.border =
            "2px solid #f59e0b";


        form.style.padding =
            "20px";


        form.style.marginTop =
            "20px";


        form.style.borderRadius =
            "10px";


        const heading =
            document.createElement(
                "h3"
            );


        heading.textContent =
            "Add New Employee";


        form.appendChild(
            heading
        );


        const nameInput =
            document.createElement(
                "input"
            );


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


        nameInput.style.display =
            "block";


        nameInput.style.width =
            "100%";


        nameInput.style.maxWidth =
            "500px";


        nameInput.style.marginBottom =
            "10px";


        form.appendChild(
            nameInput
        );


        const departmentInput =
            document.createElement(
                "input"
            );


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


        departmentInput.style.display =
            "block";


        departmentInput.style.width =
            "100%";


        departmentInput.style.maxWidth =
            "500px";


        departmentInput.style.marginBottom =
            "10px";


        form.appendChild(
            departmentInput
        );


        const designationInput =
            document.createElement(
                "input"
            );


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


        designationInput.style.display =
            "block";


        designationInput.style.width =
            "100%";


        designationInput.style.maxWidth =
            "500px";


        designationInput.style.marginBottom =
            "10px";


        form.appendChild(
            designationInput
        );


        const emailInput =
            document.createElement(
                "input"
            );


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


        emailInput.style.display =
            "block";


        emailInput.style.width =
            "100%";


        emailInput.style.maxWidth =
            "500px";


        emailInput.style.marginBottom =
            "10px";


        form.appendChild(
            emailInput
        );


        const saveButton =
            document.createElement(
                "button"
            );


        saveButton.textContent =
            "Add Employee";


        saveButton.setAttribute(
            "type",
            "button"
        );


        saveButton.style.backgroundColor =
            "#16a34a";


        saveButton.style.color =
            "white";


        saveButton.style.marginRight =
            "10px";


        form.appendChild(
            saveButton
        );


        const cancelButton =
            document.createElement(
                "button"
            );


        cancelButton.textContent =
            "Cancel";


        cancelButton.setAttribute(
            "type",
            "button"
        );


        cancelButton.style.backgroundColor =
            "#dc3545";


        cancelButton.style.color =
            "white";


        form.appendChild(
            cancelButton
        );


        employeeSection.appendChild(
            form
        );


        // Cancel

        cancelButton.addEventListener(
            "click",
            function () {

                form.remove();

            }
        );


        // Save employee

        saveButton.addEventListener(
            "click",
            function () {

                const name =
                    nameInput.value.trim();

                const department =
                    departmentInput.value.trim();

                const designation =
                    designationInput.value.trim();

                const email =
                    emailInput.value.trim();


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


                const table =
                    document.querySelector(
                        "#employees table"
                    );


                const newRow =
                    document.createElement(
                        "tr"
                    );


                const idCell =
                    document.createElement(
                        "td"
                    );


                idCell.textContent =
                    "EMP005";


                newRow.appendChild(
                    idCell
                );


                const nameCell =
                    document.createElement(
                        "td"
                    );


                nameCell.textContent =
                    name;


                newRow.appendChild(
                    nameCell
                );


                const departmentCell =
                    document.createElement(
                        "td"
                    );


                departmentCell.textContent =
                    department;


                newRow.appendChild(
                    departmentCell
                );


                const designationCell =
                    document.createElement(
                        "td"
                    );


                designationCell.textContent =
                    designation;


                newRow.appendChild(
                    designationCell
                );


                const emailCell =
                    document.createElement(
                        "td"
                    );


                emailCell.textContent =
                    email;


                newRow.appendChild(
                    emailCell
                );


                table.appendChild(
                    newRow
                );


                const status =
                    document.querySelector(
                        ".employee-status"
                    );


                status.textContent =
                    "Active Employees: Updated";


                form.remove();


                showNotification(
                    "New employee added successfully!"
                );

            }
        );

    }
);


// =========================================
// REMOVE EMPLOYEE FROM TABLE
// =========================================

const employeeTable =
    document.querySelector(
        "#employees table"
    );


employeeTable.addEventListener(
    "dblclick",
    function (event) {

        const clickedRow =
            event.target.closest(
                "tr"
            );


        if (
            clickedRow &&
            clickedRow.querySelector("td")
        ) {

            const employeeName =
                clickedRow
                    .querySelector(
                        "td:nth-child(2)"
                    )
                    .textContent;


            clickedRow.remove();


            showNotification(
                employeeName +
                " has been removed from the employee list."
            );

        }

    }
);


// =========================================
// DYNAMIC DEPARTMENT INFORMATION
// =========================================

const departmentList =
    document.querySelector(
        "#departments ul"
    );


const addDepartmentButton =
    document.createElement(
        "button"
    );


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
            prompt(
                "Enter new department name:"
            );


        if (
            departmentName === null ||
            departmentName.trim() === ""
        ) {

            return;

        }


        const newDepartment =
            document.createElement(
                "li"
            );


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
    document.querySelector(
        ".gallery"
    );


galleryItems.forEach(
    function (item) {

        item.addEventListener(
            "click",
            function () {

                const title =
                    item.querySelector(
                        "h3"
                    );


                if (title) {

                    showNotification(
                        "Selected: " +
                        title.textContent
                    );

                }

            }
        );

    }
);


// =========================================
// CHANGE HEADER USING innerHTML
// =========================================

header.addEventListener(
    "dblclick",
    function () {

        header.innerHTML = `

            <h1>XYZ Technologies</h1>

            <p>
                Employee Management System
            </p>

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
    document.querySelector(
        "#contact"
    );


const contactButton =
    document.createElement(
        "button"
    );


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
            document.createElement(
                "p"
            );


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