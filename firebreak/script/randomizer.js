const kit = [
  {
    name: "Fix Kit"
  },
  {
    name: "Jump Kit"
  },
  {
    name: "Splash Kit"
  }
]

const weapons = [
  {
    name: "Revolver"
  },
  {
    name: "Double Barrel Shotgun"
  },
  {
    name: "Pump Action Shotgun"
  },
  {
    name: "Bolt Action Rifle"
  },
  {
    name: "Submachine Gun"
  },
  {
    name: "Machine Gun"
  }
];

const grenades = [
  {
    name: "Gunpowder Grenade"
  },
  {
    name: "Shock Grenade"
  },
  {
    name: "Epoxy Grenade"
  }
]

const perks = [
  //Bullets
  {
    name: "Black Rock Rounds",
    imgsrc: "./perks/bullet/black-rock-rounds.png"
  },
  {
    name: "Burning Rounds",
    imgsrc: "./perks/bullet/burning-rounds.png"
  },
  {
    name: "Electric Rounds",
    imgsrc: "./perks/bullet/electric-rounds.png"
  },
  {
    name: "Frozen Rounds",
    imgsrc: "./perks/bullet/frozen-rounds.png"
  },
  {
    name: "Impact Rounds",
    imgsrc: "./perks/bullet/impact-rounds.png"
  },
  {
    name: "Wet Rounds",
    imgsrc: "./perks/bullet/wet-rounds.png"
  },
  //Crew
  {
    name: "Black Rock Bellows",
    imgsrc: "./perks/crew/black-rock-bellows.png"
  },
  {
    name: "First Responder",
    imgsrc: "./perks/crew/first-responder.png"
  },
  {
    name: "Determination",
    imgsrc: "./perks/crew/determination.png"
  },
  {
    name: "Influential",
    imgsrc: "./perks/crew/influential.png"
  },
  {
    name: "Night Terrors",
    imgsrc: "./perks/crew/night-terrors.png"
  },
  {
    name: "Recruiter",
    imgsrc: "./perks/crew/recruiter.png"
  },
  {
    name: "Side Eye",
    imgsrc: "./perks/crew/side-eye.png"
  },
  //Effects
  {
    name: "Armadillo",
    imgsrc: "./perks/effects/armadillo.png"
  },
  {
    name: "Blazing Speed",
    imgsrc: "./perks/effects/blazing-speed.png"
  },
  {
    name: "Covered",
    imgsrc: "./perks/effects/covered.png"
  },
  {
    name: "Hard Living",
    imgsrc: "./perks/effects/hard-living.png"
  },
  {
    name: "Iron Liver",
    imgsrc: "./perks/effects/iron-liver.png"
  },
  {
    name: "Jackrabbit",
    imgsrc: "./perks/effects/jackrabbit.png"
  },
  {
    name: "Shake It Off",
    imgsrc: "./perks/effects/shake-it-off.png"
  },
  {
    name: "Sure Footed",
    imgsrc: "./perks/effects/sure-footed.png"
  },
  //Enemies
  {
    name: "Black Rock Socks",
    imgsrc: "./perks/enemies/black-rock-socks.png"
  },
  {
    name: "Chronicity",
    imgsrc: "./perks/enemies/chronicity.png"
  },
  {
    name: "Cold Shoulder",
    imgsrc: "./perks/enemies/cold-shoulder.png"
  },
  {
    name: "Destabilizer",
    imgsrc: "./perks/enemies/destabilizer.png"
  },
  {
    name: "Dynamo",
    imgsrc: "./perks/enemies/dynamo.png"
  },
  {
    name: "Hot Shot",
    imgsrc: "./perks/enemies/hot-shot.png"
  },
  {
    name: "Hyperhidrosis",
    imgsrc: "./perks/enemies/hyperhidrosis.png"
  },
  {
    name: "Impactful",
    imgsrc: "./perks/enemies/impactful.png"
  },
  {
    name: "Low Profile",
    imgsrc: "./perks/enemies/low-profile.png"
  },
//Player
  {
    name: "Athlete",
    imgsrc: "./perks/player/athlete.png"
  },
  {
    name: "Courier",
    imgsrc: "./perks/player/courier.png"
  },
  {
    name: "Desperate Measures",
    imgsrc: "./perks/player/desperate-measures.png"
  },
  {
    name: "Elbow Grease",
    imgsrc: "./perks/player/elbow-grease.png"
  },
  {
    name: "Greasy Fingers",
    imgsrc: "./perks/player/greasy-fingers.png"
  },
  {
    name: "Heavy Handed",
    imgsrc: "./perks/player/heavy-handed.png"
  },
  {
    name: "Hunter Gatherer",
    imgsrc: "./perks/player/hunter-gatherer.png"
  },
  {
    name: "Jade Rounds",
    imgsrc: "./perks/player/jade-rounds.png"
  },
  {
    name: "Pin Collector",
    imgsrc: "./perks/player/pin-collector.png"
  },
  {
    name: "Pocket Dimensions",
    imgsrc: "./perks/player/pocket-dimensions.png"
  },
  {
    name: "Shop Vacuum",
    imgsrc: "./perks/player/shop-vacuum.png"
  },
  {
    name: "Shower Thoughts",
    imgsrc: "./perks/player/shower-thoughts.png"
  },
  {
    name: "Slide Hustle",
    imgsrc: "./perks/player/slide-hustle.png"
  },
//Utility
  {
    name: "Asbestos Hands",
    imgsrc: "./perks/utility/asbestos-hands.png"
  },
  {
    name: "Bogus Charges",
    imgsrc: "./perks/utility/bogus-charges.png"
  },
  {
    name: "Maintenance Charges",
    imgsrc: "./perks/utility/maintenance-charges.png"
  },
  {
    name: "Murder Charges",
    imgsrc: "./perks/utility/murder-charges.png"
  },
  {
    name: "Rapid Response",
    imgsrc: "./perks/utility/rapid-response.png"
  },
]

document.getElementById('randomize-button').onclick = function() {
  randomizeEverything();
};

function randomizeEverything() {
  randomize(kit, "kit");
  randomize(weapons, "weapon");
  randomize(grenades, "grenade");
  randomizePerks();
}

function randomizePerks() {
  let index = 0;

  document.getElementById("perk").innerHTML = "";

  shuffle(perks);

  for (let slots = 0;slots < 9;slots++) {
    let item = perks[index];
    let itemName = item.name;

    let sizeRng = Math.floor(Math.random()*3);
    
    let perkFinal = `${itemName}`;

    if (sizeRng+slots > 8) {
      sizeRng = 8-slots;
      perkFinal = `${itemName}`;
    } 

    let levelSrc = "";

    switch(sizeRng) {
      case 0:
        levelSrc="./perks/level/1.png"
        break;
      case 1:
        levelSrc="./perks/level/2.png"
        break;
      case 2:
        levelSrc="./perks/level/3.png"
        break;
    }

    slots+=sizeRng;

    let newParagraph = document.createElement("p");
    newParagraph.textContent = perkFinal;

    let newImage = document.createElement("img");
    newImage.setAttribute("src",item.imgsrc);

    let newLevel = document.createElement("img");
    newLevel.setAttribute("src",levelSrc);

    document.getElementById("perk").appendChild(newImage);

    document.getElementById("perk").appendChild(newLevel);

    document.getElementById("perk").appendChild(newParagraph);

    index++;

    console.log(slots);
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function randomize(array, id) {
  let arrayLength = array.length;
  let arrayRng = Math.floor(Math.random()*arrayLength);

  document.getElementById(id).textContent = array[arrayRng].name;
}

randomizeEverything();