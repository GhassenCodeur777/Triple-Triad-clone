import { ComboData_same_cell1 } from './testData.js';
import { ComboData_plus_cell1 } from './testData.js';

// Array of all available card images
const allCards = [
    {image: "pictures/abadon.png",
    values: [6, 8, 4, 5]},
    {image: "pictures/Aerith.png",
    values: [7, 10, 6,3]},
    {image: "pictures/Auron.png",
    values: [4, 7, 6, 7]},
    {image: "pictures/Brandolf.png",
    values: [5,3,6,5]},
    {image: "pictures/ChubbyChocobo.png",
    values: [4,4,8,9]},
    {image: "pictures/Abomination.png",
    values: [3,6,4,1]},
    {image: "pictures/AbyssWorm.png",
    values: [7,2,3,5]},
    {image: "pictures/Ace.png",
    values: [5,7,1,8]},
    {image: "pictures/Adamantoise.png",
    values: [3,6,4,3]},
    {image: "pictures/Adel.png",
    values: [7,7,1,7]},     
    {image: "pictures/Aered.png",
    values: [3,3,4,3]},     
    {image: "pictures/Agrias.png",
    values: [5,9,7,1]},     
    {image: "pictures/AkiRoss.png",
    values: [4,2,5,4]},     
    {image: "pictures/Alexander.png",
    values: [9,10,4,5]},     
    {image: "pictures/Alligator.png",
    values: [1,5,1,4]},     
    {image: "pictures/Alraune.png",
    values: [2,3,3,5]},     
    {image: "pictures/Amarant.png",
    values: [5,5,6,7]},     
    {image: "pictures/Anacondaur.png",
    values: [5,3,1,5]},     
    {image: "pictures/Angeal.png",
    values: [5,6,2,6]},     
    {image: "pictures/Anima.png",
    values: [5,8,10,1]},     
    {image: "pictures/Antlion.png",
    values: [1,7,7,4]},     
    {image: "pictures/Aranea.png",
    values: [4,4,10,4]},     
    {image: "pictures/Ark.png",
    values: [9,1,10,1]},     
    {image: "pictures/ArkDragon.png",
    values: [3,3,6,4]},     
    {image: "Armadodo",
    values: [6,3,1,6]},     
    {image: "pictures/Armstrong.png",
    values: [1,4,3,6]},     
    {image: "pictures/Ashe.png",
    values: [3,4,8,10]},     
    {image: "pictures/Atomos.png",
    values: [5,3,7,7]},     
    {image: "pictures/Axolotl.png",
    values: [2,1,2,5]},     
    {image: "pictures/Babariccia.png",
    values: [7,1,2,9]},     
    {image: "pictures/Bahamut.png",
    values: [10,8,5,6]},     
    {image: "pictures/Baigan.png",
    values: [2,3,5,6]},     
    {image: "pictures/Balthier.png",
    values: [7,4,5,8]},     
    {image: "pictures/Bandercoeurl.png",
    values: [6,2,1,6]},     
    {image: "pictures/Bandersnatch.png",
    values: [2,5,2,5]},     
    {image: "pictures/Banon.png",
    values: [8,4,4,1]},     
    {image: "pictures/BaronSoldier.png",
    values: [4,2,1,4]},     
    {image: "pictures/Barret.png",
    values: [2,7,7,10]},     
    {image: "pictures/Bartz.png",
    values: [2,3,10,9]},     
    {image: "pictures/Basch.png",
    values: [6,6,6,6]},     
    {image: "pictures/Basilisk.png",
    values: [4,5,2,1]},     
    {image: "pictures/Beatrix.png",
    values: [3,8,8,3]},     
    {image: "pictures/Behemoth.png",
    values: [3,6,5,7]},     
    {image: "pictures/Belhemel.png",
    values: [3,4,5,3]},     
    {image: "pictures/BGH251F2.png",
    values: [5,7,8,5]},     
    {image: "pictures/BiggsWedge.png",
    values: [6,2,7,6]},     
    {image: "pictures/BiteBug.png",
    values: [1,3,3,5]},     
    {image: "pictures/BlackChocobo.png",
    values: [7,5,5,2]},     
    {image: "pictures/BlackWaltz1.png",
    values: [5,2,3,4]},     
    {image: "pictures/BlackWaltz2.png",
    values: [3,4,4,5]},     
    {image: "pictures/BlackWaltz3.png",
    values: [5,5,3,4]},     
    {image: "pictures/Blank.png",
    values: [2,4,6,4]},     
    {image: "pictures/BlazerBeetle.png",
    values: [4,5,1,1]},     
    {image: "pictures/Blitz.png",
    values: [1,6,4,7]},     
    {image: "pictures/Blobra.png",
    values: [2,3,1,5]},     
    {image: "pictures/BloodSoul.png",
    values: [2,1,6,1]},     
    {image: "pictures/BlueDragon.png",
    values: [6,2,7,3]},     
    {image: "pictures/Boco.png",
    values: [1,4,3,10]},     
    {image: "pictures/Bomb.png",
    values: [2,7,6,3]},     
    {image: "pictures/BoneDragon.png",
    values: [1,3,6,7]},     
    {image: "pictures/Bottomswell.png",
    values: [4,2,5,4]},     
    {image: "pictures/Brandelis.png",
    values: [7,2,4,5]},     
    {image: "pictures/Buel.png",
    values: [6,2,2,3]},     
    {image: "pictures/Bunyip.png",
    values: [5,5,3,2]},     
    {image: "pictures/Cactuar.png",
    values: [6,2,6,3]},     
    {image: "pictures/Cagnazzo.png",
    values: [1,7,7,2]},     
    {image: "pictures/CaitSith.png",
    values: [7,2,4,8]},     
    {image: "pictures/Carbuncle.png",
    values: [8,4,10,4]},     
    {image: "pictures/Caterchipillar.png",
    values: [4,2,4,3]},     
    {image: "pictures/Catoblepas.png",
    values: [1,8,7,7]},     
    {image: "pictures/Cecil.png",
    values: [6,4,8,9]},     
    {image: "pictures/Celes.png",
    values: [6,3,4,10]},     
    {image: "pictures/Centaur.png",
    values: [2,2,5,5]},     
    {image: "pictures/Cerberus.png",
    values: [6,3,5,10]},     
    {image: "pictures/Chadley.png",
    values: [1,4,6,4]},     
    {image: "pictures/Chaos.png",
    values: [10,10,5,5]},     
    {image: "pictures/ChaosElgo.png",
    values: [6,5,3,6]},     
    {image: "pictures/ChefLeTonberry.png",
    values: [1,3,5,5]},     
    {image: "pictures/Chicobo.png",
    values: [9,4,8,4]},     
    {image: "pictures/Chigoe.png",
    values: [1,2,1,2]},     
    {image: "pictures/Chimera.png",
    values: [7,6,5,3]},     
    {image: "pictures/Cid.png",
    values: [10,1,8,7]},     
    {image: "pictures/Cissnei.png",
    values: [3,8,7,1]},     
    {image: "pictures/Clive.png",
    values: [3,8,6,10]},     
    {image: "pictures/Cloud.png",
    values: [8,9,10,2]},     
    {image: "pictures/Cockatrice.png",
    values: [2,1,2,6]},     
    {image: "pictures/Coeurl.png",
    values: [3,2,4,4]},     
    {image: "pictures/CPU.png",
    values: [5,4,5,4]},     
    {image: "pictures/Creeps.png",
    values: [5,2,5,2]},     
    {image: "pictures/Cryohedron.png",
    values: [5,5,1,1]},     
    {image: "pictures/Cyan.png",
    values: [5,7,3,8]},     
    {image: "pictures/Dagonite.png",
    values: [6,2,4,5]},     
    {image: "pictures/DarkElf.png",
    values: [6,1,1,7]},     
    {image: "pictures/DarkNation.png",
    values: [4,3,2,4]},     
    {image: "pictures/DeathClaw.png",
    values: [4,4,7,2]},     
    {image: "pictures/Deathguise.png",
    values: [8,2,6,1]},     
    {image: "pictures/Deathmask.png",
    values: [6,2,5,7]},     
    {image: "pictures/Deidar.png",
    values: [3,4,4,3]},     
    {image: "pictures/DemonWall.png",
    values: [1,9,1,6]},     
    {image: "pictures/Diablos.png",
    values: [5,10,8,3]},     
    {image: "pictures/Diremite.png",
    values: [1,5,5,3]},     
    {image: "pictures/Doomtrain.png",
    values: [3,1,10,10]},     
    {image: "pictures/Dracozombie.png",
    values: [5,7,7,1]},     
    {image: "pictures/DualHorn.png",
    values: [2,6,4,6]},     
    {image: "pictures/Edea.png",
    values: [9,10,1,5]},     
    {image: "pictures/Eden.png",
    values: [4,4,9,10]},     
    {image: "pictures/Edgar.png",
    values: [7,3,6,7]},     
    {image: "pictures/Eiko.png",
    values: [10,10,1,1]},     
    {image: "pictures/Elastoid.png",
    values: [6,2,6,7]},     
    {image: "pictures/Elnoyle.png",
    values: [5,3,7,6]},     
];

