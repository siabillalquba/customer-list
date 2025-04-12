const contacts = [
  {
    id: 1,
    age: 28,
    name: "Sia Billal Quba",
    email: "siabillal@gmail.com",
    phone: "+6281122334455",
    address: {
      street: "Jalan Ir Soekarno No. 17845",
      city: "Batam",
      country: "Indonesia",
    },
    isFavorited: true,
  },
  {
    id: 2,
    age: 25,
    name: "Monkey D Luffy",
    email: "mugiwara@pirates.com",
    phone: "+2182233445566",
    address: {
      street: "Foosha Village 1",
      city: "East Blue",
      country: "Indonesia",
    },
    isFavorited: true,
  },
  {
    id: 3,
    age: 26,
    name: "Roronoa Zoro",
    email: "marimo@pirates.com",
    phone: "+2183344556677",
    address: {
      street: "Shimotsuki Village 1",
      city: "East Blue",
      country: "Indonesia",
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
      Address     : ${contact.address.street}, ${contact.address.city}, ${
      contact.address.country
    }
      ${contact.isFavorited ? "Favorited" : ""}
    `);
  }
}

function searchContact(search) {
  const foundName = contacts.find((contact) => contact.name.includes(search));
  console.log(foundName);
}

searchContact("R");
//displayContacts();
