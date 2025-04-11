const contacts = [
  {
    id: 1,
    name: "Sia Billal Quba",
    email: "siabillal@gmail.com",
    phone: "+6281122334455",
    age: 28,
    address: {
      street: "Jalan Ir Soekarno No. 17845",
      city: "Batam",
    },
    isFavorited: true,
  },
  {
    id: 2,
    name: "Monkey D Luffy",
    email: "mugiwara@pirates.com",
    phone: "+2182233445566",
    age: 25,
    address: {
      street: "Foosha Village 1",
      city: "East Blue",
    },
    isFavorited: true,
  },
  {
    id: 3,
    name: "Roronoa Zoro",
    email: "marimo@pirates.com",
    phone: "+2183344556677",
    age: 26,
    address: {
      street: "Shimotsuki Village 1",
      city: "East Blue",
    },
    isFavorited: false,
  },
];

function displayContacts() {
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    console.log(`
    Full Name   : ${contact.name}
    Age         : ${contact.age} years old
    Phone       : ${contact.phone}
    Email       : ${contact.email}
    Address     : ${contact.address.street}, ${contact.address.city}
    ${contact.isFavorited ? "Favorited" : ""}
  `);
  }
}

displayContacts();