export {allCards};

// for each card extract the "name" value from the "image" value
allCards.forEach(card => {
  const fileName = card.image.split('/').pop(); // "Abadon.png"
  card.name = fileName.replace('.png', '');      // "Abadon"
});

const myCards_divs = document.querySelectorAll(".card");
const opponentCards_divs = document.querySelectorAll(".opponent-card");

const cards_mine = [
    {id:"pc1",
    name: "Abadon",
    image: "pictures/abadon.png",
    values: [6, 8, 4, 5]},
    {id:"pc2",
    name: "Aerith",
    image: "pictures/Aerith.png",
    values: [7, 10, 6,3]},
    {id:"pc3",
    name: "Auron",
    image: "pictures/Auron.png",
    values: [4, 7, 6, 7]},
    {id:"pc4",
    name: "Brandolf",
    image: "pictures/Brandolf.png",
    values: [5,3,6,5]},
    {id:"pc5",
    name: "ChubbyChocobo",
    image: "pictures/ChubbyChocobo.png",
    values: [4,4,8,9]}
]; 
export {cards_mine};

const cards_opponent = [
    {id: "oc1", name: "Lulu", image: "pictures/Lulu.png", values: [6,7,4,7]},
    {id: "oc2", name: "Maliris", image: "pictures/Maliris.png", values: [4, 9, 2, 5]},
    {id: "oc3", name: "Umaro", image: "pictures/Umaro.png", values: [1, 2, 9, 9]},
    {id: "oc4", name: "Vincent", image: "pictures/Vincent.png", values: [8, 10, 7, 1]},
    {id: "oc5", name: "Tonberry", image: "pictures/Tonberry.png", values: [3, 6, 4, 4]}
];

