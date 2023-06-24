(function styleClock() {
    clock.style.color = "white";
    clock.style.fontSize = "100px";
})();

(function styleBackground() {
    bgImage.src = `img/${chosenImage}`;
    bgImage.style.width = "100vw";
    bgImage.style.height = "100vh";
    bgImage.style.display = "flex";
    bgImage.style.position = "absolute";
    bgImage.style.top = "0px";
    bgImage.style.left = "0px";
    bgImage.style.zIndex = "-1";
})();

(function styleGreetings() {
    greeting.style.border = "none";
    greeting.style.background = "transparent";
})();
