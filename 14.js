// =========================================
// WELCOME BUTTON
// =========================================

const welcomeButton = document.getElementById("welcomeButton");

if (welcomeButton) {
    welcomeButton.addEventListener("click", function () {
        showNotification(
            "Welcome to XYZ Technologies Employee Management System!"
        );
    });
}


// =========================================
// EMPLOYEE INFORMATION CARD
// =========================================

const employeeButton = document.getElementById("employeeButton");
const employeeCard = document.getElementById("employeeCard");
const closeEmployeeCard = document.getElementById("closeEmployeeCard");

if (employeeButton && employeeCard) {
    employeeButton.addEventListener("click", function () {
        employeeCard.classList.remove("hidden");
    });
}

if (closeEmployeeCard && employeeCard) {
    closeEmployeeCard.addEventListener("click", function () {
        employeeCard.classList.add("hidden");
    });
}


// =========================================
// DEPARTMENT NOTICE
// =========================================

const departmentButton =
    document.getElementById("departmentButton");

const departmentNotice =
    document.getElementById("departmentNotice");

if (departmentButton && departmentNotice) {

    departmentButton.addEventListener("click", function () {

        departmentNotice.classList.toggle("hidden");

        if (departmentNotice.classList.contains("hidden")) {

            departmentButton.textContent =
                "Show Department Notice";

        } else {

            departmentButton.textContent =
                "Hide Department Notice";

        }

    });

}


// =========================================
// APPLICATION FORM
// =========================================

const applicationForm =
    document.getElementById("applicationForm");

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

    if (errorElement) {
        errorElement.textContent = errorMessage;
    }

    if (field) {

        field.classList.add("validation-error");

        field.classList.remove("validation-success");

    }

}


// =========================================
// CLEAR ERROR
// =========================================

function clearError(field, errorId) {

    const errorElement =
        document.getElementById(errorId);

    if (errorElement) {
        errorElement.textContent = "";
    }

    if (field) {

        field.classList.remove("validation-error");

        field.classList.add("validation-success");

    }

}


// =========================================
// SET FIELD ERROR
// =========================================

function setFieldError(
    field,
    errorId,
    errorMessage
) {

    if (field) {
        field.setCustomValidity(errorMessage);
    }

    showError(
        field,
        errorId,
        errorMessage
    );

}


// =========================================
// CLEAR FIELD ERROR
// =========================================

function clearFieldError(
    field,
    errorId
) {

    if (field) {
        field.setCustomValidity("");
    }

    clearError(
        field,
        errorId
    );

}


// =========================================
// FULL NAME VALIDATION
// =========================================

if (fullname) {

    fullname.addEventListener("input", function () {

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
            !/^[A-Za-z ]+$/.test(fullname.value)
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

    });

}


// =========================================
// DATE OF BIRTH VALIDATION
// =========================================

if (dob) {

    dob.addEventListener("input", function () {

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

    });

}


// =========================================
// EMAIL VALIDATION
// =========================================

if (email) {

    email.addEventListener("input", function () {

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

    });

}


// =========================================
// PHONE VALIDATION
// =========================================

