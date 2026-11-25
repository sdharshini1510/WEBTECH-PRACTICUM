/* =========================================
   EMPLOYEE MANAGEMENT SYSTEM
   JAVASCRIPT
========================================= */


/* =========================================
   WELCOME BUTTON
========================================= */

const welcomeButton =
    document.querySelector("#welcomeButton");

welcomeButton.addEventListener("click", function () {

    showNotification(
        "Welcome to the Employee Management System!"
    );

});


/* =========================================
   EMPLOYEE CARD
========================================= */

const employeeButton =
    document.querySelector("#employeeButton");

const employeeCard =
    document.querySelector("#employeeCard");

const closeEmployeeCard =
    document.querySelector("#closeEmployeeCard");


employeeButton.addEventListener("click", function () {

    employeeCard.style.display = "block";

});


closeEmployeeCard.addEventListener("click", function () {

    employeeCard.style.display = "none";

});


/* =========================================
   DEPARTMENT NOTICE
========================================= */

const departmentButton =
    document.querySelector("#departmentButton");

const departmentNotice =
    document.querySelector("#departmentNotice");


departmentButton.addEventListener("click", function () {

    if (departmentNotice.style.display === "block") {

        departmentNotice.style.display = "none";

    } else {

        departmentNotice.style.display = "block";

    }

});


/* =========================================
   APPLICATION FORM
========================================= */

const applicationForm =
    document.querySelector("#applicationForm");

const applicationSuccess =
    document.querySelector("#applicationSuccess");


applicationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    applicationSuccess.textContent =
        "Application submitted successfully!";

    applicationSuccess.style.display = "block";

    applicationSuccess.style.backgroundColor = "#d1e7dd";
    applicationSuccess.style.color = "#0f5132";
    applicationSuccess.style.padding = "15px";
    applicationSuccess.style.marginTop = "15px";
    applicationSuccess.style.borderRadius = "6px";

    applicationForm.reset();

});


/* =========================================
   API EMPLOYEE DATA
========================================= */

const loadEmployeesButton =
    document.querySelector("#loadEmployeesButton");

const apiEmployeeBody =
    document.querySelector("#apiEmployeeBody");

const loadingMessage =
    document.querySelector("#loadingMessage");

const apiError =
    document.querySelector("#apiError");


loadEmployeesButton.addEventListener(
    "click",
    function () {

        loadingMessage.textContent =
            "Loading employee data...";

        apiError.textContent = "";

        apiEmployeeBody.innerHTML = "";

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {

                return response.json();

            })
            .then(function (employees) {

                loadingMessage.textContent = "";

                employees.forEach(function (employee) {

                    const row =
                        document.createElement("tr");

                    row.innerHTML = `
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.username}</td>
                        <td>${employee.email}</td>
                        <td>${employee.phone}</td>
                        <td>${employee.company.name}</td>
                    `;

                    apiEmployeeBody.appendChild(row);

                });

            })
            .catch(function (error) {

                loadingMessage.textContent = "";

                apiError.textContent =
                    "Unable to load employee data.";

                console.error(error);

            });

    }
);


/* =========================================
   NOTIFICATION
========================================= */

function showNotification(message) {

    const notification =
        document.querySelector("#notificationMessage");

    notification.textContent = message;

    notification.style.display = "block";

    setTimeout(function () {

        notification.style.display = "none";

    }, 3000);

}


/* =========================================
   TASK MANAGER
========================================= */

let tasks = JSON.parse(
    localStorage.getItem("employeeTasks")
) || [];


/* =========================================
   TASK ELEMENTS
========================================= */

const taskForm =
    document.querySelector("#taskForm");

const taskTitle =
    document.querySelector("#taskTitle");

const taskEmployee =
    document.querySelector("#taskEmployee");

const taskDepartment =
    document.querySelector("#taskDepartment");

const taskPriority =
    document.querySelector("#taskPriority");

const taskStatus =
    document.querySelector("#taskStatus");

const taskTableBody =
    document.querySelector("#taskTableBody");

const taskList =
    document.querySelector("#taskList");

const taskSearch =
    document.querySelector("#taskSearch");

const taskFilter =
    document.querySelector("#taskFilter");


/* =========================================
   SAVE TASKS
========================================= */

function saveTasks() {

    localStorage.setItem(
        "employeeTasks",
        JSON.stringify(tasks)
    );

}


/* =========================================
   ADD TASK
========================================= */

taskForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const newTask = {

            id: Date.now(),

            title: taskTitle.value,

            employee: taskEmployee.value,

            department: taskDepartment.value,

            priority: taskPriority.value,

            status: taskStatus.value

        };


        tasks.push(newTask);

        saveTasks();

        displayTasks();

        taskForm.reset();

        showNotification(
            "Task added successfully!"
        );

    }
);


/* =========================================
   DISPLAY TASKS
========================================= */

function displayTasks() {

    taskTableBody.innerHTML = "";

    taskList.innerHTML = "";


    let filteredTasks = tasks.filter(
        function (task) {

            const searchValue =
                taskSearch.value.toLowerCase();

            const matchesSearch =
                task.title.toLowerCase()
                    .includes(searchValue) ||
                task.employee.toLowerCase()
                    .includes(searchValue) ||
                task.department.toLowerCase()
                    .includes(searchValue);

            const matchesStatus =
                taskFilter.value === "All" ||
                task.status === taskFilter.value;

            return matchesSearch && matchesStatus;

        }
    );


    filteredTasks.forEach(
        function (task) {

            createTaskRow(task);

            createTaskListItem(task);

        }
    );

}


