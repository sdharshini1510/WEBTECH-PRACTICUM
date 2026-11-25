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


    // Add notification animation

    notification.classList.add("show");


    // Remove animation after 3 seconds

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