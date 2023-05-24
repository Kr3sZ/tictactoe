const MAXIMUM_SIZE = 20;
const MINIMUM_SIZE = 3;

let GRID = [];

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

        for (ROW=0; ROW<size; ROW++)
        {
            const GAMEROW = document.createElement("tr");

            let GRIDROW = [];

            // CALCULATING RESPONSIVE SIZES
            GAMEROW.style.height = `${100/size}%`;
            GAMEROW.style.width = `${100/size}%`;

            GAMETABLE.appendChild(GAMEROW);

            for (COLUMN=0; COLUMN<size; COLUMN++)
            {
                const GAMECOLUMN = document.createElement("td");

                // CALCULATING RESPONSIVE SIZES
                GAMECOLUMN.style.height = `${100/size}%`;
                GAMECOLUMN.style.width = `${100/size}%`;

                GAMEROW.appendChild(GAMECOLUMN);

                const GAMEBUTTON = document.createElement("div");
                GAMECOLUMN.appendChild(GAMEBUTTON);

                GAMEBUTTON.setAttribute("onclick", "GameButton(this);");
                GAMEBUTTON.setAttribute("ROW", ROW);
                GAMEBUTTON.setAttribute("COLUMN", COLUMN);
                GAMEBUTTON.setAttribute("state", "0")

                GRIDROW.push(GAMEBUTTON);
            }

            GRID.push(GRIDROW);
        }
    }
}

function ClearGame()
{
    GAME.innerHTML = ""; // CLEARING ALREADY DEFINED PLACES
}    
