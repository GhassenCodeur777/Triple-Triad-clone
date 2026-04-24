import { allCards } from './duel.js';
import { cards_mine } from './duel.js';

export function ComboData_same_cell1(placed_cards) {
    const index_1 = placed_cards.findIndex(card => card.position === 1); // the index of my placed card this turn (cell 1)   
    const my_placed_card = placed_cards[index_1]; // my placed card this turn (cell 1)    
    
    // all cards triggering SAME right (no cards with any value === 1 will be included)
    const cards_right_triggering_same = allCards.filter(obj => obj.values[3] === my_placed_card.values[1] &&  obj.values[0] > 1 && obj.values[1] > 1 && obj.values[2] > 1 && obj.values[3] > 1); 
    
    // all cards triggering SAME below (no cards with any value === 1 will be included)
    const cards_below_triggering_same = allCards.filter(obj => obj.values[0] === my_placed_card.values[2] &&  obj.values[0] > 1 && obj.values[1] > 1 && obj.values[2] > 1 && obj.values[3] > 1); 

    // the card to be placed in cell 2 
    var card_cell2 = {... cards_right_triggering_same[0] };
    card_cell2.position = 2;
    card_cell2.color = "red"; 
    card_cell2.cause_of_color_change = null;
    card_cell2.color_change_turn = [];
    
    placed_cards.push(card_cell2);

    // all cards that can be placed in cell 3 that are inferior to cell 2
    var cards_in_cell3 = allCards.filter(cardOfAll => cardOfAll.values[3] < card_cell2.values[1] );     
    
    // the card to be placed in cell 3 
    var card_cell3 = {... cards_in_cell3[0] };
    card_cell3.position = 3;
    card_cell3.color = "red";
    card_cell3.cause_of_color_change = null;
    card_cell3.color_change_turn = [];
    placed_cards.push(card_cell3);

    // the card to be placed in cell 4
    var card_cell4 = {... cards_below_triggering_same[0] };
    card_cell4.position = 4;
    card_cell4.color = "red";
    card_cell4.cause_of_color_change = null;
    card_cell4.color_change_turn = [];
    placed_cards.push(card_cell4);

    // populate cell 2 with a red image
    const cell2 = document.getElementById("2");   
    cell2.classList.add("opponent");
    const img_cell2 = document.createElement("img");    
    img_cell2.src = card_cell2.image;
    img_cell2.alt=card_cell2.name;
    cell2.appendChild(img_cell2);
    
    // populate cell 4 with a red image
    const cell4 = document.getElementById("4");   
    cell4.classList.add("opponent");
    const img_cell4 = document.createElement("img");    
    img_cell4.src = card_cell4.image;
    img_cell4.alt=card_cell4.name;
    cell4.appendChild(img_cell4);
   
    // populate cell 3 with a red image
    const cell3 = document.getElementById("3");   
    cell3.classList.add("opponent");
    const img_cell3 = document.createElement("img");    
    img_cell3.src = card_cell3.image;
    img_cell3.alt=card_cell3.name;
    cell3.appendChild(img_cell3);

    // All cards that can be placed in cell 5 that are inferior to cell 2
    var cards_in_cell5 = allCards.filter(cardOfAll => cardOfAll.values[0] < card_cell2.values[2]);     
    
    // the card to be placed in cell 5 
    var card_cell5 = {... cards_in_cell5[0] };
    card_cell5.position = 5;
    card_cell5.color = "red";
    card_cell5.cause_of_color_change = null;
    card_cell5.color_change_turn = [];

    placed_cards.push(card_cell5);

    // populate cell 5 with a red image
    const cell5 = document.getElementById("5");   
    cell5.classList.add("opponent");
    const img_cell5 = document.createElement("img");    
    img_cell5.src = card_cell5.image;
    img_cell5.alt=card_cell5.name;
    cell5.appendChild(img_cell5);

    // All cards that can be placed in cell 6 that are inferior to cell 3 and inferior to cell 5
    var cards_in_cell6 = allCards.filter(cardOfAll => cardOfAll.values[0] < card_cell3.values[2] && cardOfAll.values[3] < card_cell5.values[1]);     
    
    // the card to be placed in cell 6 
    var card_cell6 = {... cards_in_cell6[0] };
    card_cell6.position = 6;
    card_cell6.color = "red";
    card_cell6.cause_of_color_change = null;
    card_cell6.color_change_turn = [];

    placed_cards.push(card_cell6);

    // populate cell 6 with a red image
    const cell6 = document.getElementById("6");   
    cell6.classList.add("opponent");
    const img_cell6 = document.createElement("img");    
    img_cell6.src = card_cell6.image;
    img_cell6.alt=card_cell6.name;
    cell6.appendChild(img_cell6);

    // All cards that can be placed in cell 7 that are inferior to cell 4 and have a high right value (8 or more, so that it can beat cell 8)
    var cards_in_cell7 = allCards.filter(cardOfAll => cardOfAll.values[0] < card_cell4.values[2] && cardOfAll.values[1] > 8);     
    
    // the card to be placed in cell 7 
    var card_cell7 = {... cards_in_cell7[0] };
    card_cell7.position = 7;
    card_cell7.color = "red";
    card_cell7.cause_of_color_change = null;
    card_cell7.color_change_turn = [];

    placed_cards.push(card_cell7);

    // populate cell 7 with a red image
    const cell7 = document.getElementById("7");   
    cell7.classList.add("opponent");
    const img_cell7 = document.createElement("img");    
    img_cell7.src = card_cell7.image;
    img_cell7.alt=card_cell7.name;
    cell7.appendChild(img_cell7);

    // All cards that can be placed in cell 8 that are inferior to cell 7 and inferior to cell 5  
    var cards_in_cell8 = allCards.filter(cardOfAll => cardOfAll.values[3] < card_cell7.values[1] && cardOfAll.values[0] < card_cell5.values[2]);     
    
    // the card to be placed in cell 8 
    var card_cell8 = {... cards_in_cell8[0] };
    card_cell8.position = 8;
    card_cell8.color = "red";
    card_cell8.cause_of_color_change = null;
    card_cell8.color_change_turn = [];

    placed_cards.push(card_cell8);

    // populate cell 8 with a red image
    const cell8 = document.getElementById("8");   
    cell8.classList.add("opponent");
    const img_cell8 = document.createElement("img");    
    img_cell8.src = card_cell8.image;
    img_cell8.alt=card_cell8.name;
    cell8.appendChild(img_cell8);

    // All cards that can be placed in cell 9 that are inferior to cell 8 and inferior to cell 6  
    var cards_in_cell9 = allCards.filter(cardOfAll => cardOfAll.values[3] < card_cell8.values[1] && cardOfAll.values[0] < card_cell6.values[2]);     
    
    // the card to be placed in cell 9 
    var card_cell9 = {... cards_in_cell9[0] };
    card_cell9.position = 9;
    card_cell9.color = "red";
    card_cell9.cause_of_color_change = null;
    card_cell9.color_change_turn = [];

    placed_cards.push(card_cell9);

    // populate cell 9 with a red image
    const cell9 = document.getElementById("9");   
    cell9.classList.add("opponent");
    const img_cell9 = document.createElement("img");    
    img_cell9.src = card_cell9.image;
    img_cell9.alt=card_cell9.name;
    cell9.appendChild(img_cell9);
}

