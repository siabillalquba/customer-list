const dataContactsListElement = document.getElementById("data-contacts");

let dataContacts = [
  {
    id: 1,
    name: "Sia Billal Quba",
    email: "siabillalquba@example.com",
    phone: "+6281122334455",
    address: {
      street: "Jalan Ir Soekarno No. 17845",
      city: "Batam",
      country: "Indonesia",
    },
    age: 28,
    isFavorited: true,
  },
  {
    id: 2,
    name: "Bacharuddin Jusuf Habibie",
    email: "bjhabibie@example.com",
    phone: "+6282233445566",
    address: {
      street: "Templergraben 55",
      city: "Aachen",
      country: "Germany",
    },
    age: 83,
    isFavorited: false,
  },
];

function getCurrentContactId() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const id = Number(params.get("id"));

  return id;
}

function renderContactById() {
  const id = getCurrentContactId();
  const contacts = dataContacts;
  const oneContact = contacts.find((oneContact) => oneContact.id === id);

  dataContactsListElement.innerHTML = `
  <li>
    <h2>${oneContact.name}</h2>
    <p>${oneContact.age} years old</p>
    <p>${oneContact.phone}</p>
    <p>${oneContact.email}</p>
    <p>
      ${oneContact.address.street},
      ${oneContact.address.city},
      ${oneContact.address.country}
    </p>
    <p>${oneContact.isFavorited ? "⭐ Favorited" : ""}</p>
    
    <div>
        <button onclick="renderEditContactFormById(${
          oneContact.id
        })">Edit</button>
        <button onclick="deleteContactById(${oneContact.isFavorited}, ${
    oneContact.id
  })">Delete</button>
    </div>
  </li>`;
}

window.addEventListener("load", renderContactById);
