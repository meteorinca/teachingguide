async function renderMarkdown() {
    const contentDiv = document.getElementById('content');
    
    try {
        // Fetch the markdown file
        const response = await fetch('content.md');
        if (!response.ok) throw new Error('Markdown file not found');
        
        const text = await response.text();
        
        // Convert to HTML and inject
        contentDiv.innerHTML = marked.parse(text);
        
        // Remove loading state for a smooth fade-in
        contentDiv.classList.remove('loading');
    } catch (error) {
        contentDiv.innerHTML = `<p style="color:red">Error loading content: ${error.message}</p>`;
    }
}

document.addEventListener('DOMContentLoaded', renderMarkdown);