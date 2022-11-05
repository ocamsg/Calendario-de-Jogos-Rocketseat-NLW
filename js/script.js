/*Toda vez que for executada esta função, sera criado um card novo*/

function createGame (player, hour, player2){
    return `
    <li>
        <img src="./assets/${player}.svg" alt="brasil">
        <strong>16:00</strong>
        <img src="./assets/southAfrica.svg" alt="">
    </li>
    `
}

function createCard(date,day, games){  	
    return `

    <div class="card">
            <h2>${date} <span>${day}</span></h2>
            <ul>
               ${games}
            </ul>
        </div>
    `
}

document.querySelector('.app').innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt=" Logo da NLW">
    </header>
    <main id="cards">
        ${createCard('24/11', "quinta",  createGame())} 
        ${createCard('28/11', "quinta",  createGame())} 
        ${createCard('02/12', "quinta",  createGame())} 
    </main>
`

/* ${createCard()} => criar uma interpolação */