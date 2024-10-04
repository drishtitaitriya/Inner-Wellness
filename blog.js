// Get the form and the blog list container
const blogForm = document.getElementById('blogForm');
const blogList = document.getElementById('blogList');

// Function to calculate the time difference
function timeSince(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return 'just now';
    }
}

// Event listener for form submission
blogForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the traditional way

    // Get the user input values
    const username = document.getElementById('username').value;
    const blogContent = document.getElementById('blogContent').value;

    // Create new blog post element
    const blogPost = document.createElement('div');
    blogPost.classList.add('blogPost');

    // Get the current date and time
    const postTime = new Date();

    // Add content to the blog post
    blogPost.innerHTML = `
        <h3>${username}</h3>
        <p>${blogContent}</p>
        <p class="timestamp">${timeSince(postTime)}</p>
    `;

    // Add the new blog post to the top of the blog list
    blogList.insertBefore(blogPost, blogList.firstChild);

    // Clear the form after submission
    blogForm.reset();

    // Update the time every minute
    setInterval(function() {
        const timestampElement = blogPost.querySelector('.timestamp');
        timestampElement.textContent = timeSince(postTime);
    }, 60000); // Update every 60 seconds
});


  
  
  