let gameTable = document.getElementById("game").getElementsByTagName("table")[0];



function generateCell(size)
{
    if (size > 40 || size < 3)
        console.log("INCORRECT CELL SIZE");
    else
    {
        gameTable.innerHTML = "";
        let index = 0;
        for (i=0; i<size; i++)
        {
            const row = document.createElement("tr");

            row.style.height = `${100/size}%`;
            row.style.width = `${100/size}%`;

            gameTable.appendChild(row);
            for (j=0; j<size; j++)
            {
                index++;

                const column = document.createElement("td");

                column.style.height = `${100/size}%`;
                column.style.width = `${100/size}%`;

                row.appendChild(column);

                const columnButton = document.createElement("button");
                column.appendChild(columnButton);

                columnButton.setAttribute("onclick", `gomb(${index}, this);`);
                columnButton.setAttribute("x", j);
                columnButton.setAttribute("y", i);
                columnButton.innerText = index;
            }
        }
    }
}


function gomb(id, element)
{
    console.log(`${id}, ${element.getAttribute("x")}:${element.getAttribute("y")}`);
    console.log(element);
}