const dataContainer = document.getElementById('api-data');
document.addEventListener('DOMContentLoaded', () => {

// URL of the public API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Function to fetch user data
async function fetchUserData() {
    // Clear existing content
    dataContainer.innerHTML = '';
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Network response was not ok ${response.statusText}`);
        }
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        dataContainer.innerHTML = `<p>Error fetching user data: ${error.message}</p>`;
    }
}

// Function to display users on the web page
function displayUsers(users) {
    // Create a <ul> element
    const userList = document.createElement('ul');
    
    // Loop through the users array
    users.forEach(user => {
        // Create a <li> element
        const listItem = document.createElement('li');
        // Set the text content of the <li> to the user’s name
        listItem.textContent = user.name;
        // Append the <li> to userList
        userList.appendChild(listItem);
    });
    
    // Append userList to dataContainer
    dataContainer.appendChild(userList);
}

// Event listener for DOMContentLoaded
});