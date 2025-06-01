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


function handleResize() {
  const menu = document.querySelector("#MenuList");
  const shouldHide = window.innerWidth <= 1000;

  // Only update the class if needed
  if (shouldHide && !menu.classList.contains("hide")) {
    menu.classList.add("hide");
  } else if (!shouldHide && menu.classList.contains("hide")) {
    menu.classList.remove("hide");
  }
}

// Run once on page load
handleResize();

//Debounced resize listener to reduce performance hits
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleResize, 150); // waits 150ms after resize stops
});


// dialoge window varables
const thumbnails = document.querySelectorAll(".thumbnail");
const dialog = document.getElementById("imageViewer");
const dialogImg = document.getElementById("viewerImg");
const closeBtn = document.getElementById("closeViewer");

// Show the dialog when a thumbnail is clicked
thumbnails.forEach(img => {
  img.addEventListener("click", () => {
    dialogImg.src = img.dataset.full;
    dialog.showModal(); // opens the dialog
  });
});

// Close button inside dialog
closeBtn.addEventListener("click", () => {
  dialog.close();
});