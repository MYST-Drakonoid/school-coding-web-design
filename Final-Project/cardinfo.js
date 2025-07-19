const cards = [
	{
        cardnum: 1,
        image: "images/DOMT/BALANCE.png",
        cardname: "BALANCE",
        description: " Your mind suffers a wrenching alteration, causing your alignment to change. Lawful becomes chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you"
	},

    {
        cardnum: 2,
        image: "images/DOMT/COMET.png",
        cardname: "COMET",
        description: "If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect."
	},

    {
        cardnum: 3,
        image: "images/DOMT/DONJON.png",
        cardname: "DONJON",
        description: "You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can't be located by any divination magic, but a wish spell can reveal the location of your prison. You draw no more cards."
	},
    	
    {
        cardnum: 4,
        image: "images/DOMT/EURYALE.png",
        cardname: "EURYALE",
        description: "The card's medusa-like visage curses you. You take a -2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse."
	},
    	
    {
        cardnum: 5,
        image: "images/DOMT/FLAMES.png",
        cardname: "FLAMES",
        description: "A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies."
	},
    	
    {
        cardnum: 6,
        image: "images/DOMT/FOOL.png",
        cardname: "FOOL",
        description: "You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level."
	},	
    
    {
        cardnum: 7,
        image: "images/DOMT/GEM.png",
        cardname: "GEM",
        description: "Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet."
	},	
    
    {
        cardnum: 8,
        image: "images/DOMT/IDIOT.png",
        cardname: "IDIOT",
        description: "Permanently reduce your Intelligence by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws."
	},
	
    	{
        cardnum: 9,
        image: "images/DOMT/JESTER.png",
        cardname: "JESTER",
        description: "You gain 10,000 XP, or you can draw two additional cards beyond your declared draws."
	},

    {
        cardnum: 10,
        image: "images/DOMT/KEY.png",
        cardname: "KEY",
        description: "A rare or rarer magic weapon with which you are proficient appears in your hands. The GM chooses the weapon."
	},

    {
        cardnum: 11,
        image: "images/DOMT/KNIGHT.png",
        cardname: "KNIGHT",
        description: "You gain the service of a 4th-level fighter who appears in a space you choose within 30 feet of you. The fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character."
	},
    	
    {
        cardnum: 12,
        image: "images/DOMT/MOON.png",
        cardname: "MOON",
        description: "You are granted the ability to cast the wish spell 1d3 times."
	},
    	
    {
        cardnum: 13,
        image: "images/DOMT/ROGUE.png",
        cardname: "ROGUE",
        description: "A nonplayer character of the GM's choice becomes hostile toward you. The identity of your new enemy isn't known until the NPC or someone else reveals it. Nothing less than a wish spell or divine intervention can end the NPC's hostility toward you."
	},
    	
    	{
        cardnum: 14,
        image: "images/DOMT/RUIN.png",
        cardname: "RUIN",
        description: "All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears."
	},

    {
        cardnum: 15,
        image: "images/DOMT/SKULL.png",
        cardname: "SKULL",
        description: "You summon an avatar of death--a ghostly humanoid skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the GM's choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can't be restored to life."
	},

    {
        cardnum: 16,
        image: "images/DOMT/STAR.png",
        cardname: "STAR",
        description: "Increase one of your ability scores by 2. The score can exceed 20 but can't exceed 24."
	},
    	
    {
        cardnum: 17,
        image: "images/DOMT/SUN.png",
        cardname: "SUN",
        description: "You gain 50,000 XP, and a wondrous item (which the GM determines randomly) appears in your hands."
	},
    	
    {
        cardnum: 18,
        image: "images/DOMT/TALONS.png",
        cardname: "TALONS",
        description: "Every magic item you wear or carry disintegrates. Artifacts in your possession aren't destroyed but do vanish."
	},
    	
    	{
        cardnum: 19,
        image: "images/DOMT/THE-FATES.png",
        cardname: "THE FATES",
        description: "Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other time before you die."
	},

    {
        cardnum: 20,
        image: "images/DOMT/THE-VOID.png",
        cardname: "THE VOID",
        description: "This black card spells disaster. Your soul is drawn from your body and contained in an object in a place of the GM's choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is incapacitated. A wish spell can't restore your soul, but the spell reveals the location of the object that holds it. You draw no more cards."
	},

    {
        cardnum: 21,
        image: "images/DOMT/THRONE.png",
        cardname: "THRONE",
        description: "You gain proficiency in the Persuasion skill, and you double your proficiency bonus on checks made with that skill. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently in the hands of monsters, which you must clear out before you can claim the keep as yours."
	},
    	
    {
        cardnum: 22,
        image: "images/DOMT/VIZIER.png",
        cardname: "VIZIER",
        description: "At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with wisdom on how to apply it."
	}
    	
    
];

