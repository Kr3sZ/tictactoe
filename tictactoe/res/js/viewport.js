const GAME = document.getElementById("game");
const MENU = document.getElementById("menu");
const BODY = document.getElementsByTagName("body")[0];

CheckViewportSize();

window.addEventListener("resize", CheckViewportSize);

function CheckViewportSize()
{
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    
    // RESPONSIVITY FOR GAME ON THE LEFT
    GAME.style.width = "100vmin";
    GAME.style.height = "100vmin";

    // RESPONSIVITY FOR MENU ON THE RIGHT
    MENU.style.width = vw > vh ? `${vw-GAME.offsetWidth}px` : "100vw";
    MENU.style.height = vw > vh ? "100vh" : `${vh-GAME.offsetHeight}px`;

    BODY.style.overflow = vw > vh ? "hidden" : "scroll"; // RESPONSIVITY FOR SCROLLBAR
    
    // console.log(`VIEWPORT W:${vw} | H:${vh}\nGAME     W:${GAME.offsetWidth} | H:${GAME.offsetHeight}\nMENU     W:${MENU.offsetWidth} | H:${MENU.offsetHeight}\n${BODY.style.overflow}`);
}
