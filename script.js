document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('find-ip-btn');
    const modal = document.getElementById('ip-modal');
    const closeBtn = document.getElementById('close-btn');
    const ipAddressParagraph = document.getElementById('ip-address');

    button.addEventListener('click', () => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                ipAddressParagraph.textContent = `Your public IP address is: ${data.ip}`;
                modal.style.display = 'block';
            })
            .catch(error => {
                console.error('Error fetching IP address:', error);
                ipAddressParagraph.textContent = 'Unable to retrieve IP address. Please try again later.';
                modal.style.display = 'block';
            });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