// populate my HTML card DIVs with images
if (myCards_divs.length>0) {
    var i = 0;
    cards_mine.forEach(card => {
        const img = document.createElement("img");    
        img.src = card.image;
        img.alt=card.name;
        myCards_divs[i].appendChild(img);
        i++;
    });
}

// populate opponent's HTML card DIVs with images
if (opponentCards_divs.length>0) {
    var i = 0;
    cards_opponent.forEach(card_opp => {
        const img = document.createElement("img");    
        img.src = card_opp.image;
        img.alt=card_opp.name;
        // opponentCards_divs[i].classList.add("red-card");
        // opponentCards_divs[i].classList.add("opponent");
        opponentCards_divs[i].appendChild(img);
        i++;
    });
}

const cell = document.getElementById("oc1");
cell.classList.add("red-card");

// game and prize rules 
var plusRule = true;
var sameRule = true;
var comboRule = true;
var plusWallRule = true;
var sameWallRule = true;
var winPrize = "one"; //winner chooses one card
// scores
var my_score = 5; 
var op_score = 5;
// turns 
var turn = 1;
var player = "me"; //I play first
var selected_card_me = {};
var selected_card_opponent = {};
// placed cards
var placed_cards = [];

// creates the event : clicking on one of my cards
document.querySelectorAll('.card').forEach(clicked_card_p => {
        clicked_card_p.addEventListener('click', () => {
            selecting_card_p(clicked_card_p);
        });
    });

