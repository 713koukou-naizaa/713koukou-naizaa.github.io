
document.addEventListener("mousemove", (event) => {
    // get mouse position
    const MOUSE_X = (event.pageX / document.documentElement.scrollWidth) * 100;
    const MOUSE_Y = (event.pageY / document.documentElement.scrollHeight) * 100;

    // set css radial gradient position variables based on mouse for follow
    document.documentElement.style.setProperty("--x", `${MOUSE_X}%`);
    document.documentElement.style.setProperty("--y", `${MOUSE_Y}%`);
});

document.addEventListener('DOMContentLoaded', function()
{
    const images = document.querySelectorAll('.projects-picture');
    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() { openLightbox(this.src, this.alt); });
    });
});

function openLightbox(src, alt)
{
    const modal = document.createElement('div');
    modal.className = 'lightbox-modal show';
    modal.innerHTML = `<img class="lightbox-image" src="${src}" alt="${alt}">`;
    document.body.appendChild(modal);
    modal.addEventListener('click', closeLightbox);
}

function closeLightbox()
{
    const modal = document.querySelector('.lightbox-modal');
    if (modal) { modal.remove(); }
}
