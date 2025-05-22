# N8N Webhook HTML Renderer

## Overview
This project provides a simple, client-side webpage (`index.html`) that can render HTML content. It's designed with the idea of displaying data that might be processed and sent as HTML by an N8N workflow via a webhook.

## How to Use
1.  **Open the webpage:** Simply open the `index.html` file in your preferred web browser.
2.  **Content Rendering:** The `script.js` file, which is linked in `index.html`, contains a JavaScript function called `displayWebhookContent(htmlString)`. This function is responsible for taking an HTML string and displaying it within the designated content area on the page. Upon loading, it displays some sample content.

## Simulating an N8N Webhook
For development, testing, or demonstration purposes, you can simulate an N8N webhook sending HTML content to this page:

1.  **Open `index.html`:** Make sure `index.html` is open in your web browser.
2.  **Open Developer Console:** Access your browser's developer console. (Usually by right-clicking on the page and selecting "Inspect" or "Inspect Element", then navigating to the "Console" tab, or by pressing F12).
3.  **Call the function:** Manually call the `displayWebhookContent()` function with your desired HTML string as an argument. For example:
    ```javascript
    displayWebhookContent('<h1>Hello from N8N!</h1><p>This is the summarized content sent via a simulated webhook call.</p>');
    ```
    You should see the content on the page update immediately.

## N8N Configuration (Conceptual)
In a real-world N8N scenario, the workflow to utilize such a setup might look conceptually like this:

1.  **Workflow Processing:** An N8N workflow would gather data, process it, and summarize it into an HTML format.
2.  **HTTP Request:** The workflow would then use an HTTP Request node (or a similar webhook-calling mechanism) to POST this generated HTML string to an actual server-side webhook endpoint.
3.  **Server-Side Handling & Client Update:** That server-side endpoint would then need a mechanism to receive this HTML and push it to the client viewing `index.html` (e.g., using WebSockets, Server-Sent Events, or by having the client poll for updates).

**Important Clarification:** This project (`index.html` and `script.js`) **only demonstrates the client-side rendering part.** It does *not* include a live server-side webhook listener or the infrastructure to bridge a POST request to the client. The `displayWebhookContent` function is used directly in the browser's console for simulation purposes.
