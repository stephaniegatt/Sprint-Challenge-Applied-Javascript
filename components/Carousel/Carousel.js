/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <img class="carousel">
    <img class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let allImages = [];
let imageIndex = 0;

const carousel = () => {
  const carousel = document.createElement("div")
  const lButton = document.createElement("div")
  const imageOne = document.createElement("img")
  const imageTwo = document.createElement("img")
  const imageThree = document.createElement("img")
  const imageFour = document.createElement("img")
  const rButton = document.createElement("div")

  carousel.appendChild(lButton)
  carousel.appendChild(imageOne)
  carousel.appendChild(imageTwo)
  carousel.appendChild(imageThree)
  carousel.appendChild(imageFour)
  carousel.appendChild(rButton)

  carousel.classList.add("carousel")
  lButton.classList.add("left-button")
  rButton.classList.add("right-button")
  

  imageOne.src = "./assets/carousel/mountains.jpeg"
  imageTwo.src = "./assets/carousel/computer.jpeg"
  imageThree.src = "./assets/carousel/trees.jpeg"
  imageFour.src = "./assets/carousel/turntable.jpeg"

  allImages = [imageOne, imageTwo, imageThree, imageFour]


  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function showDivs(selectedIndex) {
    const selectedImage = allImages[selectedIndex];
    
  }

  lButton.addEventListener("click", () => {
    if (imageIndex > 0) {
      imageIndex--;
    }  
  });

  rButton.addEventListener("click", () => {
    if (imageIndex < 3) {
      imageIndex++;
    }
  })
  // debugger
  document.querySelector(".carousel-container").appendChild(carousel)
}
carousel()



