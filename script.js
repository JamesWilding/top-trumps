let playerCards=[]
let cpuCards=[]
let totalPlayerCards = 0
let totalCpuCards = 0
let playerPic = 0
let playerName = 0
let playerHP = 0
let playerAtt = 0
let playerDef = 0
let playerSPAtt = 0
let playerSPDef = 0
let playerSpd = 0
let singlePlayerCard = 0
let singleCpuCard = 0
var hideThis1 = document.getElementById("computer-hp-display");
var hideThis2 = document.getElementById("computer-att-display");
var hideThis3 = document.getElementById("computer-def-display");
var hideThis4 = document.getElementById("computer-SPA-display");
var hideThis5 = document.getElementById("computer-SPD-display");
var hideThis6 = document.getElementById("computer-SP-display");

var showThis1 = document.getElementById("computer-hp-display");
var rehideThis2 = document.getElementById("computer-att-display");
var rehideThis3 = document.getElementById("computer-def-display");
var rehideThis4 = document.getElementById("computer-SPA-display");
var rehideThis5 = document.getElementById("computer-SPD-display");
var rehideThis6 = document.getElementById("computer-SP-display");
const pokedex1 = [
    { id: 1,
    name: "Bulbasaur",
    HP: 45,
    Attack: 49,
    Defense: 49,
    SpAttack: 65,
    SpDefense: 65,
    Speed: 45,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png"
    },
    { id: 2,
    name: "Ivysaur",
    HP: 60,
    Attack: 62,
    Defense: 63,
    SpAttack: 80,
    SpDefense: 80,
    Speed: 60,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
    },
    { id: 3,
    name: "Venusaur",
    HP: 80,
    Attack: 82,
    Defense: 83,
    SpAttack: 100,
    SpDefense: 100,
    Speed: 80,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
    },
    { id: 4,
    name: "Charmander",
    HP: 39,
    Attack: 52,
    Defense: 43,
    SpAttack: 60,
    SpDefense: 50,
    Speed: 65,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/004.png",
    },
    { id: 5,
    name: "Charmeleon",
    HP: 58,
    Attack: 64,
    Defense: 58,
    SpAttack: 80,
    SpDefense: 65,
    Speed: 80,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/005.png",
    },
    
    { id: 6,
    name: "Charizard",
    HP: 78,
    Attack: 84,
    Defense: 78,
    SpAttack: 109,
    SpDefense: 85,
    Speed: 100,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/006.png",
    },
    { id: 7,
    name: "Squirtle",
    HP: 44,
    Attack: 48,
    Defense: 65,
    SpAttack: 50,
    SpDefense: 64,
    Speed: 43,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/007.png",
    },
    { id: 8,
    name: "Wartortle",
    HP: 59,
    Attack: 63,
    Defense: 80,
    SpAttack: 65,
    SpDefense: 80,
    Speed: 58,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/008.png",
    },
    { id: 9,
    name: "Blastoise",
    HP: 79,
    Attack: 83,
    Defense: 100,
    SpAttack: 85,
    SpDefense: 105,
    Speed: 78,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/009.png",
    },
    { id: 10,
    name: "Caterpie",
    HP: 45,
    Attack: 30,
    Defense: 35,
    SpAttack: 20,
    SpDefense: 20,
    Speed: 45,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/010.png",
    },
    { id: 11,
    name: "Metapod",
    HP: 50,
    Attack: 20,
    Defense: 55,
    SpAttack: 25,
    SpDefense: 25,
    Speed: 30,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/011.png",
    },
    { id: 12,
    name: "Butterfree",
    HP: 60,
    Attack: 45,
    Defense: 50,
    SpAttack: 90,
    SpDefense: 80,
    Speed: 70,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/012.png",
    },
    { id: 13,
    name: "Weedle",
    HP: 40,
    Attack: 35,
    Defense: 30,
    SpAttack: 20,
    SpDefense: 20,
    Speed: 50,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/013.png",
    },
    { id: 14,
    name: "Kakuna",
    HP: 45,
    Attack: 25,
    Defense: 50,
    SpAttack: 25,
    SpDefense: 25,
    Speed: 35,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/014.png",
    },
    { id: 15,
    name: "Beedrill",
    HP: 65,
    Attack: 90,
    Defense: 40,
    SpAttack: 45,
    SpDefense: 80,
    Speed: 75,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/015.png",
    },
    { id: 16,
    name: "Pidgey",
    HP: 40,
    Attack: 45,
    Defense: 40,
    SpAttack: 35,
    SpDefense: 35,
    Speed: 56,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/016.png",
    },
    { id: 17,
    name: "Pidgeotto",
    HP: 63,
    Attack: 60,
    Defense: 55,
    SpAttack: 50,
    SpDefense: 50,
    Speed: 71,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/017.png",
    },
    { id: 18,
    name: "Pidgeot",
    HP: 83,
    Attack: 80,
    Defense: 75,
    SpAttack: 70,
    SpDefense: 70,
    Speed: 101,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/018.png",
    },
    { id: 19,
    name: "Rattata",
    HP: 30,
    Attack: 56,
    Defense: 35,
    SpAttack: 25,
    SpDefense: 35,
    Speed: 72,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/019.png",
    },
    { id: 20,
    name: "Raticate",
    HP: 55,
    Attack: 81,
    Defense: 60,
    SpAttack: 50,
    SpDefense: 70,
    Speed: 97,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/020.png",
    },
    { id: 21,
    name: "Spearow",
    HP: 40,
    Attack: 60,
    Defense: 30,
    SpAttack: 31,
    SpDefense: 31,
    Speed: 70,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/021.png",
    },
    { id: 22,
    name: "Fearow",
    HP: 65,
    Attack: 90,
    Defense: 65,
    SpAttack: 61,
    SpDefense: 61,
    Speed: 100,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/022.png",
    },
    { id: 23,
    name: "Ekans",
    HP: 35,
    Attack: 60,
    Defense: 44,
    SpAttack: 40,
    SpDefense: 54,
    Speed: 55,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/023.png",
    },
    { id: 24,
    name: "Arbok",
    HP: 60,
    Attack: 95,
    Defense: 69,
    SpAttack: 65,
    SpDefense: 79,
    Speed: 80,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/024.png",
    },
    { id: 25,
    name: "Pikachu",
    HP: 35,
    Attack: 55,
    Defense: 40,
    SpAttack: 50,
    SpDefense: 50,
    Speed: 90,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/025.png",
    },
    { id: 26,
    name: "Raichu",
    HP: 60,
    Attack: 90,
    Defense: 55,
    SpAttack: 90,
    SpDefense: 80,
    Speed: 110,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/026.png",
    },
    { id: 27,
    name: "Sandshrew",
    HP: 50,
    Attack: 75,
    Defense: 85,
    SpAttack: 20,
    SpDefense: 30,
    Speed: 40,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/027.png",
    },
    { id: 28,
    name: "Sandslash",
    HP: 75,
    Attack: 100,
    Defense: 110,
    SpAttack: 45,
    SpDefense: 55,
    Speed: 65,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/028.png",
    },
    { id: 29,
    name: "Nidoran",
    HP: 55,
    Attack: 47,
    Defense: 52,
    SpAttack: 40,
    SpDefense: 40,
    Speed: 41,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/029.png",
    },
    { id: 30,
    name: "Nidorina",
    HP: 70,
    Attack: 62,
    Defense: 67,
    SpAttack: 55,
    SpDefense: 55,
    Speed: 56,
    img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/030.png",
    },
    ]

    function pokeShuffle(){
        let deckLength = pokedex1.length;
        let playerCardCount = 0;
        let cpuCardCount = 0;
            while (--deckLength > -1){
                let cardIdx = Math.floor(Math.random()*(deckLength+1));
                let randomCard = pokedex1.splice(cardIdx, 1);
                if (playerCardCount > cpuCardCount){
                    cpuCards.push(randomCard[0]);
                    cpuCardCount +=1;
                    totalCpuCards +=1
                }else{
                    playerCards.push(randomCard[0]);
                    playerCardCount +=1
                    totalPlayerCards +=1
                }
            }
            console.log(playerCardCount, cpuCardCount);
    }
    pokeShuffle();

