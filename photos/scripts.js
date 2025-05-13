  const button = document.getElementById('MenuButton');
  const element = document.getElementById('MenuList');
  var count = 0

//   if (element.style.display != 'none' && count === 0) {
//     element.style.display = 'none';
//     count ++
//   }

  button.addEventListener('click', () => {
    // Toggle visibility using CSS display
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });