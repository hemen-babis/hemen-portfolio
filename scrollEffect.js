    document.addEventListener("scroll", function() {
    const csCourses = document.querySelector("#cs-courses");
    const mathCourses = document.querySelector("#math-courses");

    const windowHeight = window.innerHeight;
    const csPosition = csCourses.getBoundingClientRect().top;
    const mathPosition = mathCourses.getBoundingClientRect().top;

    // Check if the section is in the viewport and trigger animations
    if (csPosition < windowHeight - 100) {
        csCourses.classList.add("show");
    }
    if (mathPosition < windowHeight - 100) {
        mathCourses.classList.add("show");
    }
});