//below holds random cards
// console.log(playerCards);
// console.log(cpuCards);

let playerCardDisplay = document.getElementById("player-card-output-text")
let cpuCardDisplay = document.getElementById("cpu-card-output-text")

function playerCardAmountOutput(){
// console.log(playerCardDisplay)
playerCardDisplay.innerText = totalPlayerCards
}
playerCardAmountOutput();

function cpuCardAmountOutput(){
    // console.log(cpuCardDisplay)
    cpuCardDisplay.innerText = totalCpuCards
}
cpuCardAmountOutput();
function getCard(){
    singlePlayerCard = playerCards.shift();
    singleCpuCard = cpuCards.shift();
}
getCard()
function playerCardStats(){
document.getElementById("player-card-name").innerText = singlePlayerCard.name;
document.getElementById("player-hp-display").innerText = singlePlayerCard.HP;
document.getElementById("player-att-display").innerText = singlePlayerCard.Attack;
document.getElementById("player-def-display").innerText = singlePlayerCard.Defense;
document.getElementById("player-SPA-display").innerText = singlePlayerCard.SpAttack;
document.getElementById("player-SPD-display").innerText = singlePlayerCard.SpDefense;
document.getElementById("player-SP-display").innerText = singlePlayerCard.Speed;
document.getElementById("player-pic").src=singlePlayerCard.img;
}
playerCardStats();


