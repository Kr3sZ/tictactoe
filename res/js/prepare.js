const MAXIMUM_SIZE = 20;
const MINIMUM_SIZE = 3;

function GenerateGameGrid(size)
{
    if (size > MAXIMUM_SIZE || size < MINIMUM_SIZE)
        console.error("INCORRECT SIZE")
    else
    {
        ClearGame();

        const GAMETABLE = document.createElement("table"); 
        GAMETABLE.id = "gametable"
        GAME.appendChild(GAMETABLE);

        for (Y=0; Y<size; Y++)
        {
            const GAMEROW = document.createElement("tr");

            // CALCULATING RESPONSIVE SIZES
            GAMEROW.style.height = `${100/size}%`;
            GAMEROW.style.width = `${100/size}%`;

            GAMETABLE.appendChild(GAMEROW);

            for (X=0; X<size; X++)
            {
                const GAMECOLUMN = document.createElement("td");

                // CALCULATING RESPONSIVE SIZES
                GAMECOLUMN.style.height = `${100/size}%`;
                GAMECOLUMN.style.width = `${100/size}%`;

                GAMEROW.appendChild(GAMECOLUMN);

                const GAMEBUTTON = document.createElement("div");
                GAMECOLUMN.appendChild(GAMEBUTTON);

                GAMEBUTTON.setAttribute("onclick", "GameButton(this);");
                GAMEBUTTON.setAttribute("x", X);
                GAMEBUTTON.setAttribute("y", Y);
                GAMEBUTTON.setAttribute("state", "0")
            }
        }
    }
}

function ClearGame()
{
    GAME.innerHTML = ""; // CLEARING ALREADY DEFINED PLACES
}    
