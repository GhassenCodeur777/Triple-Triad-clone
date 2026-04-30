import { FakeSameCombo } from './testData.js';

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
    {image: "pictures/Elvoret.png",
    values: [7,8,3,4]},     
    {image: "pictures/EmeraldWeapon.png",
    values: [3,10,9,2]},     
    {image: "pictures/Estinien.png",
    values: [8,8,1,7]},     
    {image: "pictures/Evrae.png",
    values: [3,8,5,4]},     
    {image: "pictures/Exdeath.png",
    values: [5,9,7,4]},     
    {image: "pictures/Fang.png",
    values: [4,5,8,7]},     
    {image: "pictures/Fangshell.png",
    values: [3,4,2,1]},     
    {image: "pictures/Fastitocalon.png",
    values: [7,5,1,3]},     
    {image: "pictures/Fastitocalon-F.png",
    values: [3,5,2,1]},     
    {image: "pictures/Fenrir.png",
    values: [3,6,9,6]},     
    {image: "pictures/Firion.png",
    values: [9,4,5,6]},     
    {image: "pictures/Flamehound.png",
    values: [3,3,3,3]},     
    {image: "pictures/Flan.png",
    values: [5,3,1,2]},     
    {image: "pictures/Flandragora.png",
    values: [5,3,7,1]},     
    {image: "pictures/FloatingEye.png",
    values: [1,2,6,2]},     
    {image: "pictures/Forbidden.png",
    values: [6,6,2,3]},     
    {image: "pictures/Fran.png",
    values: [5,7,4,8]},     
    {image: "pictures/Freya.png",
    values: [3,8,6,7]},     
    {image: "pictures/FujinRaijin.png",
    values: [2,8,8,4]},     
    {image: "pictures/Funguar.png",
    values: [5,1,1,3]},
    {image: "pictures/Gabranth.png",
    values: [7,7,5,5]},
    {image: "pictures/Gaius.png",
    values: [2,4,10,8]},
    {image: "pictures/Garchimacera.png",
    values: [4,4,2,3]},
    {image: "pictures/Gargantua.png",
    values: [5,6,8,6]},
    {image: "pictures/Gargoyle.png",
    values: [6,2,3,2]},
    {image: "pictures/Garland.png",
    values: [3,7,8,4]},
    {image: "pictures/Garnet.png",
    values: [2,7,10,7]},
    {image: "pictures/Garuda.png",
    values: [3,4,1,3]},
    {image: "pictures/Gau.png",
    values: [5,5,5,8]},
    {image: "pictures/Gayla.png",
    values: [2,1,4,4]},
    {image: "pictures/Geezard.png",
    values: [1,4,1,5]},
    {image: "pictures/Genesis.png",
    values: [6,7,2,7]},
    {image: "pictures/Geosgaeno.png",
    values: [3,6,1,6]},
    {image: "pictures/Gerogero.png",
    values: [1,8,8,3]},
    {image: "pictures/Gesper.png",
    values: [1,5,4,1]},
    {image: "pictures/GiantCrab.png",
    values: [3,1,1,6]},
    {image: "pictures/Gigantoad.png",
    values: [3,5,3,2]},
    {image: "pictures/Gilgamesh.png",
    values: [3,8,9,6]},
    {image: "pictures/GIM47N.png",
    values: [5,5,7,4]},
    {image: "pictures/GiNattak.png",
    values: [7,4,5,1]},
    {image: "pictures/Gizamaluke.png",
    values: [4,4,5,5]},
    {image: "pictures/GlacialEye.png",
    values: [6,1,4,3]},
    {image: "pictures/Goblin.png",
    values: [1,4,2,2]},
    {image: "pictures/Godo.png",
    values: [4,6,1,6]},
    {image: "pictures/Gogo.png",
    values: [8,5,4,4]},
    {image: "pictures/Golbez.png",
    values: [4,5,8,7]},
    {image: "pictures/GoldDragon.png",
    values: [3,5,9,4]},
    {image: "pictures/Granaldo.png",
    values: [7,2,8,5]},
    {image: "pictures/GrandDragon.png",
    values: [5,2,6,6]},
    {image: "pictures/GrandMantis.png",
    values: [5,2,5,3]},
    {image: "pictures/Grat.png",
    values: [7,1,3,1]},
    {image: "pictures/Grendel.png",
    values: [4,4,5,2]},
    {image: "pictures/Griever.png",
    values: [10,2,3,10]},
    {image: "pictures/Griffin.png",
    values: [4,2,2,6]},
    {image: "pictures/GuardScorpion.png",
    values: [1,5,1,5]},
    {image: "pictures/Hades.png",
    values: [5,8,3,8]},
    {image: "pictures/Hecteyes.png",
    values: [1,3,7,2]},
    {image: "pictures/HedgehogPie.png",
    values: [4,3,4,1]},
    {image: "pictures/HellHouse.png",
    values: [3,2,4,1]},
    {image: "pictures/Hexadragon.png",
    values: [7,5,4,3]},
    {image: "pictures/Highwind.png",
    values: [6,3,10,5]},
    {image: "pictures/Hope.png",
    values: [8,5,7,4]},
    {image: "pictures/Hydra.png",
    values: [5,3,1,5]},
    {image: "pictures/Ifrit.png",
    values: [9,6,2,8]},
    {image: "pictures/Iguion.png",
    values: [8,2,8,2]},
    {image: "pictures/Imp.png",
    values: [3,5,3,6]},
    {image: "pictures/IronGiant.png",
    values: [6,5,6,5]},
    {image: "pictures/Irvine.png",
    values: [10,7,5,1]},
    {image: "pictures/Ixion.png",
    values: [8,5,10,2]},
    {image: "pictures/Jack.png",
    values: [8,3,6,3]},
    {image: "pictures/Jecht.png",
    values: [7,8,6,5]},
    {image: "pictures/Jelleye.png",
    values: [3,2,1,7]},
    {image: "pictures/Jenova.png",
    values: [8,1,10,5]},
    {image: "pictures/Jessie.png",
    values: [8,6,5,2]},
    {image: "pictures/Jihl.png",
    values: [2,7,7,3]},
    {image: "pictures/Jill.png",
    values: [7,4,9,4]},
    {image: "pictures/Julia.png",
    values: [9,1,5,5]},
    {image: "pictures/JumboCactuar.png",
    values: [8,8,4,4]},
    {image: "pictures/Kain.png",
    values: [7,7,5,7]},
    {image: "pictures/KalmFang.png",
    values: [1,3,3,3]},
    {image: "pictures/Kan-E-Senna.png",
    values: [2,5,7,1]},
    {image: "pictures/Kaze.png",
    values: [7,5,5,5]},
    {image: "pictures/Kefka.png",
    values: [7,10,8,2]},
    {image: "pictures/Kelzmelzer.png",
    values: [3,2,2,4]},
    {image: "pictures/Killbin.png",
    values: [1,5,3,2]},
    {image: "pictures/Kimahri.png",
    values: [5,6,5,5]},
    {image: "pictures/Kraken.png",
    values: [9,4,5,2]},
    {image: "pictures/Krysta.png",
    values: [7,5,8,1]},
    {image: "pictures/Kuja.png",
    values: [7,3,6,10]},
    {image: "pictures/Kujata.png",
    values: [5,7,6,7]},
    {image: "pictures/Lahabrea.png",
    values: [7,7,5,4]},
    {image: "pictures/Lamia.png",
    values: [4,4,2,6]},
    {image: "pictures/LandWorm.png",
    values: [3,3,3,6]},
    {image: "pictures/Lani.png",
    values: [5,1,5,7]},
    {image: "pictures/Lann.png",
    values: [6,5,3,1]},
    {image: "pictures/Leblanc.png",
    values: [5,1,1,9]},
    {image: "pictures/Lebreau.png",
    values: [4,6,5,2]},
    {image: "pictures/Leo.png",
    values: [8,4,8,2]},
    {image: "pictures/Leviathan.png",
    values: [7,10,2,7]},
    {image: "pictures/Levikron.png",
    values: [2,1,4,1]},
    {image: "pictures/Lewena.png",
    values: [3,5,3,4]},
    {image: "pictures/Lich.png",
    values: [5,4,9,2]},
    {image: "pictures/Lightning.png",
    values: [4,4,9,9]},
    {image: "pictures/Locke.png",
    values: [4,6,10,3]},
    {image: "pictures/MadamM.png",
    values: [4,10,4,2]},
    {image: "pictures/Madeen.png",
    values: [5,10,5,2]},
    {image: "pictures/MagicPot.png",
    values: [7,2,4,4]},
    {image: "pictures/MagitekArmor.png",
    values: [4,4,4,7]},
    {image: "pictures/MagusSisters.png",
    values: [5,5,5,5]},
    {image: "pictures/Malboro.png",
    values: [7,7,4,3]},
    {image: "pictures/Manderville.png",
    values: [6,6,5,1]},
    {image: "pictures/Mateus.png",
    values: [2,7,7,7]},
    {image: "pictures/Medusa.png",
    values: [3,6,1,4]},
    {image: "pictures/Megistotherian.png",
    values: [8,1,8,1]},        
];

