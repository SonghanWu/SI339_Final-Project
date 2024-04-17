document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.link-box').forEach(function(box) {
        box.addEventListener('mouseover', function() {
            var style = window.getComputedStyle(this);
            var newColor = style.backgroundColor;
            var lighterColor = lightenColor(newColor, 0.7);
            if (lighterColor) {
                document.body.style.backgroundColor = lighterColor;
            }
        });
        box.addEventListener('mouseout', function() {
            document.body.style.backgroundColor = 'transparent';
        });
    });
});

function lightenColor(rgb, factor) {
    let color = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    let r = parseInt(color[1]);
    let g = parseInt(color[2]);
    let b = parseInt(color[3]);

    r = Math.min(255, r + 255 * factor);
    g = Math.min(255, g + 255 * factor);
    b = Math.min(255, b + 255 * factor);

    return `rgb(${r}, ${g}, ${b})`;
}