function cpuCardStats(){
document.getElementById("computer-card-name").innerText = singleCpuCard.name;
document.getElementById("computer-hp-display").innerText = singleCpuCard.HP;
document.getElementById("computer-att-display").innerText = singleCpuCard.Attack;
document.getElementById("computer-def-display").innerText = singleCpuCard.Defense;
document.getElementById("computer-SPA-display").innerText = singleCpuCard.SpAttack;
document.getElementById("computer-SPD-display").innerText = singleCpuCard.SpDefense;
document.getElementById("computer-SP-display").innerText = singleCpuCard.Speed;
document.getElementById("computer-pic").src=singleCpuCard.img;
}
cpuCardStats()

playerHpButton.addEventListener('click', hpStatComp);
function hpStatComp(){
    if (singlePlayerCard.HP > singleCpuCard.HP){
        // console.log("player Wins")
        afterClick("player Wins")
    } else if (singlePlayerCard.HP < singleCpuCard.HP){
        // console.log("Computer Wins")
        afterClick("computer Wins")
    } else {
        afterClick("draw")
    }
}
playerAttButton.addEventListener('click', attStatComp);
function attStatComp(){
    if (singlePlayerCard.Attack > singleCpuCard.Attack){
        // console.log("player Wins")
        afterClick("player Wins")
    } else if (singlePlayerCard.Attack < singleCpuCard.Attack){
        // console.log("Computer Wins")
        afterClick("computer Wins")
    } else {
        afterClick("draw")
    }
}
playerDefButton.addEventListener('click', defStatComp);
function defStatComp(){
    if (singlePlayerCard.Defense > singleCpuCard.Defense){
        // console.log("player Wins")
        afterClick("player Wins")
    } else if (singlePlayerCard.Defense < singleCpuCard.Defense){
        // console.log("Computer Wins")
        afterClick("computer Wins")
    } else {
        afterClick("draw")
    }
}
playerSPattButton.addEventListener('click', spAttStatComp);
function spAttStatComp(){
    if (singlePlayerCard.SpAttack > singleCpuCard.SpAttack){
        // console.log("player Wins")
        afterClick("player Wins")
    } else if (singlePlayerCard.SpAttack < singleCpuCard.SpAttack){
        // console.log("Computer Wins")
        afterClick("computer Wins")
    } else {
        afterClick("draw")
    }
}
playerSPdefButton.addEventListener('click', spDefStatComp);
function spDefStatComp(){
    if (singlePlayerCard.SpDefense > singleCpuCard.SpDefense){
        // console.log("player Wins")
        afterClick("player Wins")
    } else if (singlePlayerCard.SpDefense < singleCpuCard.SpDefense){
        // console.log("Computer Wins")
        afterClick("computer Wins")
    } else {
        afterClick("draw")
    }
}
playerSpdButton.addEventListener('click', spdStatComp);
function spdStatComp(){
    if (singlePlayerCard.Speed > singleCpuCard.Speed){
        // console.log("player Wins")
        afterClick("player Wins")
    } else if (singlePlayerCard.Speed < singleCpuCard.Speed){
        // console.log("Computer Wins")
        afterClick("computer Wins")
    } else {
        afterClick("draw")
    }
}
function afterClick (output){
    if (output === "player Wins"){
console.log("player Wins")
playerCards.push(singlePlayerCard)
playerCards.push(singleCpuCard)
totalPlayerCards = playerCards.length
totalCpuCards = cpuCards.length
changeScore()
playerCardDelay()
CpuCardDelay()
showStats1()
    } else {
console.log("Computer Wins")
cpuCards.push(singleCpuCard)
cpuCards.push(singlePlayerCard)
totalPlayerCards = playerCards.length
totalCpuCards = cpuCards.length
changeScore()
playerCardDelay()
CpuCardDelay()
showStats1()
    }
}
// function hideStats1 () {
//     setTimeout(function(){hideThis1.classList.remove("hide-stats")},3000);
//     console.log("hide-stats");
// }

function showStats1 () {
showThis1.classList.remove("hide-stats")
}


function changeScore(){
    setTimeout(function(){ playerCardDisplay.innerText = totalPlayerCards; cpuCardDisplay.innerText = totalCpuCards; }, 3000);
    getCard()
}

function playerCardDelay() {
    setTimeout(playerCardStats(),4000)
}
function CpuCardDelay() {
    setTimeout(cpuCardStats(),4000)
}
// 


// console.log(playerCardDisplay)

// console.log(singlePlayerCard)
// console.log(singleCpuCard)
