let ISPLAYING = false;
let PLAYER = 0;
let PLAYERCOLORS = ["#FF0000" , "#0000FF"];
let GAMESIZE = 3;
let WINAMOUNT = 3;

let playerLabel = document.getElementById("player");

let gameSize = document.getElementById("gameSize");
let playerOneColor = document.getElementById("playerOneColor");
let playerTwoColor = document.getElementById("playerTwoColor");
let winAmount = document.getElementById("winAmount");

function StartGame()
{
    if (ISPLAYING && !confirm("Do you want to start a new game?"))
        return;

    GAMESIZE = gameSize.value;
    WINAMOUNT = winAmount.value;
    PLAYERCOLORS[0] = playerOneColor.value;
    PLAYERCOLORS[1] = playerTwoColor.value;

    GenerateGameGrid(GAMESIZE);
    ChooseStarter();
    ISPLAYING = true;
}


function GameButton(element)
{
    if (!ISPLAYING) return; 
    
    let row = element.getAttribute("ROW");
    let column = element.getAttribute("COLUMN");
    let state = element.getAttribute("state");
    
    if (state != "0") return;

    element.setAttribute("state",PLAYER); // OCCUPING TO CURRENT PLAYER
    element.style.backgroundColor = PLAYERCOLORS[PLAYER-1]; // VISUALISING IT

    if (CheckWin(row,column))
    {
        ISPLAYING = false;
        playerLabel.innerText = `PLAYER ${PLAYER} WON`;
    }
    else RefreshPlayerState();
}

function ChooseStarter()
{
    PLAYER = Math.floor(Math.random() * 2) + 1;
    RefreshPlayerState();
}

function RefreshPlayerState()
{
    PLAYER = PLAYER == 1 ? 2 : 1;
    playerLabel.innerText = `PLAYER: ${PLAYER}`;
    playerLabel.style.color = PLAYERCOLORS[PLAYER-1];
}

function RefreshWinAmount()
{
    winAmount.min = WINAMOUNT;
    winAmount.value = WINAMOUNT;
}

function CheckWin(row, column)
{
    let rStart = 0;
    let cStart = 0;
    while (GRID[rStart][column].getAttribute("state") != PLAYER && rStart < GAMESIZE) rStart++;
    console.log(GRID[rStart][column]);
    while (GRID[row][cStart].getAttribute("state") != PLAYER && cStart < GAMESIZE) cStart++;
    console.log(GRID[row][cStart]);
    
    let r = 0;
    let c = 0;
    while (r < GAMESIZE-rStart && GRID[r+rStart][column].getAttribute("state") == PLAYER) r++;
    while (c < GAMESIZE-cStart && GRID[row][c+cStart].getAttribute("state") == PLAYER) c++;
    
    return r >= WINAMOUNT || c>= WINAMOUNT;
}