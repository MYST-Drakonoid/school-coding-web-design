document.addEventListener('DOMContentLoaded', () => {
  const rollButton = document.getElementById('roll-button');
  const rollButtonMobile = document.getElementById('roll-button-mobile');
  const diceImage = document.getElementById('dice-image');
  const historyList = document.getElementById('history-list');
  const recentRoll = document.getElementById('recent-roll');
  const diceCountInput = document.getElementById('dice-count');
  const diceTypeSelect = document.getElementById('dice-type');

  function rollDice() {
    const count = parseInt(diceCountInput.value);
    const type = parseInt(diceTypeSelect.value);

    if (isNaN(count) || count < 1 || count > 10) {
      alert('Please enter a valid number of dice (1-10).');
      return;
    }

    if (![4,6,8,10,12,20].includes(type)) {
      alert('Please select a valid dice type.');
      return;
    }

    diceImage.classList.add('rolling');
    rollButton.disabled = true;
    rollButtonMobile.disabled = true;

    setTimeout(() => {
      const rolls = [];
      for (let i = 0; i < count; i++) {
        rolls.push(Math.floor(Math.random() * type) + 1);
      }

      diceImage.classList.remove('rolling');
      rollButton.disabled = false;
      rollButtonMobile.disabled = false;

      diceImage.src = `images/d${type}.png`;
      diceImage.alt = `A d${type} dice image`;

      // Update recent roll text
      recentRoll.textContent = `Last roll: ${rolls.join(', ')}`;

      // Add to history (newest on top)
      const listItem = document.createElement('li');
      listItem.textContent = `${count}d${type}: ${rolls.join(', ')}`;
      historyList.prepend(listItem);
    }, 2000);
  }

  rollButton.addEventListener('click', rollDice);
  rollButtonMobile.addEventListener('click', rollDice);
});
