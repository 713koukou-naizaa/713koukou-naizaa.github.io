
document.addEventListener("mousemove", (event) => {
    // get mouse position
    const MOUSE_X = (event.pageX / document.documentElement.scrollWidth) * 100;
    const MOUSE_Y = (event.pageY / document.documentElement.scrollHeight) * 100;

    // set css radial gradient position variables based on mouse for follow
    document.documentElement.style.setProperty("--x", `${MOUSE_X}%`);
    document.documentElement.style.setProperty("--y", `${MOUSE_Y}%`);
});