document.addEventListener("DOMContentLoaded", () => {
  const cardListEl = document.getElementById("card-list");
  const flipCardEl = document.getElementById("flip-card");
  const flipInnerEl = document.getElementById("flip-inner");
  const cardBackImageEl = document.getElementById("card-back-image");
  const cardFrontImageEl = document.getElementById("card-front-image");
  const cardFrontNameEl = document.getElementById("card-front-name");
  const cardDescriptionEl = document.getElementById("card-description");
  const removePromptEl = document.getElementById("remove-prompt");
  const removeYesBtn = document.getElementById("remove-yes");
  const removeNoBtn = document.getElementById("remove-no");
  const historyListEl = document.getElementById("history-list");
  const secondRecentEffectEl = document.getElementById("second-recent-effect");

  let activeCards = cards.reduce((acc, card) => {
    acc[card.cardnum] = true;
    return acc;
  }, {});

  let history = [];

  function renderCardList() {
    cardListEl.innerHTML = "";
    cards
      .map((card) => {
        const label = document.createElement("label");
        label.htmlFor = "card-checkbox-" + card.cardnum;
        label.textContent = card.cardname;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "card-checkbox-" + card.cardnum;
        checkbox.checked = activeCards[card.cardnum];
        checkbox.dataset.cardnum = card.cardnum;

        checkbox.addEventListener("change", (e) => {
          const num = parseInt(e.target.dataset.cardnum);
          activeCards[num] = e.target.checked;

          if (
            currentCard &&
            currentCard.cardnum === num &&
            !e.target.checked &&
            isFlipped
          ) {
            flipBack();
          }
        });

        label.prepend(checkbox);
        return label;
      })
      .forEach((label) => cardListEl.appendChild(label));
  }

  let isFlipped = false;
  let currentCard = null;

  function flipToFront() {
    const availableCards = cards.filter((c) => activeCards[c.cardnum]);
    if (availableCards.length === 0) {
      alert("No active cards in the deck! Please enable some cards.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableCards.length);
    currentCard = availableCards[randomIndex];

    // Add to history immediately
    addToHistory(currentCard);

    // Show previous card effect immediately
    renderSecondRecentEffect();

    cardFrontImageEl.src = currentCard.image;
    cardFrontImageEl.alt = currentCard.cardname;
    cardFrontNameEl.textContent = currentCard.cardname;
    cardDescriptionEl.textContent = currentCard.description;

    flipInnerEl.classList.add("flipped");
    isFlipped = true;

    removePromptEl.classList.remove("hidden");
    removeNoBtn.focus();
  }

  function flipBack() {
    flipInnerEl.classList.remove("flipped");
    isFlipped = false;
    currentCard = null;
    cardDescriptionEl.textContent = "Click the card to draw.";
    removePromptEl.classList.add("hidden");
  }

  flipCardEl.addEventListener("click", () => {
    if (isFlipped) {
      flipBack();
    } else {
      flipToFront();
    }
  });

  function addToHistory(card) {
    history = [card, ...history];
    renderHistory();
    renderSecondRecentEffect();
  }

  function renderHistory() {
    if (!historyListEl) return;
    historyListEl.innerHTML = history
      .map((card) => `<li>${card.cardname} (Card #${card.cardnum})</li>`)
      .join("");
  }

  function renderSecondRecentEffect() {
    if (!secondRecentEffectEl) return;
    if (history.length < 2) {
      secondRecentEffectEl.textContent = "No previous card effect to show.";
      return;
    }
    const secondCard = history[1];
    secondRecentEffectEl.textContent = `${secondCard.cardname}: ${secondCard.description}`;
  }

  removeYesBtn.addEventListener("click", () => {
    if (!currentCard) return;

    const checkbox = document.getElementById(
      "card-checkbox-" + currentCard.cardnum
    );
    if (checkbox) {
      checkbox.checked = false;
      activeCards[currentCard.cardnum] = false;
    }

    removePromptEl.classList.add("hidden");
    flipBack();
  });

  removeNoBtn.addEventListener("click", () => {
    if (!currentCard) return;

    removePromptEl.classList.add("hidden");
  });

  function init() {
    renderCardList();
    flipBack();
    renderHistory();
    renderSecondRecentEffect();
  }

  init();
});