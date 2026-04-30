import { allCards } from './duel.js';
import { cards_mine } from './duel.js';
import { nodes } from './duel.js';

export function FakeSameCombo(placed_cards, clicked_cell) {
    //placing cards that trigger SAME 
    const node_current = nodes.find(obj => obj.origin === parseInt(clicked_cell.id));    
    let placed_card = placed_cards.find(obj => obj.position === parseInt(clicked_cell.id));   
    placed_card.isFake = false;
    console.log("placed_card.name = " + placed_card.name + "   " + placed_card.position);

    const node_placed_card = nodes.find(node => node.origin === parseInt(clicked_cell.id)); 
    const number_of_neighbors = node_placed_card.neighbors.length; 

    // SAME logic
    for (let i = 0 ; i < node_current.neighbors.length ; i++) {
        let card_triggering_same = { ... allCards.find(cardOfAll => 
            cardOfAll.values[node_current.neighbors[i].to_origin] === placed_card.values[node_current.neighbors[i].from_origin] &&
            cardOfAll.values [0] >= 3 &&  cardOfAll.values [1] >= 3 && cardOfAll.values [2] >= 3 && cardOfAll.values [3] >= 3 
        )};
       
        card_triggering_same.position = node_current.neighbors[i].position;
        card_triggering_same.color = "red";
        card_triggering_same.isFake = false;
        card_triggering_same.is_just_flipped = true;
        placed_cards.push(card_triggering_same);
                 
        const cell_div = document.getElementById(node_current.neighbors[i].position);   
        cell_div.classList.add("opponent");
        const img_cell_div = document.createElement("img");    
        img_cell_div.src = card_triggering_same.image;
        img_cell_div.alt=card_triggering_same.name;
        cell_div.appendChild(img_cell_div);
    }

    // combo logic             
    // put cards that will flip via combo on the grid
    let is_first_find = true;
    let weak_card = {};

    // external for loop
    for (const node of nodes) {

        // if all neighbors are occupied and not fake we break for all loops
        const map = new Map(placed_cards.map(c => [c.position, c]));        
        if (
            node.neighbors.every(neighbor => {
                const card = map.get(neighbor.position);
                return card && card.isFake === false;
            })
            && node.neighbors.length === number_of_neighbors
            && node.origin !== node_placed_card.origin
        ) {
            break;
        }

        // if node.origin is not occupied : if it's the first (which will also be the last) time then we place a weak card in node.origin
        if (!placed_cards.find(obj => obj.position === node.origin)) {                        
            if (is_first_find) {
                weak_card = { ... allCards.find(cardOfAll =>
                node.neighbors.every(neighbor =>
                    cardOfAll.values[neighbor.from_origin] < 3
                )
                )};
                weak_card.position = node.origin;
                weak_card.color = "red"; 
                weak_card.isFake = true; 
                console.log("weak_card.name = " + weak_card.name + " weak_card.position = " + weak_card.position);
                placed_cards.push(weak_card);

                const cell_div = document.getElementById(node.origin);   
                cell_div.classList.add("opponent");
                const img_cell_div = document.createElement("img");    
                img_cell_div.src =  weak_card.image;
                img_cell_div.alt= weak_card.name;
                cell_div.appendChild(img_cell_div);

                is_first_find = false;
            }            
        }

        // *** if the neighbors are occupied and at least one of them is not fake then we create a card that is weaker than the non-fake neighbors
        // obsolete if part of the code below it will be adopted
        // for (const neighbor of node.neighbors) {  
        //     let non_fakes_to_origin = [];
        //     const neighbor_non_fake_Card = placed_cards.find(card => card.position === neighbor.position && card.isFake === false)
        //     console.log("neighbor_non_fake_Card : " + neighbor_non_fake_Card.name + "   " + neighbor_non_fake_Card.position);
        //     const to_origin = node.neighbors.find(neighbor => neighbor.position === neighbor_non_fake_Card.position).to_origin;
        //     if (to_origin) {
        //         non_fakes_to_origin.push(to_origin); 
        //     }
        // }
    
        // internal for loop               
        for (const neighbor of node.neighbors) {            

            // if the neighbor is not occupied
            if (!placed_cards.find(obj => obj.position === neighbor.position)) {
                const node_card = placed_cards.find(card => card.position === node.origin) 
                if (node_card.isFake === false) {
                    let card = { ... allCards.find(neighborCard => neighborCard.values[neighbor.to_origin] < node_card.values[neighbor.from_origin]) };
                    // let card = { ... allCards.find(obj => obj.values[neighbor.to_origin] > weak_card.values[neighbor.from_origin]) };
                    card.position = neighbor.position;
                    card.color = "red"; 
                    card.isFake = true; 
                    console.log("card.name = " + card.name + " card.position = " + card.position);
                    placed_cards.push(card);
                    
                    const cell_div = document.getElementById(neighbor.position);   
                    cell_div.classList.add("opponent");
                    const img_cell_div = document.createElement("img");    
                    img_cell_div.src =  card.image;
                    img_cell_div.alt= card.name;
                    cell_div.appendChild(img_cell_div);
                }
                else if (node_card.isFake === true) {
                    let card = { ... allCards.find(neighborCard => neighborCard.values[neighbor.to_origin] > node_card.values[neighbor.from_origin]) };
                    // let card = { ... allCards.find(obj => obj.values[neighbor.to_origin] > weak_card.values[neighbor.from_origin]) };
                    card.position = neighbor.position;
                    card.color = "red"; 
                    card.isFake = true; 
                    console.log("card.name = " + card.name + " card.position = " + card.position);
                    placed_cards.push(card);
                    
                    const cell_div = document.getElementById(neighbor.position);   
                    cell_div.classList.add("opponent");
                    const img_cell_div = document.createElement("img");    
                    img_cell_div.src =  card.image;
                    img_cell_div.alt= card.name;
                    cell_div.appendChild(img_cell_div);
                }
                
            }    
            
        }
        


    }



    





    
    // const newOrigin_position = nodes[placed_card.position - 1].neighbors[0].position; 
    

    // const node_current = 

    // let is_first_node = true;
    // for (const node of nodes) {
    //     if (isf) {
    //         // if the position node.origin does not contain a card
    //         if(!placed_cards.find(obj=>obj.position === node.origin) ) {
    //         let card_inferior = { ... allCards.find(cardOfAll => cardOfAll.values[neighbor.from_origin] === neighbor_card.values[neighbor.from_origin])};                            
    //         }
    //         is_first_node = false;
    //     }                                                    
    // }

    // let i = 0;
    // for (const node of nodes) {
    //     for (const neighbor of node.neighbors) {            
    //         if (placed_cards.find(obj => obj.position === neighbor.position && obj.is_just_flipped) ) {
    //             const neighbor_card = placed_cards.find(obj => obj.position === neighbor.position); 
    //             let card_triggering_same = { ... allCards.find(cardOfAll => cardOfAll.values[neighbor.from_origin] === neighbor_card.values[neighbor.from_origin])};                
    //             placed_cards.push(card_triggering_same);

    //             const cellId = `cell-${i}`; // Dynamically generate the ID
    //             console.log("cellId ci bas : ");
    //             console.log(cellId);
    //             const cellDiv = document.createElement("div"); 
    //             console.log("cellDiv ci bas : ");
    //             console.log(cellDiv);
    //             cellDiv.id = card_triggering_same.position;
    //             cellDiv.classList.add("opponent");
                
    //             const img_cell = document.createElement("img");     
    //             img_cell.src = card_triggering_same.image;
    //             img_cell.alt = card_triggering_same.name;
    //             cellDiv.appendChild(img_cell);
    //         }
    //     }           
    // }


}





