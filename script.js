// Varibles for navigation

let counter = 0;
const sections = document.querySelectorAll('section');
const progressHeading = document.querySelector('.progress h2');
const circles = document.querySelectorAll('.circle');

// Updates progress-heading text and circle progress bar
const progressCounter = () => {
  
  // Update progress heading text
  progressHeading.textContent = `${counter + 1}/${sections.length}`;

  // Reset circles
  circles.forEach((circle) => {
    circle.style.backgroundColor = "transparent";
  });

  // Color circle of current section
  document.querySelector(`.circle-${counter + 1}`).style.backgroundColor = "#ddd";

}

// Move forward 1 section

const moveForward = () => {
  counter++;
    
    if (counter >= sections.length) {
      // Scrolled past footer - go to first section
      counter = 0;
      sections.forEach((section) => {
        section.style.left = "0";
      });
    } else {
      // Go forward 1 section
      document.querySelector(`.section-${counter}`).style.left = "-100vw";
    }

    progressCounter();
}

// Move backward 1 section

const moveBackward = () => {
  if (counter <= 0) {
    // Scrolled past header - go to last section
    counter = 5;
    sections.forEach((section, i) => {
      if (i === sections.length - 1) return;
      section.style.left = "-100vw";
    });
  } else {
    // Go back 1 section
    document.querySelector(`.section-${counter}`).style.left = "0";
  }

  counter--;

  progressCounter();
}

// Mouse Wheel Event

window.addEventListener('wheel', (e) => {
  const deltaY = e.deltaY > 0;

  if (deltaY) {
    moveForward();
  } else {
    moveBackward();
  }

});

// Navigation Buttons

// <<--
document.querySelector('.left-btn').addEventListener('click', () => { 
  moveBackward(); 
});

// -->>
document.querySelector('.right-btn').addEventListener('click', () => { 
  moveForward(); 
});

// Grapes

document.querySelector('.grapes-img').addEventListener('mouseover', () => {
  document.querySelector('.section-3-wrapper').style.opacity = ".5";
});


document.querySelector('.grapes-img').addEventListener('mouseout', () => {
  document.querySelector('.section-3-wrapper').style.opacity = "1";
});