// creates the event : clicking on one of the opponent's cards
document.querySelectorAll('.opponent-card').forEach(clicked_card_op => {
        clicked_card_op.addEventListener('click', () => {
            selecting_card_op(clicked_card_op);
        });
    });

// const handlers = [
//     handleCell1,
//     handleCell2,
//     handleCell3,    
// ];
    
// creates the event : clicking on one of grid's cells

document.querySelectorAll('.grid-cell').forEach(clicked_cell => {
    clicked_cell.addEventListener('click', () => {
        const index = parseInt(clicked_cell.id);
        handleCell(clicked_cell);
    });
});
    

function selecting_card_p(clicked_card_p) {    
    if (player == "me") { 
        if (!placed_cards.some(obj => obj.id === clicked_card_p.id)) { //I can not select a previously played card
            selected_card_me = cards_mine.find(carte => carte.id === clicked_card_p.id);
            console.log("selected_card_me : " + selected_card_me.name);                
            console.log();
        }
        else {
            console.log("Cette carte a déjà été jouée!");
        }  
    }
    else {
        console.log("C\'est le tour de l\'adversaire ! (Opponent)");
    }
}

function selecting_card_op(clicked_card_op) {
    if (player == "opponent") 
        {
        if (!placed_cards.some(obj => obj.id === clicked_card_op.id)) { //Opponent can not select a previously played card
            selected_card_opponent = cards_opponent.find(carte_op => carte_op.id === clicked_card_op.id);
            console.log("selected_card_opponent : " +"\r" + selected_card_opponent.name);
            console.log();
        }
        else {
            console.log("Cette carte a déjà été jouée!");
        }
    }
    else {
        console.log("C\'est le tour de l\'adversaire ! (Me)");
    }
}

