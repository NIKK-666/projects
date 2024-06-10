const parentElement = document.getElementById("parentElement");
const showMassage = document.getElementById("showMassage");
const changeColor = document.body.style;

propose = () => {
  parentElement.style.display = "none";
  showMessage.style.display = "block";
  changeColor.background =
    "linear-gradient(116.82deg, #ff94e7 0%, #27cbff 100%)";
};

// Animate Text with Anim JS
var textWrapper = document.querySelector(".ml6 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml6 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml6",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

  
  // const yesButton = document.getElementById('Yes')
  // const noButton = document.getElementById('No')
  const buttons = document.querySelectorAll('.btn');
 

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      // const yesIndex = Array.from(cta.children).indexOf('Yes');
      // const noIndex = Array.from(cta.children).indexOf('No');
      
      // if(yesIndex < noIndex){
      //   cta.insertBefore('No','Yes');
      // }else{
      //   cta.insertBefore('Yes','No');
      // }

       if (button.textContent === 'No') {
      //  if(yesIndex < noIndex){
        button.textContent = 'Yes';
      } else {
      
        button.textContent = 'No';
      }
    });
  });

//   const buttons = document.querySelectorAll('.btn');

// buttons.forEach((button, index) => {
//   button.addEventListener('mouseover', () => {
//     const buttonTexts = ['Yes', 'No','Yes', 'No'];
//     button.textContent = buttonTexts[(index + 1) % 3];
//   });
// });

// const buttons = document.querySelectorAll('.btn');

// buttons.forEach((button, index) => {
//   button.addEventListener('mouseover', () => {
//     if (index === 0) {
//       button.textContent = 'No';
//     } else {
//       button.textContent = 'Yes';
//     }
//   });
// });