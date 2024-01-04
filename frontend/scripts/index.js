let renderArea = document.getElementById("cars");


async function renderCars() {
    let res = await fetch("https://car-rental-8r2h.onrender.com/cars", {
        "method" : "GET",
        "headers" : {
            "Content-Type" : "application/json"
        }
    });

    res = await res.json();

    let car_list = getCardList(res);

    renderArea.append(car_list);

}

function getCardList(res) {
    let cardList = document.createElement("div");
    cardList.classList.add("card-list");
    for(let i = 0; i <= res.length - 1; i++){
      cardList.append(getCard(i+1, res[i].brand, res[i].year, res[i].type, res[i].kms, res[i].Description, res[i].Price));
    }
    return cardList;
  }

//   "id": 1,
//     "brand": "Tata",
//     "year": 2019,
//           "type":"Manual",
//     "kms": 10000,
//     "Description": "Tata Altroz with all original documents",
//     "Price": 500000
  
  function getCard(id, brand, year, type, kms, description, price){
    let card = document.createElement("div");
    card.setAttribute("data-id", id);
    card.classList.add("card");
  
    let cardImg = document.createElement("div");
    cardImg.classList.add("card_img");
    cardImg.style.width = "100%";
    // cardImg.style.height = "100px";
    cardImg.style.display = "flex";
  
    let cimage = document.createElement("img");
    cimage.setAttribute("src", "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600");
    cimage.style.width = "100%";
    cimage.style.height = "100%";
    cardImg.append(cimage);
  
    let cardBody = document.createElement("div");
    cardBody.classList.add("card_body");
  
    let carbrand = document.createElement("h2");
    let caryear = document.createElement("h3");
    let carkms =document.createElement("h4");
    let cardes = document.createElement("div");
    let cartype = document.createElement("ul");
    let cp = document.createElement("div");
    carbrand.classList.add("card_item_car_brand");
    caryear.classList.add("card_item_car_year");
    carkms.classList.add("card_item_car_kms");
    cardes.classList.add("card_item_car_description");
    cartype.classList.add("card_item_car_type");
    cp.classList.add("card_item_car_price");
    carbrand.textContent = brand;
    carbrand.style.textAlign = "center";
    carbrand.style.backgroundColor = "#C35720";
    carbrand.style.color = "white";
    cardes.textContent = description;
    cartype.textContent = type;
    caryear.textContent = year;
    carkms.textContent = kms;
    cp.textContent = `Rs.${price}/month`;
    cp.style.backgroundColor = "#E88181";
    cp.style.padding = "15px 25px 15px 15px";
    cp.style.borderRadius = "10px";
    cp.style.width = "15%";
    cp.style.textAlign = "center";
    
  
    cardBody.append(carbrand, caryear, cardes, cartype, cp);
    card.append(cardImg, cardBody);
  
    return card;
  }

// window.onload("", async () => {
    // let res = await fetch("https://car-rental-8r2h.onrender.com/cars", {
    //     "method" : "GET",
    //     "headers" : {
    //         "Content-Type" : "application/json"
    //     }
    // });

    // res = await res.json();
    // renderArea.innerHTML = res;
    // console.log(res);
// });

renderCars();