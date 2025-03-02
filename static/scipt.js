document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("start-btn");

    // Redirect to "/chat" when button is clicked
    startBtn.addEventListener("click", function () {
        window.location.href = "/chat";  // Matches your Flask route
    });
});


    // Smooth Fade-in Animation for Content
    document.querySelector(".overlay-text").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".overlay-text").style.opacity = "1";
        document.querySelector(".overlay-text").style.transition = "opacity 1s ease-in-out";
    }, 500);

    // Background Parallax Effect (Only applies if the page is scrollable)
    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        document.querySelector(".image-container").style.backgroundPositionY = -(scrollY * 0.5) + "px";
    });

    // Typing Effect for Welcome Text
    function typeEffect(element, speed) {
        let text = element.innerHTML;
        element.innerHTML = "";
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    typeEffect(welcomeText, 50); // Speed is 50ms per letter
;
