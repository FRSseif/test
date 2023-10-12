document.addEventListener('DOMContentLoaded', function() {
    // Add tooltips to each element
    var elements = document.querySelectorAll('img, .square, audio, button, video');
    elements.forEach(function(element) {
        tippy(element, {
            content: 'Tooltip Text',
            animation: 'scale',
            interactive: true,
            trigger: 'click',
        });
    });

    // Close tooltip on click outside
    document.addEventListener('click', function(event) {
        var tooltips = document.querySelectorAll('.tippy-popper');
        tooltips.forEach(function(tooltip) {
            if (!tooltip.contains(event.target)) {
                tippy(tooltip, { duration: 0 }).hide();
            }
        });
    });
});