// *** function to be changed and tested 
export function ComboData_plus_cell1(placed_cards) {

    const index_1 = placed_cards.findIndex(card => card.position === 1); // the index of my placed card this turn (cell 1)   
    const my_placed_card = placed_cards[index_1]; // my placed card this turn (cell 1)    

    // PLUS RIGHT
    var cards_right_initiating_plus = allCards.filter(obj => obj.values[3] <= 6 ); // cards to be placed at cell 2 whoose low values "help initiate" PLUS 
    var card_cell2 = { ...cards_right_initiating_plus[0] };
    card_cell2.position = 2;
    card_cell2.color = "red";
    card_cell2.cause_of_color_change = null;
    card_cell2.color_change_turn = [];  
    // place the right fake cards
    placed_cards.push(card_cell2);
    // populate cell 2 with a red image
    const cell2 = document.getElementById("2");   
    cell2.classList.add("opponent");    
    const img_right = document.createElement("img");    
    img_right.src = card_cell2.image;
    img_right.alt=card_cell2.name;
    cell2.appendChild(img_right); 

    // PLUS BELOW (the trigger) 
    var cards_below_triggering_plus = []; // cards to be placed at cell 4 to trigger PLUS         
    for (const cardOfAll of allCards) {
        if (my_placed_card.values[1] + card_cell2.values[3] === my_placed_card.values[2] + cardOfAll.values[0]) {
            cardOfAll.position = 4;
            cardOfAll.color = "red";
            cardOfAll.cause_of_color_change = null;
            cardOfAll.color_change_turn = [];  
            cards_below_triggering_plus.push(cardOfAll);
        }
    }

    for (var card of cards_right_initiating_plus) {
        console.log("%c" + card.name + " " + card.values, "color:blue"); 
    }
    for (var card of cards_below_triggering_plus) {
        console.log("%c" + card.name + " " + card.values, "color:orange"); 
    }
    
    var card_cell4 = { ...cards_below_triggering_plus[0] };
    // if (cards_below_triggering_plus[0] !== card_cell2) {
        // console.log("possibility 1"); 
        card_cell4 = cards_below_triggering_plus[0];
        card_cell4.position = 4;
        card_cell4.color = "red";
        card_cell4.cause_of_color_change = null;
        card_cell4.color_change_turn = [];
        placed_cards.push(card_cell4);    
        // populate cell 4 with a red image
        const cell4 = document.getElementById("4");   
        cell4.classList.add("opponent");
        const img_below = document.createElement("img");    
        img_below.src = card_cell4.image;
        img_below.alt=card_cell4.name;
        cell4.appendChild(img_below);
    // }   
}


