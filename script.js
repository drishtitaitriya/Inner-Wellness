
// Get all navbar links
const navLinks = document.querySelectorAll("#navbar li a");

// Get current page URL
const currentPage = window.location.pathname.split("/").pop(); 

// Loop through all navbar links
navLinks.forEach(link => {
    // Get the href attribute of each link
    const linkPage = link.getAttribute("href");

    // Check if the current URL matches the link's href
    if (linkPage === currentPage) {
        link.classList.add("active"); // Add active class
    } else {
        link.classList.remove("active"); // Remove active class from others
    }
});

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}