function handleCell(clicked_cell) {
    var placed_card = {
            id: selected_card_me.id,
            color: "blue",
            position: parseInt(clicked_cell.id),
            name: selected_card_me.name,
            image: selected_card_me.image,
            values: selected_card_me.values,            
            cause_of_color_change : null, // null or same-plus or "superior"
            color_change_turn : []
    };                    
    placed_cards.push(placed_card);
    const cell1 = document.getElementById("1");   
    const img_placed_card = document.createElement("img");    
    img_placed_card.src = placed_card.image;
    img_placed_card.alt=placed_card.name;
    cell1.appendChild(img_placed_card);

    var sum_right = 0;                            
    var sum_below = 0;
    var is_same_right = false;                            
    var is_same_below = false;
    
    // TESTING PURPOSE ONLY 1 (adding 2 fake cards : right and below)          
    ComboData_same_cell1(placed_cards);
    const index_2 = placed_cards.findIndex(card => card.position === 2);
    if (index_2 && index_2 > 0) {
        var card_cell2 = placed_cards[index_2];
    }

    const index_4 = placed_cards.findIndex(card => card.position === 4); 
    if (index_4 && index_4 > 0) {
        var card_cell4 = placed_cards[index_4];            
    }
    // END TESTING PURPOSE ONLY 2              

    //if cell 2 contains a card : we check for SAME against cell2 and calculate the sum
    if (placed_cards.find(obj => obj.position === 2) ) {                                
        var compared_card_cell2 = placed_cards.find(obj => obj.position === parseInt(clicked_cell.id)+1);                  
        if (placed_card.values[1] === compared_card_cell2.values[3]) { //checking for equal values 
            is_same_right = true ;
        }
        sum_right = placed_card.values[1] + compared_card_cell2.values[3];          
    }
    //if cell 4 contains a card : we check for SAME below and calculate the sum  
    if (placed_cards.find(obj => obj.position === parseInt(clicked_cell.id) + 3)) {                         
        var compared_card_cell4 = placed_cards.find(obj => obj.position === parseInt(clicked_cell.id) + 3) ;
        console.log("compared_card_cell4 : " + compared_card_cell4.name + " " + compared_card_cell4.values);
        if (placed_card.values[2] === compared_card_cell4.values[0]) { //checking for equal values 
            is_same_below = true ;
        }
        sum_below = placed_card.values[2] + compared_card_cell4.values[0];  
        console.log("sum_below = " + sum_below); 
    }           
    console.table([
        {
            dir: "right",
            my: placed_card.values[1],
            opp: compared_card_cell2.values[3],
            sum: sum_right,
            same: is_same_right
        },
        {
            dir: "below",
            my: placed_card.values[2],
            opp: compared_card_cell4.values[0],
            sum: sum_below,
            same: is_same_below
        }
        ]); 

    //if SAME applies
    if (sameRule && is_same_right && is_same_below) { 
        card_cell2.color = "blue";
        card_cell2.cause_of_color_change = "same-plus";
        card_cell2.color_change_turn.push(turn);

        card_cell4.color = "blue";
        card_cell4.cause_of_color_change = "same-plus";
        card_cell4.color_change_turn.push(turn);
        setTimeout(() => {
            const cell2 = document.getElementById("2");   
            cell2.classList.remove('opponent');

            const cell4 = document.getElementById("4");   
            cell4.classList.remove('opponent');
        }, 1000); // 1000ms = 1 second
    }

    //if SAME-WALL applies 
    // *** 
    // if (sameWallRule && is_same_right && is_same_below) { 
    //     card_cell2.color = "blue";
    //     card_cell2.cause_of_color_change = "same-plus";
    //     card_cell2.color_change_turn.push(turn);

    //     card_cell4.color = "blue";
    //     card_cell4.cause_of_color_change = "same-plus";
    //     card_cell4.color_change_turn.push(turn);
    //     setTimeout(() => {
    //         const cell2 = document.getElementById("2");   
    //         cell2.classList.remove('opponent');

    //         const cell4 = document.getElementById("4");   
    //         cell4.classList.remove('opponent');
    //     }, 1000); // 1000ms = 1 second
    // }

    //if PLUS applies
    if (plusRule && sum_right === sum_below){                                           
        card_cell2.color = "blue";
        card_cell2.cause_of_color_change = "same-plus";
        card_cell2.color_change_turn.push(turn);

        card_cell4.color = "blue";         
        card_cell4.cause_of_color_change = "same-plus";
        card_cell4.color_change_turn.push(turn);

        setTimeout(() => {
            const cell2 = document.getElementById("2");   
            cell2.classList.remove('opponent');

            const cell4 = document.getElementById("4");   
            cell4.classList.remove('opponent');
        }, 1000); // 1000ms = 1 second
    }
    // combo logic  
    if (comboRule) {             
        const nodes = [
            {
                origin: 1,
                neighbors: [
                    { position: 2, to_origin: 3, from_origin: 1 },
                    { position: 4, to_origin: 0, from_origin: 2 }
                ]
            },
            {
                origin: 2,
                neighbors: [
                    { position: 1, to_origin: 1, from_origin: 3 },
                    { position: 3, to_origin: 3, from_origin: 1 },
                    { position: 5, to_origin: 0, from_origin: 2 }
                ]
            },
            {
                origin: 3,
                neighbors: [
                    { position: 2, to_origin: 1, from_origin: 3 },
                    { position: 6, to_origin: 0, from_origin: 2 }
                ]
            },
            {
                origin: 4,
                neighbors: [
                    { position: 1, to_origin: 2, from_origin: 0 },
                    { position: 5, to_origin: 3, from_origin: 1 },
                    { position: 7, to_origin: 0, from_origin: 2 }
                ]
            },
            {
                origin: 5,
                neighbors: [
                    { position: 2, to_origin: 2, from_origin: 0 },
                    { position: 4, to_origin: 1, from_origin: 3 },
                    { position: 6, to_origin: 3, from_origin: 1 },
                    { position: 8, to_origin: 0, from_origin: 2 }
                ]
            },
            {
                origin: 6,
                neighbors: [
                    { position: 3, to_origin: 2, from_origin: 0 },
                    { position: 5, to_origin: 1, from_origin: 3 },
                    { position: 9, to_origin: 0, from_origin: 2 }
                ]
            },
            {
                origin: 7,
                neighbors: [
                    { position: 4, to_origin: 2, from_origin: 0 },
                    { position: 8, to_origin: 3, from_origin: 1 }
                ]
            },
            {
                origin: 8,
                neighbors: [
                    { position: 5, to_origin: 2, from_origin: 0 },
                    { position: 7, to_origin: 1, from_origin: 3 },
                    { position: 9, to_origin: 3, from_origin: 1 }
                ]
            },
            {
                origin: 9,
                neighbors: [
                    { position: 6, to_origin: 2, from_origin: 0 },
                    { position: 8, to_origin: 1, from_origin: 3 }
                ]
            }
        ];    

        // scan the grid for cards to flip via combo
        for (var node of nodes) {
            // if (node.origin >= 2) {
                var scanned_origin = placed_cards.find(card => card.position === node.origin);
                console.log("scanned_origin : " + scanned_origin.name + "  " + scanned_origin.position);                                  
                for (var neighbor of node.neighbors) {                    
                    var scanned_neighbor = placed_cards.find(card => card.position === neighbor.position);
                    console.log("scanned_neighbor : " + scanned_neighbor.name + "  " + scanned_neighbor.position);                                  
                    if (scanned_neighbor && scanned_neighbor.color === "red" && scanned_origin && scanned_origin.values[neighbor.from_origin] > scanned_neighbor.values[neighbor.to_origin]) {
                        scanned_neighbor.color = "blue";
                        scanned_neighbor.cause_of_color_change = "superior";
                        scanned_neighbor.color_change_turn.push(turn);
                            
                        const neighbor_cell = document.getElementById(scanned_neighbor.position);   
                        console.log("neighbor_cell.id : " + neighbor_cell.id);
                        setTimeout(() => {
                            
                            neighbor_cell.classList.remove('opponent');
                        }, 2000)             
                    }
                }
            // }            
        }
    }

    //if "SUPERIOR" applies (in case SAME or PLUS fail)
    if (sum_right !== null && sum_below !== null && is_same_right !== null && is_same_below !== null  && sum_right !== sum_below && is_same_right === false && is_same_below === false) {  
        if (placed_card.values[1] > compared_card_cell2.values[3]) { // checking if placed card > card on the right
            placed_cards[index_2].color = "blue";
            placed_cards[index_2].cause_of_color_change = "superior";            
        }
        if (placed_card.values[2] > compared_card_cell4.values[0]) { // checking if placed card > card below
            placed_cards[index_4].color = "blue";
            placed_cards[index_4].cause_of_color_change = "superior";            
        }
    }
    // else if (sum_right !== null && sum_below !== null && is_same_right !== null && is_same_below!== null && (sum_right === sum_below || is_same_right && is_same_below) ) { 
    //     console.log("certaines variables ne sont pas définies!!!");
    // }

    turn ++ ;
}

// function handleCell2(clicked_cell2) {
// }
// function handleCell3(clicked_cell3) {
// }

//placing a card on the grid
function placing_card(clicked_cell) {
    // if (!occupied_cells.includes(parseInt(clicked_cell.id))) { //if the selected cell is available
    if (!placed_cards.some(obj => obj.id === parseInt(clicked_cell.id))) { //if the selected cell is available

        switch (player) { //outer switch (my turn or opponent's turn)
            case "me": //My turn
                if (selected_card_me != null && Object.keys(selected_card_me).length > 0) { //if the selected card is valid and unplayed
                    switch (parseInt(clicked_cell.id)) { //inner switch (9 cells, different logic/calculations)
                        case 1 : 
                            handleCell();                                                                              
                            break;    
                        case 2 :
                            handleCell();                       
                            break;    
                        case 3 :
                            handleCell();
                            break;
                        case 4 :
                        case 5 :
                        case 6 :
                        case 7 :
                        case 8 :
                        case 9 :
                    }
       
                }
                break;

            case "opponent":
                
                break;
        }
    } else {
        console.log("Case déjà occupée !");
    }
}


      

