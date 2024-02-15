document.addEventListener('DOMContentLoaded', function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        // Hide the iframe PDF viewer
        document.getElementById('pdf-viewer').style.display = 'none';
        // Show the download button
        document.getElementById('mobile-download').style.display = 'block';
    }
});
