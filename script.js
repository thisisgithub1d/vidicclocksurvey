document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('close-btn');
    const feedbackContainer = document.getElementById('feedback-container');
    const infoBtn = document.querySelector('footer .icon-placeholder');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            // This is a simple hide effect. In a real app, you might want to
            // navigate away or send a message to the parent application.
            if (feedbackContainer) {
                feedbackContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                feedbackContainer.style.opacity = '0';
                feedbackContainer.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    // You could hide it completely or remove it from the DOM
                    feedbackContainer.style.display = 'none'; 
                    // Or perhaps show a thank you message.
                    // For now, we just inform the user via an alert.
                    alert('Feedback screen closed.');
                }, 500); // Wait for the transition to finish
            }
        });
    }

    if (infoBtn) {
        infoBtn.addEventListener('click', () => {
            alert('Help & Information:\n\nThis screen is for collecting feedback to improve the Vedic Clock app. Please select your preferred language to take the survey. Your input is greatly appreciated! \n\nFor support, contact support@vedicclock.com.');
        });
    }
});