if (phone) {

    phone.addEventListener("input", function () {

        if (phone.value.trim() === "") {

            setFieldError(
                phone,
                "phoneError",
                "Phone number is required."
            );

        }

        else if (
            !/^[0-9]{10}$/.test(phone.value)
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

    });

}


// =========================================
// ADDRESS VALIDATION
// =========================================

if (address) {

    address.addEventListener("input", function () {

        if (address.value.trim() === "") {

            setFieldError(
                address,
                "addressError",
                "Address is required."
            );

        }

        else if (address.value.length < 10) {

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

    });

}


// =========================================
// DEPARTMENT VALIDATION
// =========================================

if (department) {

    department.addEventListener("change", function () {

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

    });

}


// =========================================
// DESIGNATION VALIDATION
// =========================================

if (designation) {

    designation.addEventListener("input", function () {

        if (designation.value.trim() === "") {

            setFieldError(
                designation,
                "designationError",
                "Designation is required."
            );

        }

        else if (designation.value.length < 3) {

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

    });

}


// =========================================
// EXPERIENCE VALIDATION
// =========================================

if (experience) {

    experience.addEventListener("input", function () {

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

    });

}


// =========================================
// SALARY VALIDATION
// =========================================

if (salary) {

    salary.addEventListener("input", function () {

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

    });

}


// =========================================
// JOINING DATE VALIDATION
// =========================================

if (joiningdate) {

    joiningdate.addEventListener("input", function () {

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

    });

}


// =========================================
// RESUME VALIDATION
// =========================================

if (resume) {

    resume.addEventListener("change", function () {

        if (resume.files.length === 0) {

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

    });

}


// =========================================
// TECHNICAL SKILLS VALIDATION
// =========================================

if (skills) {

    skills.addEventListener("input", function () {

        if (skills.value.trim() === "") {

            setFieldError(
                skills,
                "skillsError",
                "Technical skills are required."
            );

        }

        else if (skills.value.length < 2) {

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

    });

}


// =========================================
// MESSAGE VALIDATION
// =========================================

if (message) {

    message.addEventListener("input", function () {

        if (message.value.trim() === "") {

            setFieldError(
                message,
                "messageError",
                "Please explain why we should hire you."
            );

        }

        else if (message.value.length < 30) {

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

    });

}


// =========================================
// DECLARATION VALIDATION
// =========================================

if (declaration) {

    declaration.addEventListener("change", function () {

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

    });

}


// =========================================
// FORM SUBMIT
// =========================================

if (applicationForm) {

    applicationForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            if (!applicationForm.checkValidity()) {

                applicationForm.reportValidity();

                showNotification(
                    "Please correct the invalid fields."
                );

                return;

            }

            if (formSuccess) {
                formSuccess.classList.add("show");
            }

            showNotification(
                "Application submitted successfully!"
            );

            applicationForm.reset();

            const fields =
                applicationForm.querySelectorAll(
                    "input, select, textarea"
                );

            fields.forEach(function (field) {

                field.classList.remove(
                    "validation-error",
                    "validation-success"
                );

                field.setCustomValidity("");

            });

            const errors =
                applicationForm.querySelectorAll(".error");

            errors.forEach(function (error) {

                error.textContent = "";

            });

            setTimeout(function () {

                if (formSuccess) {
                    formSuccess.classList.remove("show");
                }

            }, 5000);

        }
    );

}


// =========================================
// FORM RESET
// =========================================

if (applicationForm) {

    applicationForm.addEventListener(
        "reset",
        function () {

            setTimeout(function () {

                if (formSuccess) {
                    formSuccess.classList.remove("show");
                }

                const errors =
                    applicationForm.querySelectorAll(".error");

                errors.forEach(function (error) {

                    error.textContent = "";

                });

                const fields =
                    applicationForm.querySelectorAll(
                        "input, select, textarea"
                    );

                fields.forEach(function (field) {

                    field.classList.remove(
                        "validation-error",
                        "validation-success"
                    );

                    field.setCustomValidity("");

                });

            }, 0);

        }
    );

}


// =========================================
// HELP & SUPPORT
// =========================================

const helpButton =
    document.getElementById("helpButton");

if (helpButton) {

    helpButton.addEventListener(
        "click",
        function () {

            showNotification(
                "Our support team is available to help you."
            );

        }
    );

}


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

    if (!notification || !notificationMessage) {
        return;
    }

    notificationMessage.textContent =
        message;

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

    item.addEventListener(
        "click",
        function () {

            item.classList.toggle("selected");

        }
    );

});


// =========================================
// API EMPLOYEE DATA
// =========================================

const loadEmployeesButton =
    document.getElementById(
        "loadEmployeesButton"
    );

const loading =
    document.getElementById("loading");

const apiError =
    document.getElementById("apiError");

const apiEmployeeTable =
    document.getElementById(
        "apiEmployeeTable"
    );

const apiEmployeeBody =
    document.getElementById(
        "apiEmployeeBody"
    );


// =========================================
// DIFFERENT PHONE NUMBERS
// =========================================

const phoneNumbers = [
    "9876543210",
    "9123456780",
    "9001234567",
    "9445678901",
    "9789012345",
    "9865432107",
    "9087654321",
    "9500123456",
    "9798765432",
    "9345678901"
];


// =========================================
// LOAD EMPLOYEE DATA FROM API
// =========================================

async function loadEmployeeData() {

    if (
        !loading ||
        !apiError ||
        !apiEmployeeTable ||
        !apiEmployeeBody
    ) {
        return;
    }

    loading.classList.add("show");

    apiError.classList.remove("show");

    apiEmployeeTable.classList.remove("show");

    apiEmployeeBody.innerHTML = "";


    try {

        // Fetch data from external API
        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );


        // Check whether API response is successful
        if (!response.ok) {

            throw new Error(
                "Unable to retrieve employee data."
            );

        }


        // Convert response into JSON
        const employees =
            await response.json();


        // Create table rows
        employees.forEach(function (
            employee,
            index
        ) {

            const row =
                document.createElement("tr");


            // ID
            const idCell =
                document.createElement("td");

            idCell.textContent =
                employee.id;


            // NAME
            const nameCell =
                document.createElement("td");

            nameCell.textContent =
                employee.name;


            // USERNAME
            const usernameCell =
                document.createElement("td");

            usernameCell.textContent =
                employee.username;


            // EMAIL
            const emailCell =
                document.createElement("td");

            emailCell.textContent =
                employee.email;


            // PHONE
            const phoneCell =
                document.createElement("td");

            phoneCell.textContent =
                phoneNumbers[index];


            // COMPANY
            const companyCell =
                document.createElement("td");

            companyCell.textContent =
                "XYZ Technologies";


            // Add cells to row
            row.appendChild(idCell);

            row.appendChild(nameCell);

            row.appendChild(usernameCell);

            row.appendChild(emailCell);

            row.appendChild(phoneCell);

            row.appendChild(companyCell);


            // Add row to table body
            apiEmployeeBody.appendChild(row);

        });


        // Display table
        apiEmployeeTable.classList.add("show");

    }

    catch (error) {

        apiError.textContent =
            "Error loading employee data: " +
            error.message;

        apiError.classList.add("show");

    }

    finally {

        loading.classList.remove("show");

    }

}


// =========================================
// LOAD BUTTON
// =========================================

if (loadEmployeesButton) {

    loadEmployeesButton.addEventListener(
        "click",
        function () {

            loadEmployeeData();

        }
    );

}


// =========================================
// LOAD API DATA WHEN PAGE OPENS
// =========================================

loadEmployeeData();


// =========================================
// TASK MANAGER - ADDITIONAL FUNCTIONALITY
// =========================================

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");


// =========================================
// LOAD TASKS FROM LOCAL STORAGE
// =========================================

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// =========================================
// SAVE TASKS TO LOCAL STORAGE
// =========================================

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// =========================================
// DISPLAY TASKS
// =========================================

function displayTasks() {

    if (!taskList) {
        return;
    }

    taskList.innerHTML = "";

    tasks.forEach(function (task) {

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {

            const taskToRemove = tasks.find(function (item) {
                return item === task;
            });

            if (taskToRemove) {

                tasks = tasks.filter(function (item) {
                    return item !== taskToRemove;
                });

                saveTasks();

                li.remove();

            }

        });

        li.appendChild(span);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}


// =========================================
// ADD TASK
// =========================================

if (addTaskButton && taskInput) {

    addTaskButton.addEventListener("click", function () {

        const task = taskInput.value.trim();

        if (task !== "") {

            tasks.push(task);

            saveTasks();

            displayTasks();

            taskInput.value = "";
        }

    });

}


// =========================================
// LOAD SAVED TASKS
// =========================================

displayTasks();


// =========================================
// ADDITIONAL JAVASCRIPT METHODS
// =========================================
// querySelector() is added here.
// The other requested methods are already
// used in the existing code above.

const taskInputElement =
    document.querySelector("#taskInput");

if (taskInputElement) {

    taskInputElement.addEventListener(
        "focus",
        function () {

            taskInputElement.classList.toggle(
                "task-input-active"
            );

        }
    );

    taskInputElement.addEventListener(
        "blur",
        function () {

            taskInputElement.classList.remove(
                "task-input-active"
            );

        }
    );

}


// querySelectorAll()
const taskItems =
    document.querySelectorAll("#taskList li");


// forEach()
taskItems.forEach(function (item) {

    item.classList.add("task-item");

});


// filter()
const filteredTasks =
    tasks.filter(function (task) {

        return task.trim() !== "";

    });


// find()
const firstTask =
    tasks.find(function (task) {

        return task.trim() !== "";

    });


// classList.add()
if (taskInputElement) {

    taskInputElement.classList.add(
        "task-input-ready"
    );

}


// classList.remove()
if (taskInputElement) {

    taskInputElement.classList.remove(
        "task-input-ready"
    );

}


// classList.toggle()
if (taskInputElement) {

    taskInputElement.classList.toggle(
        "task-input-checked"
    );

}


// addEventListener()
if (taskInputElement) {

    taskInputElement.addEventListener(
        "change",
        function () {

            console.log(
                "Task input changed."
            );

        }
    );

}