/* =========================================
   CREATE TASK TABLE ROW
========================================= */

function createTaskRow(task) {

    const row =
        document.createElement("tr");


    const statusClass =
        task.status === "Completed"
            ? "status-completed"
            : task.status === "In Progress"
                ? "status-progress"
                : "status-pending";


    row.innerHTML = `

        <td>${task.title}</td>

        <td>${task.employee}</td>

        <td>${task.department}</td>

        <td>${task.priority}</td>

        <td class="${statusClass}">
            ${task.status}
        </td>

        <td>

            <button
                class="edit-task"
                data-id="${task.id}">
                Edit
            </button>

            <button
                class="complete-task"
                data-id="${task.id}">
                Complete
            </button>

            <button
                class="delete-task"
                data-id="${task.id}">
                Delete
            </button>

        </td>

    `;


    taskTableBody.appendChild(row);

}


/* =========================================
   CREATE TASK LIST ITEM
========================================= */

function createTaskListItem(task) {

    const li =
        document.createElement("li");


    li.innerHTML = `

        <strong>${task.title}</strong>

        -
        ${task.employee}

        -
        ${task.department}

        -
        ${task.status}

    `;


    taskList.appendChild(li);

}


/* =========================================
   SEARCH TASKS
========================================= */

taskSearch.addEventListener(
    "input",
    function () {

        displayTasks();

    }
);


/* =========================================
   FILTER TASKS
========================================= */

taskFilter.addEventListener(
    "change",
    function () {

        displayTasks();

    }
);


/* =========================================
   TASK TABLE ACTIONS
========================================= */

taskTableBody.addEventListener(
    "click",
    function (event) {

        const id =
            Number(event.target.dataset.id);


        /* DELETE */

        if (
            event.target.classList.contains(
                "delete-task"
            )
        ) {

            tasks = tasks.filter(
                function (task) {

                    return task.id !== id;

                }
            );


            saveTasks();

            displayTasks();

            showNotification(
                "Task deleted successfully!"
            );

        }


        /* COMPLETE */

        else if (
            event.target.classList.contains(
                "complete-task"
            )
        ) {

            const task =
                tasks.find(
                    function (task) {

                        return task.id === id;

                    }
                );


            if (task) {

                task.status = "Completed";

            }


            saveTasks();

            displayTasks();

            showNotification(
                "Task marked as completed!"
            );

        }


        /* EDIT */

        else if (
            event.target.classList.contains(
                "edit-task"
            )
        ) {

            const task =
                tasks.find(
                    function (task) {

                        return task.id === id;

                    }
                );


            if (task) {

                taskTitle.value =
                    task.title;

                taskEmployee.value =
                    task.employee;

                taskDepartment.value =
                    task.department;

                taskPriority.value =
                    task.priority;

                taskStatus.value =
                    task.status;


                tasks = tasks.filter(
                    function (item) {

                        return item.id !== id;

                    }
                );


                saveTasks();

                displayTasks();

                taskTitle.focus();

                showNotification(
                    "Task loaded for editing."
                );

            }

        }

    }
);


/* =========================================
   QUESTION 14 EXTRA JAVASCRIPT
========================================= */


/*
   querySelector()
*/

const session14Details =
    document.querySelector(
        "#departmentDetails"
    );


/*
   querySelectorAll()
*/

const session14Sections =
    document.querySelectorAll(
        ".animated-section"
    );


/*
   forEach()
*/

session14Sections.forEach(
    function (section) {

        /*
           addEventListener()
        */

        section.addEventListener(
            "mouseenter",
            function () {

                /*
                   classList.add()
                */

                section.classList.add(
                    "session14-active"
                );

            }
        );


        section.addEventListener(
            "mouseleave",
            function () {

                /*
                   classList.remove()
                */

                section.classList.remove(
                    "session14-active"
                );

            }
        );

    }
);


/*
   details toggle

   classList.toggle()
*/

if (session14Details) {

    session14Details.addEventListener(
        "toggle",
        function () {

            session14Details.classList.toggle(
                "session14-active"
            );

        }
    );

}


/* =========================================
   APPLICATION SETTING CUSTOM TOGGLE
========================================= */

const notificationToggle =
    document.querySelector("#notificationToggle");

const settingStatus =
    document.querySelector("#settingStatus");

const toggleText =
    document.querySelector(".toggle-text");


/* Load saved setting from Local Storage */

const savedNotificationSetting =
    localStorage.getItem("notificationSetting");


if (savedNotificationSetting === "enabled") {

    notificationToggle.checked = true;

    settingStatus.textContent =
        "Notifications are enabled.";

    toggleText.textContent =
        "Notifications Enabled";

} else {

    notificationToggle.checked = false;

    settingStatus.textContent =
        "Notifications are disabled.";

    toggleText.textContent =
        "Notifications Disabled";

}


/* Update setting when toggle is changed */

notificationToggle.addEventListener(
    "change",
    function () {

        if (notificationToggle.checked) {

            localStorage.setItem(
                "notificationSetting",
                "enabled"
            );

            settingStatus.textContent =
                "Notifications are enabled.";

            toggleText.textContent =
                "Notifications Enabled";

            showNotification(
                "Employee notifications enabled."
            );

        } else {

            localStorage.setItem(
                "notificationSetting",
                "disabled"
            );

            settingStatus.textContent =
                "Notifications are disabled.";

            toggleText.textContent =
                "Notifications Disabled";

            showNotification(
                "Employee notifications disabled."
            );

        }

    }
);


/* =========================================
   INITIAL DISPLAY
========================================= */

displayTasks();