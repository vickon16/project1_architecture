
document.querySelector(".hamburger-menu").addEventListener("click", ()=> {
    document.querySelector(".container-fluid").classList.toggle("change");
})

// Set the scroll behavior of a button
document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior="smooth";
    // This code is to clear the scroll behavior of the selected button.
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior="unset";
    }, 1000)
});

// to display the container element page on the page
window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add("display")
    }, 3000);
}
