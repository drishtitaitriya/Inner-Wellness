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
  
 
const blogForm = document.getElementById('blogForm');
const blogList = document.getElementById('blogList');

// Load blogs from localStorage
document.addEventListener("DOMContentLoaded", loadBlogs);

blogForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const blogContent = document.getElementById('blogContent').value;
    const blogImage = document.getElementById('blogImage').files[0];

    const reader = new FileReader();
    reader.onload = function(event) {
        const imageData = event.target.result;
        const blogPost = { username, blogContent, imageData, likes: 0, timestamp: new Date().toISOString() };
        
        saveBlog(blogPost);
        addBlogToDOM(blogPost);
        blogForm.reset();
    };

    if (blogImage) {
        reader.readAsDataURL(blogImage);
    } else {
        const blogPost = { username, blogContent, imageData: "", likes: 0, timestamp: new Date().toISOString() };
        saveBlog(blogPost);
        addBlogToDOM(blogPost);
        blogForm.reset();
    }
});

function addBlogToDOM(blogPost) {
    const blogDiv = document.createElement('div');
    blogDiv.classList.add('blogPost');
    
    blogDiv.innerHTML = `
        <h3>${blogPost.username}</h3>
        ${blogPost.imageData ? `<img src="${blogPost.imageData}" alt="Blog Image">` : ""}
        <p>${blogPost.blogContent}</p>
        <p class="timestamp">${new Date(blogPost.timestamp).toLocaleString()}</p>
        <button onclick="editBlog(this)">Edit</button>
        <button onclick="deleteBlog(this)">Delete</button>
        <button onclick="likeBlog(this)"><i class="bi bi-hand-thumbs-up"></i> <span>${blogPost.likes}</span></button>
    `;

    blogList.prepend(blogDiv);
}

function saveBlog(blogPost) {
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.push(blogPost);
    localStorage.setItem("blogs", JSON.stringify(blogs));
}

function loadBlogs() {
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.forEach(addBlogToDOM);
}

function editBlog(button) {
    const blogDiv = button.parentElement;
    const content = blogDiv.querySelector("p").innerText;
    const newText = prompt("Edit your blog:", content);
    
    if (newText) {
        blogDiv.querySelector("p").innerText = newText;
        updateLocalStorage();
    }
}

function deleteBlog(button) {
    button.parentElement.remove();
    updateLocalStorage();
}

function likeBlog(button) {
    let likes = button.querySelector("span");
    likes.innerText = parseInt(likes.innerText) + 1;
    updateLocalStorage();
}

function updateLocalStorage() {
    let blogs = [];
    document.querySelectorAll(".blogPost").forEach(blog => {
        blogs.push({
            username: blog.querySelector("h3").innerText,
            blogContent: blog.querySelector("p").innerText,
            imageData: blog.querySelector("img") ? blog.querySelector("img").src : "",
            likes: parseInt(blog.querySelector("span").innerText),
            timestamp: blog.querySelector(".timestamp").innerText
        });
    });
    localStorage.setItem("blogs", JSON.stringify(blogs));
}

  
  
  