// for each card extract the "name" value from the "image" value
allCards.forEach(card => {
  const fileName = card.image.split('/').pop(); // "Abadon.png"
  card.name = fileName.replace('.png', '');      // "Abadon"
});

// My 5 cards and my opponent's 5 cards 
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

const cards_opponent = [
    {id: "oc1", name: "Lulu", image: "pictures/Lulu.png", values: [6,7,4,7]},
    {id: "oc2", name: "Maliris", image: "pictures/Maliris.png", values: [4, 9, 2, 5]},
    {id: "oc3", name: "Umaro", image: "pictures/Umaro.png", values: [1, 2, 9, 9]},
    {id: "oc4", name: "Vincent", image: "pictures/Vincent.png", values: [8, 10, 7, 1]},
    {id: "oc5", name: "Tonberry", image: "pictures/Tonberry.png", values: [3, 6, 4, 4]}
];

// populate my 5 HTML card DIVs with images
if (myCards_divs.length>0) {
    let i = 0;
    cards_mine.forEach(card => {
        const img = document.createElement("img");    
        img.src = card.image;
        img.alt=card.name;
        myCards_divs[i].appendChild(img);
        i++;
    });
}
// populate opponent's 5 HTML card DIVs with images
if (opponentCards_divs.length>0) {
    let i = 0;
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

// game and prize rules 
let plusRule = true;
let sameRule = true;
let comboRule = true;
let plusWallRule = true;
let sameWallRule = true;
let winPrize = "one"; //winner chooses one card
// scores
let my_score = 5; 
let op_score = 5;
// turns 
let turn = 1;
let player = "me"; //I play first
let selected_card_mine = {};
let selected_card_opponent = {};
// placed cards
let placed_cards = [];
// SAME variables
let is_same_up = false;                            
let is_same_right = false;                            
let is_same_below = false;
let is_same_left = false;
// PLUS variables
let sum_up = 0;                            
let sum_right = 0;                            
let sum_down = 0;
let sum_left = 0;
// the logical structure of the grid : cells and their neighbors
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

export {cards_mine};
export {cards_opponent};
export {allCards};
export {nodes};

// creates the event : clicking on one of my cards (in hand)
document.querySelectorAll('.card').forEach(clicked_card_p => {
        clicked_card_p.addEventListener('click', () => {
            selecting_card_p(clicked_card_p);
        });
    });

// creates the event : clicking on one of the opponent's cards (in hand)
document.querySelectorAll('.opponent-card').forEach(clicked_card_op => {
        clicked_card_op.addEventListener('click', () => {
            selecting_card_op(clicked_card_op);
        });
    });
    
// creates the event : clicking on a grid's cell
document.querySelectorAll('.grid-cell').forEach(clicked_cell => {
    clicked_cell.addEventListener('click', () => {
        const index = parseInt(clicked_cell.id);
        handleCell(clicked_cell);
    });
});    

// creates the event : clicking on one of my 5 cards (in hand)
function selecting_card_p(clicked_card_p) {    
    if (player == "me") { 
        if (!placed_cards.some(obj => obj.id === clicked_card_p.id)) { //I can not select a previously played card
            selected_card_mine = cards_mine.find(carte => carte.id === clicked_card_p.id);
            // console.log("selected_card_mine : " + selected_card_mine.name);                
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

// creates the event : clicking on one of the opponent's 5 cards (in hand)
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

// creates the event : clicking on 1 of the 9 cells of the grid
function handleCell(clicked_cell) {
    let placed_card = {
            id: selected_card_mine.id,
            color: "blue",
            position: parseInt(clicked_cell.id),
            name: selected_card_mine.name,
            image: selected_card_mine.image,
            values: selected_card_mine.values,                   
            // cause_of_color_change : null, // null or same-plus or "superior"
            // color_change_turn : []
    };                    
    placed_cards.push(placed_card);
    const cell = document.getElementById(clicked_cell.id);   
    const img_placed_card = document.createElement("img");    
    img_placed_card.src = placed_card.image;
    img_placed_card.alt=placed_card.name;
    cell.appendChild(img_placed_card);

    // TESTING PURPOSE ONLY 1 (adding fake cards)          
    FakeSameCombo(placed_cards, clicked_cell);
    // END TESTING PURPOSE ONLY 2              

    const node_current = nodes.find(obj => obj.origin === parseInt(clicked_cell.id) ); 
    // SAME logic
    if (sameRule) {
        // counting the SAME occurences
        let counter_same = 0
        for (const neighbor of node_current.neighbors) {
            let compared_card = placed_cards.find(obj => obj.position === neighbor.position);  
            if (compared_card) {
                let is_same = placed_card.values[neighbor.from_origin] === compared_card.values[neighbor.to_origin];                
                    if (is_same) {
                        counter_same ++ ;
                    }        
            }      
            else {
                console.log("compared_card does not exist");
            }                      
        }            

        // triggering and accomplishing SAME    
        if (counter_same >= 2) {
            for (const neighbor of node_current.neighbors) {
                let compared_card = placed_cards.find(obj => obj.position === neighbor.position);  
                if (compared_card) {
                    let is_same = (placed_card.values[neighbor.from_origin] === compared_card.values[neighbor.to_origin]);
                    // console.log("is_same = " + is_same);
                    if (compared_card.color === "red" && is_same) {
                        compared_card.color = "blue";
                        compared_card.is_just_flipped = true;
                        
                        setTimeout(() => {
                            const cell = document.getElementById(compared_card.position);   
                            cell.classList.remove('opponent');
                        }, 1000);                    
                    }
                }    
            }    
        }               
    }

    else {
        console.log("The rule \"SAME\" is not active");
    }

    // combo logic (Other conditions must be probably added)
    if (comboRule) {        
        // scan the grid for cards to flip via combo
        for (let node of nodes) {
            // if (node.origin >= 2) {
                let scanned_origin_card = placed_cards.find(card => card.position === node.origin);
                if (scanned_origin_card) {
                    // console.log("scanned_origin_card : " + scanned_origin_card.name + "  " + scanned_origin_card.position);                                  
                    for (let neighbor of node.neighbors) {                    
                        let scanned_neighbor = placed_cards.find(card => card.position === neighbor.position);
                        if (scanned_neighbor) {
                            // console.log("scanned_neighbor : " + scanned_neighbor.name + "  " + scanned_neighbor.position);                                  
                            if (scanned_neighbor && scanned_neighbor.color === "red" && scanned_origin_card && scanned_origin_card.values[neighbor.from_origin] > scanned_neighbor.values[neighbor.to_origin]) {
                                scanned_neighbor.color = "blue";
                                scanned_neighbor.cause_of_color_change = "superior";
                                // scanned_neighbor.color_change_turn.push(turn);
                                    
                                const neighbor_cell = document.getElementById(scanned_neighbor.position);   
                                // console.log("neighbor_cell.id : " + neighbor_cell.id);
                                setTimeout(() => {
                                    
                                    neighbor_cell.classList.remove('opponent');
                                }, 2000)             
                            }
                        }    
                    }
                }    
                else {
                    console.log("scanned_origin_card does not exist");                                  
                }
            // }            
        }
    }    
    turn ++ ;
}


    



      

