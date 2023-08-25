document.querySelector('button').addEventListener('click', function() {
    alert('Button clicked!'); // Placeholder alert for button click
});

// Functionality to highlight websites on Enter press
document.getElementById('websites').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        let content = this.value.split('\n');
        let formattedContent = content.map(site => '<span class="highlight-pink">' + site + '</span>').join('<br>');
        this.innerHTML = formattedContent;
        this.scrollTop = this.scrollHeight; // Scroll to the bottom
    }
});
