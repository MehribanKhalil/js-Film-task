//Select html elements
const rowElement = document.querySelector(".row");

//axios
async function getData() {
  try {
    const response = await axios ("https://api.tvmaze.com/shows");
    const data= response.data
    data.forEach((item) => {
      console.log(item);

    //  creating element
      const cart = document.createElement("div");
      cart.innerHTML = `
                  <div class="card_img card-img-top">
                      <img src=${item.image.medium} alt="">
                      <div class='overlay'></div>
                  </div>
                  <div class='card_content '>
                      <h3 class="card_title">${item.name}</h3>
                      <h6 class="card_rating">IMDb: ${item.rating.average===null? 0 : item.rating.average }</h6>
                      <h6 class="card_lang">language: ${item.language}</h6>
                  </div> `;

      //adding class
      cart.classList.add("col-12", "col-md-6", "col-lg-3", "card");

      //appending elements
      rowElement.appendChild(cart);
    });
  } catch {
    console.error(error);
  }
}

getData();


// fetching data
// async function getData() {
//   try {
//     const response = await fetch("https://api.tvmaze.com/shows");
//     const data = await response.json();

//     data.forEach((item) => {
//       console.log(item);

//       //creating element
//       const cart = document.createElement("div");
//       cart.innerHTML = `
//                   <div class="card_img card-img-top">
//                       <img src=${item.image.medium} alt="">
//                       <div class='overlay'></div>
//                   </div>
//                   <div class='card_content '>
//                       <h3 class="card_title">${item.name}</h3>
//                       <h6 class="card_rating">IMDb: ${item.rating.average===null? 0 : item.rating.average }</h6>
//                       <h6 class="card_lang">language: ${item.language}</h6>
//                   </div> `;

//       //adding class
//       cart.classList.add("col-12", "col-md-6", "col-lg-3", "card");

//       //appending elements
//       rowElement.appendChild(cart);
//     });
//   } catch {
//     console.error(error);
//   }
// }

// getData();
