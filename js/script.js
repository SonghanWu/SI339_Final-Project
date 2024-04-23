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


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
  
overlay.addEventListener("click", closeModal);


document.getElementById('toggleImage').addEventListener('click', function() {
    var img = document.getElementById('toggleImage');
    if (img.src.includes('images/triangle1.jpg')) {
        img.src = 'images/triangle2.jpg';
    } else {
        img.src = 'images/triangle1.jpg';
    }
});

document.getElementById('imageSlider').addEventListener('input', function() {
    var value = this.value;
    document.getElementById('image1').style.opacity = value / 100;
});
