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
    let row = element.getAttribute("ROW");
    let column = element.getAttribute("COLUMN");
    let state = element.getAttribute("state");

    // console.log(`${row}:${column} | ${state}`);

    if (state!="0") return;
    
    element.setAttribute("state",PLAYER); // OCCUPING TO CURRENT PLAYER
    element.style.backgroundColor = PLAYERCOLORS[PLAYER-1]; // VISUALISING IT

    CheckWin(row,column);

    RefreshPlayerState();
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
    winAmount.min = 3;
    winAmount.value = 3;
}

function CheckWin(row, column)
{
    let current = GRID[row][column];

    let left = column;
    //let right = GAMESIZE - (column + 1);
    let top = row;
    //let bottom = GAMESIZE - (row + 1);

    let leftStart = 0;
    let topStart = 0;

    if (left >= WINAMOUNT-1)
    {
        leftStart = WINAMOUNT-1;
    }
    if (top >= WINAMOUNT-1)
    {
        topStart = winAmount -1;
    }
}