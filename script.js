document.getElementById('statusForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const customerCode = document.getElementById('customerCode').value.trim();
    const statusResult = document.getElementById('statusResult');

    if (!customerCode) {
        statusResult.classList.remove('hidden', 'success');
        statusResult.classList.add('error');
        statusResult.textContent = 'Please enter a valid code.';
        return;
    }

    // Simulate an API call to check the laundry status
    checkLaundryStatus(customerCode)
        .then(status => {
            statusResult.classList.remove('hidden', 'error');
            statusResult.classList.add('success');
            statusResult.textContent = `Your laundry is ${status}.`;
        })
        .catch(error => {
            statusResult.classList.remove('hidden', 'success');
            statusResult.classList.add('error');
            statusResult.textContent = 'Error checking status. Please try again.';
        });
});

// Simulated function to mimic backend API call
function checkLaundryStatus(code) {
    return new Promise((resolve, reject) => {
        // Simulate a delay for the "API" call
        setTimeout(() => {
            // Mock data for demonstration purposes
            const mockData = {
                'ABC123': 'Ready',
                'DEF456': 'Not Ready',
                'GHI789': 'In Progress'
            };

            if (mockData[code]) {
                resolve(mockData[code]);
            } else {
                reject('Invalid code');
            }
        }, 1000); // Simulate 1 second delay
    });
}
