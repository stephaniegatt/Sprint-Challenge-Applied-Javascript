// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// function Header() {}


const header = () => {
  const header = document.createElement("div")
  const date = document.createElement("span")
  const heading = document.createElement("h1")
  const temp = document.createElement("span")

  header.appendChild(date)
  header.appendChild(heading)
  header.appendChild(temp)
 
  header.classList.add('header')
  date.classList.add('date')
  temp.classList.add('temp')

  date.textContent = "JUNE 05, 2020"
  heading.textContent = "Lambda Times"
  temp.textContent = "101°"
  

  document.querySelector(".header-container").appendChild(header)
}

header()
