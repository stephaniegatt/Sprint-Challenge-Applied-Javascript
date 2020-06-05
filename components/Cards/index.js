// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // console.log("article response", response);
    for (const [key, value] of Object.entries(response.data.articles)) {
        // console.log(`the object ${key}: ${value}`)
        value.forEach((article) => {
            articleCardMaker(article)
            // console.log(article);
        })
      }
    // articleCardMaker(response.data)
  })
  .catch(error => {
    console.log("This is an error", error)
  }, [])  

  const articleCardMaker = (dataArticle) => {
    const card = document.createElement("div")
    const headline = document.createElement("div")
    const author = document.createElement("div")
    const imageContainer = document.createElement("div")
    const authorPhoto = document.createElement("img")
    const authorName = document.createElement("span")

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imageContainer)
    imageContainer.appendChild(authorPhoto)
    author.appendChild(authorName)

    card.classList.add("card")
    headline.classList.add("headline")
    author.classList.add("author")
    imageContainer.classList.add("img-container")

    headline.textContent = dataArticle.headline
    authorPhoto.src = dataArticle.authorPhoto
    authorName.textContent = dataArticle.authorName


    document.querySelector(".cards-container").appendChild(card)
  }

//   articleCardMaker()
