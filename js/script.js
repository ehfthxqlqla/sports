const medals = document.querySelectorAll(".fa-medal"),
questionMarks = document.querySelectorAll(".fa-question"),
defeats = document.querySelectorAll(".fa-xmark");

medals.forEach((element) => {
    element.classList.add("fa-bounce")
})

questionMarks.forEach((element) => {
    element.classList.add("fa-flip")
    element.style.setProperty("--fa-animation-duration", "1.5s")
})

defeats.forEach((element) => {
    element.classList.add("fa-shake")
})