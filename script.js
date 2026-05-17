document.getElementById('submitBtn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default form submission behavior if it was in a form tag

        // Get values from inputs
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const concern = document.getElementById('text').value.trim();

        // Validate inputs
            if(name === '' || email === '' || concern === '') {
                alert('Please fill in the required fields: Name, Email, and Concern.');
                return;
            }

        // Create an object for the new contact message
            const newMessage = {
                name: name,
                phone: phone,
                email: email,
                concern: concern,
                date: new Date().toLocaleString()
            };

        // Retrieve existing messages from local storage or initialize an empty array
        let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
            
        // Add new message to the array
        messages.push(newMessage);
            
        // Save the updated array back to local storage
        localStorage.setItem('contactMessages', JSON.stringify(messages));

        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        document.getElementById('text').value = '';

        // Show success message briefly
        const successMsg = document.getElementById('successMessage');
        successMsg.style.display = 'block';
        setTimeout(() => {
        successMsg.style.display = 'none';
        }, 3000);
            
    console.log("Contact information stored successfully in localStorage:", newMessage);
});