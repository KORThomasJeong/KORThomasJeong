function displayWebhookContent(htmlContent) {
    const contentArea = document.getElementById('content-area');
    if (contentArea) {
        contentArea.innerHTML = htmlContent;
    } else {
        console.error('Error: div with ID "content-area" not found.');
    }
}

// Sample call for testing - to be triggered after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Sample HTML content
    const sampleContent = `
        <p>This is some <strong>sample content</strong> loaded by script.js.</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
        <p><em>Waiting for actual webhook data...</em></p>
    `;
    displayWebhookContent(sampleContent);
});
