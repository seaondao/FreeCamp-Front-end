document.addEventListener('DOMContentLoaded', function () {
    // Select all header elements
    const headers = document.querySelectorAll('header');

    // Select the navbar
    const navbar = document.getElementById('navbar');

    // Create navigation links dynamically based on headers
    headers.forEach(header => {
        console.log(header)
        // Create a new anchor element
        const link = document.createElement('a');

        // Set the href attribute to the corresponding section ID
        link.href = `#${header.parentElement.id}`;

        // Set the class for styling
        link.className = 'nav-link';

        // Set the text content of the link to the trimmed text content of the header
        link.textContent = header.textContent.trim();

        // Append the link to the navbar
        navbar.appendChild(link);
    });
});