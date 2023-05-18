let game = document.getElementById("game");
checkViewportSize();

window.addEventListener("resize", checkViewportSize);

function checkViewportSize()
{
    let vw = window.innerWidth;
    let vh = window.innerHeight;

    if (vw > vh)
    {
        game.style.height = "100vh";
        game.style.width = "100vh";
        console.log(`W:${vw} | H:${vh} | vw > vh`)
    }  
    else
    {
        game.style.height = "100vw";
        game.style.width = "100vw";
        console.log(`W:${vw} | H:${vh} | vw < vh`)
    }
}
