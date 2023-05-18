const GAME = document.getElementById("game");
const MENU = document.getElementById("menu");

CheckViewportSize();

window.addEventListener("resize", CheckViewportSize);

function CheckViewportSize()
{
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    

    GAME.style.width = "100vmin";
    GAME.style.height = "100vmin";
    
    MENU.style.width = vw > vh ? `${vw-GAME.offsetWidth}px` : "100vw";
    MENU.style.height = vw > vh ? "100vh" : `${vh-GAME.offsetHeight}px`;
    
    console.log(`VIEWPORT W:${vw} | H:${vh}\nGAME     W:${GAME.offsetWidth} | H:${GAME.offsetHeight}\nMENU     W:${MENU.offsetWidth} | H:${MENU.offsetHeight}`);
}
