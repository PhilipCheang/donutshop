// Menu data
const menuItems = [
  {
    name: "Classic Glazed Donut",
    category: "Donut",
    price: "$.99",
    image: "images/glazed.jpg",
  },
  {
    name: "Chocolate Donut",
    category: "Donut",
    price: "$1.49",
    image: "images/chocolate.jpg",
  },
  {
    name: "Sausage and Jalapeno Kolache",
    category: "Kolache",
    price: "$3.49",
    image: "images/kolache.jpg",
  },
  {
    name: "Bacon Egg and Cheese Croissant",
    category: "Breakfast Croissant",
    price: "$4.99",
    image: "images/croissant.jpg",
  },
];

// Function to create menu cards
function createMenuCards() {
  const menuContainer = document.getElementById("menu");

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.name;
    card.appendChild(image);

    const name = document.createElement("h3");
    name.textContent = item.name;
    card.appendChild(name);

    const category = document.createElement("p");
    category.textContent = item.category;
    card.appendChild(category);

    const price = document.createElement("p");
    price.textContent = item.price;
    card.appendChild(price);

    menuContainer.appendChild(card);
  });
}

// Call the function to create menu cards
createMenuCards();
